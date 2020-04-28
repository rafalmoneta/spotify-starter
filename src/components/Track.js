import React from 'react';

const Track = ({url,track, artists, album}) => {
  return (
    <div
    className="track"
    >
      <div className="track-content">
        <div className="track-image">
          {url &&
            <img src={url} alt="track"/>
          }
        </div>
        <div className="track-left">
          {track &&
            <span className="track-name">{track}</span>
          }
          <div className="track-artists">
            { 
              artists && artists.map((artist, index) => (
                <span key={index}>
                {artist.name}
                {artists.length > 0 && index === artists.length - 1 ? '' : ','}&nbsp;
                </span>
              ))
            }
            {album && 
              <span>
              &nbsp;&middot;&nbsp;&nbsp;{album}
              </span>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Track;