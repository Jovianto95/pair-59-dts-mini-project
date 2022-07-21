import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './containers/Login';
import Register from './containers/Register';
import Pricing from './containers/Pricing';
import About from './containers/About';
import ProtectedRoute from './components/ProtectedRoute';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { DetailMovie } from './containers/DetailMovie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={
            <App />
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
            <Pricing />
        } />
        <Route path='about' element={
            <About />
        } />
        <Route path='movie/:id' element={
            <ProtectedRoute loginOnly={true} >
              <DetailMovie />
            </ProtectedRoute>
        } />
      </Routes> 
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();