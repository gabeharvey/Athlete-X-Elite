import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import SignUp from './components/SignUp'; // Uncomment if needed in the future

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'black',
        color: '#FFFDD0',
        margin: 0,
        padding: 0,
        fontFamily: "'Changa', cursive", 
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Navbar /> 
        <main>
          <Outlet /> 
        </main>
        <Footer /> 
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;

