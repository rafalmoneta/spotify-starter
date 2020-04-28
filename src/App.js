// src/app.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getAccessToken } from './spotify';
import RecentlyPlayed from './components/RecentlyPlayed';

function App() {
  //creating a state
  const [token, setToken] = useState(null);

  // getting a token
  useEffect(() => {
    let _token = getAccessToken();
    if(_token) {
      setToken(_token);
    }
  })


  return (
    <div className="App">
      {!token && (
        <Login />
      )}
      {token && (
        <RecentlyPlayed />
      )}
    </div>
  );
}

export default App;