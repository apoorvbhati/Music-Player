import React, { useState } from 'react';

import './Header.css';

const Header = props => {
    const [search, setSearch] = useState();

    const changeHandler = event => {
        setSearch(event.target.value);
    }

    props.SearchedItem(search);

    return (
        <div className='Header'>
            <div className='search'>
                <input type="search" placeholder="Search" onChange={changeHandler} value={search}/>
            </div>
            <div className='filter'>
                <span>All</span>
                <span>Trending</span>
                <span>New Release</span>
            </div>
        </div>
    );
}

export default Header;