import React, { useEffect } from 'react';
import Navbar from './components/navBar';
import HomePage from './containers/HomePage';
import {useNavigate} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './authentications/firebase';

function App(){
  const navigate = useNavigate();
  const [user, isLoading, error] = useAuthState(auth);

  useEffect(
    ()=>{
      if (isLoading){
        return;
      }
      if(!user){
        navigate('/');
      }
    }, [user, isLoading, navigate]
  );
  
  return(
    <div className='App'>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
