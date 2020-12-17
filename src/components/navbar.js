import React, { Component } from 'react'
function results(){
    alert('test1')
}
function home(){
    alert('testing home')
}
export const NavBar = () =>{
    return(
        <header>
            <button onClick={results}>Save</button>
            <button onClick={home}>Home</button>
        </header>
    )
}