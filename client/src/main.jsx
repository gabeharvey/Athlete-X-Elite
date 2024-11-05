import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import MainLayout from './components/MainLayout'; 
import LogIn from './components/LogIn.jsx'; 
import SignUp from './components/SignUp.jsx';  
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import Contact from './components/Contact.jsx';
import Basketball from './components/Basketball.jsx';
import Football from './components/Football.jsx';
import Baseball from './components/Baseball.jsx';
import Volleyball from './components/Volleyball.jsx';
import Golf from './components/Golf.jsx';
import TableTennis from './components/TableTennis.jsx';
import Hockey from './components/Hockey.jsx';
import Skiing from './components/Skiing.jsx';
import Track from './components/Track.jsx';
import Biking from './components/Biking.jsx';
import Weightlifting from './components/Weightlifting.jsx';
import Swimming from './components/Swimming.jsx';
import Soccer from './components/Soccer.jsx';
import Elite from './components/Elite.jsx';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'transparent',
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
      { path: 'signup', element: <SignUp /> }, 
      { path: 'privacypolicy', element: <PrivacyPolicy /> }, 
      { path: 'contact', element: <Contact /> }, 
      { path: 'basketball', element: <Basketball /> },
      { path: 'football', element: <Football /> },
      { path: 'baseball', element: <Baseball /> },
      { path: 'volleyball', element: <Volleyball /> },
      { path: 'golf', element: <Golf /> },
      { path: 'tabletennis', element: <TableTennis /> },
      { path: 'hockey', element: <Hockey /> },
      { path: 'skiing', element: <Skiing /> },
      { path: 'track', element: <Track /> },
      { path: 'biking', element: <Biking /> },
      { path: 'weightlifting', element: <Weightlifting /> },
      { path: 'swimming', element: <Swimming /> },
      { path: 'soccer', element: <Soccer /> },
      { path: 'elite', element: <Elite /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
