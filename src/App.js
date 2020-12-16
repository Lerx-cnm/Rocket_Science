import './App.css';
import React from 'react';
import Test1 from './components/test'
import Home from './components/home'


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
      <Test1 />
      <Home />
          <button onClick={this.handleClick}>Click to Fetch!</button>
    </div>
  );}
}

export default App;
