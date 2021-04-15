import React, { useState } from 'react';

import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';

import { LoginContext } from './Helper/Context';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <div className={'container'}>
      <Home />
      <Login />
      <Profile />

      </div>
    
    </LoginContext.Provider>
  );
}

export default App;
