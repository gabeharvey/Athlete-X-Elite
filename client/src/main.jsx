import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Baseball from './components/Baseball.jsx';
import Basketball from './components/Basketball.jsx';
import Biking from './components/Biking.jsx';
import Checkout from './components/Checkout.jsx';
import Contact from './components/Contact.jsx';
import Elite from './components/Elite.jsx';
import Football from './components/Football.jsx';
import Golf from './components/Golf.jsx';
import Hockey from './components/Hockey.jsx';
import LogIn from './components/LogIn.jsx';
import NotFound from './components/NotFound.jsx';
import PaymentForm from './components/PaymentForm.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
import SignUp from './components/SignUp.jsx';
import Skiing from './components/Skiing.jsx';
import Soccer from './components/Soccer.jsx';
import Swimming from './components/Swimming.jsx';
import TableTennis from './components/TableTennis.jsx';
import Track from './components/Track.jsx';
import Volleyball from './components/Volleyball.jsx';
import Weightlifting from './components/Weightlifting.jsx';
import MainLayout from './components/MainLayout.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "black",
        color: "#FFFDD0",
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <MainLayout /> },
      { path: 'login', element: <LogIn /> }, 
      { path: 'baseball', element: <Baseball /> },
      { path: 'basketball', element: <Basketball /> },
      { path: 'biking', element: <Biking /> },
      { path: 'football', element: <Football /> },
      { path: 'golf', element: <Golf /> },
      { path: 'hockey', element: <Hockey /> },
      { path: 'skiing', element: <Skiing /> },
      { path: 'soccer', element: <Soccer /> },
      { path: 'swimming', element: <Swimming /> },
      { path: 'tabletennis', element: <TableTennis /> },
      { path: 'track', element: <Track /> },
      { path: 'volleyball', element: <Volleyball /> },
      { path: 'weightlifting', element: <Weightlifting /> },
      {
        path: 'signup',
        element: <SignUp /> 
      },
      {
        path: 'checkout',
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        )
      },
      {
        path: 'contact',
        element: (
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        )
      },
      {
        path: 'elite',
        element: (
          <PrivateRoute>
            <Elite />
          </PrivateRoute>
        )
      },
      {
        path: 'paymentform',
        element: (
          <PrivateRoute>
            <PaymentForm />
          </PrivateRoute>
        )
      },
      {
        path: 'privacypolicy',
        element: (
          <PrivateRoute>
            <PrivacyPolicy />
          </PrivateRoute>
        )
      },
      {
        path: 'shoppingcart',
        element: (
          <PrivateRoute>
            <ShoppingCart />
          </PrivateRoute>
        )
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </AuthProvider>
);
