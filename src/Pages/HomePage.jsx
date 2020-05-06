import React from 'react';
import Categories from '../Components/Categories';
import SearchBar from '../Components/SearchBar';
import NavBar  from '../Components/NavBar';

const HomePage = () => (
    <>
        <NavBar/>
        <h1>MedizinPlus</h1>
        <Categories/>
    </>

);

export default HomePage;