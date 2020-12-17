import './App.css';
import React from 'react';
import Home from './components/home'
import { NavBar } from './components/navbar';


class App extends React.Component {
  handleClick = event => {
    fetch('http://localhost:3000/fuels')
      .then(res => res.json())
      .then(json => console.log(json)) 
  }
  render(){
  return (

    
    // debugger
    <div>
      <NavBar />
      <Home />
          <button onClick={this.handleClick}>Click to Save to results tab!</button>
    </div>
  );}
}

export default App;
