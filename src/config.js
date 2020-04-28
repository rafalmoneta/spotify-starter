export const authEndpoint = 'https://accounts.spotify.com/authorize';
export const CLIENT_ID = 'YOUR_CLIENT_ID' //put your client id here
export const REDIRECT_URI = "http://localhost:3000/callback"; //remember to change this IF YOU DECIDE TO DEPLOY your app to for example heroku

// your application requests authorization
export const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-read-recently-played", //adding a new scope
];

//if you decided to publish your code to Github, remember to hide your config.js in .gitignore!