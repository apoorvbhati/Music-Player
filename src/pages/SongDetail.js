import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SongDetailCard from './SongDetailCard';
import SongsAudioPlayer from '../components/SongsAudioPlayer';

import './SongDetail.css';

const SongDetail = () => {
    const params = useParams();
    const id = params.songId;
    console.log(id);

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const getData= async () => {
            const response = await axios.get('../songs.json');
            setSongs(response.data);
        }
        getData();
    }, []);

    console.log(songs);

    const song = songs.find((song, index) => index.toString() === id.toString());

    console.log(song);

    return (
        <React.Fragment>
            <div className="parent">
                <SongDetailCard>
                    {song && song.description}
                </SongDetailCard>
            </div>
            <div className="audio-player">
                <SongsAudioPlayer songToPlay={song && song.source}/>
            </div>
        </React.Fragment>
    );
}

export default SongDetail;