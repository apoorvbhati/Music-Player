import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const SongsAudioPlayer = props => {
  const { songToPlay } = props;

  return (
    <div style={{width: "80%", margin: "auto"}}> 
        <h1 style={{textAlign: "center"}}>Audio Player</h1>
        <AudioPlayer
          autoPlay
          src={songToPlay}
          onPlay={e => console.log("onPlay")}
        />
    </div>
  );
}

export default SongsAudioPlayer;


