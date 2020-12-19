import React from 'react';
import { Link } from 'react-router-dom';


export const NavBar = () =>{
    return(
        <header>
            <div className="navbar">
            <Link to="/" style={{paddingRight: "10px"}} className="button">Home</Link><br></br><br></br>
            <Link to="/results" style={{paddingRight: "10px"}} className="button">Results</Link><br></br><br></br>
            <Link to='/about' className="button">About</Link>
            </div>
        </header>

    )
}