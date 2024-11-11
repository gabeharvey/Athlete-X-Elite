import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: function(value) {
        return /^(?=.*[A-Za-z\d@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
      },
      message: 'Password must be at least 8 characters long and contain letters, numbers, and special characters.',
    },
  },
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next(); 
  try {
    if (!/^(?=.*[A-Za-z\d@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.password)) {
      return next(new Error('Password must be at least 8 characters long and contain letters, numbers, and special characters.'));
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next(); 
  } catch (err) {
    next(err); 
  }
});

const User = mongoose.model('User', userSchema);
export default User;
