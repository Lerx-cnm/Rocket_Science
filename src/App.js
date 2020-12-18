import './App.css';
import React from 'react';
import Home from './components/home'
import { NavBar } from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Results from './components/results'
import About from './components/about'

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

      <Router>
      <NavBar />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/results' component={Results} />
        <Route exact path='/about' component={About} />
        </Switch>
      </Router>
      <button onClick={this.handleClick}>Click to Save to results tab!</button>
    </div>
  );}
}

export default App;
