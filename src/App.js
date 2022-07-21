import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route } from 'react-router-dom';
import {ThemeProvider } from '@mui/material';
import { DetailMovie } from './containers/DetailMovie';
import Login from './containers/Login';
import Register from './containers/Register';
import Pricing from './containers/Pricing';
import About from './containers/About';
import Contact from './containers/Contact';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './containers/Home';
import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
            
        } />
        <Route path='login' element={
          <ProtectedRoute loginOnly={false}>
            <Login />
          </ProtectedRoute>
        } />
        <Route path='register' element={
          <ProtectedRoute loginOnly={false}>
            <Register />
          </ProtectedRoute>
        } />
        <Route path='pricing' element={
            <>
            <Navbar />
            <Pricing />
            <Footer />
            </>
            
        } />
        <Route path='about' element={
            <>
            <Navbar />
            <About />
            
            </>
            
        } />
        <Route path='kontak' element={
            <>
            <Navbar />
            <Contact />
            
            </>
            
        } />
        <Route path='movie/:id' element={
            <ProtectedRoute loginOnly={true} >
              <>
              <Navbar />
              <DetailMovie />
              <Footer />
              </>
            </ProtectedRoute>
        } />
      </Routes> 
        
      </div>
    </ThemeProvider>
  );
}

export default App;