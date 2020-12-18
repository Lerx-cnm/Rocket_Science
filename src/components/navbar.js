import React from 'react';
import { Link } from 'react-router-dom';


export const NavBar = () =>{
    return(
        <header>
            <Link to="/" style={{paddingRight: "10px"}}>Home</Link>
            <Link to="/results" style={{paddingRight: "10px"}}>Saved</Link>
            <Link to='/about'>About</Link>
        </header>
    )
}