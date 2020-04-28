import React from 'react';
import {CLIENT_ID, REDIRECT_URI, authEndpoint, scopes} from '../config';

const Login = () => {
  return (
    <div className="login-container">
      <h1>Music app with Spotify API</h1>
      
      <a
        className="btn login-btn"
        href={`${authEndpoint}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join(
          "%20"
        )}&response_type=token&show_dialog=true`}
      >
        Login to Spotify
      </a>
      
    </div>
  );
}
 
export default Login
