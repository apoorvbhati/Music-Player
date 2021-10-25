import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/UIElements/SongCard';
import Carousel from '../components/UIElements/Carousel';
import Header from '../components/Header';

const HomePage = () => {
    const [searchItem, setSearchItem] = useState();
    const [songs, setSongs] = useState([]);
    const [filteredSongs, setFilteredSongs] = useState([]);

    useEffect(() => {
        const getData= async () => {
            const response = await axios.get('./songs.json');
            setSongs(response.data);
            setFilteredSongs(response.data);
        }
        getData();
    }, []);

    const getSearchItem = (searchedItem) => {
        setSearchItem(searchedItem);
    }   

    useEffect(() => {
        const result = songs.filter(song => song.name.toLowerCase().includes(searchItem && searchItem.toLowerCase()));
        setFilteredSongs(result);
    },[searchItem]) 

    return (
        <div>
            <Header SearchedItem={getSearchItem}/>
            <Carousel item={filteredSongs} />
            <Card item={filteredSongs}/>
        </div>
        
    );
}

export default HomePage;