import React, { useState, useEffect } from 'react';
import { getRecentlyPlayedTracks } from '../spotify';
import Track from './Track';

const RecentlyPlayed = () => {
  const [tracks, setTracks] = useState(null);

  useEffect(()=>{
    const getTracks = async () => {
      const {data} = await getRecentlyPlayedTracks();
      setTracks(data.items);
    }
    getTracks();
  }, [])

  return (
    <div className="recently-played-tracks">
      <h2>Listening History</h2>
      {tracks && 
        tracks.map((track, index) => {
        return (
          <Track
            url={track.track.album.images.slice(-1).pop().url}
            track={track.track.name}
            artists={track.track.artists}
            album={track.track.album.name}
            key={index}
          />
        )
      })}
    </div>
  );
}
 
export default RecentlyPlayed;