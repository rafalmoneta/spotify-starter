import axios from 'axios';
import hash from './hash';

export const getAccessToken = () => {
  let token = hash.access_token;
  return token;
}

export let token = getAccessToken();

export const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

//API calls

//get user recently played tracks
export const getRecentlyPlayedTracks = () => axios.get('https://api.spotify.com/v1/me/player/recently-played', {headers});