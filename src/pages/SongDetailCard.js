import React from 'react';

import './SongDetailCard.css';

const SongDetailCard = props => {
  return (
    <div className="song-card">
      {props.children}
    </div>
  );
};

export default SongDetailCard;
