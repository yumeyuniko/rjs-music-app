import React from 'react';
import PlayerDetail from './PlayerDetail';
import PlayerControls from './PlayerControls';

function Player(props) {
  return (
    <div className="c-player">
      <audio></audio>
      <h4>Playing now</h4>
      {/* DETAILS */}
      <PlayerDetail song={props.song} />
      {/* CONTROLS */}
      <PlayerControls />
      <p>
        <strong>Next up:</strong>
        {props.nextSong.title} by {props.nextSong.artist}
      </p>
    </div>
  );
}

export default Player;
