import './App.css';
import React from 'react';
import Home from './components/home'
import { NavBar } from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Results from './components/results'
import About from './components/about'

class App extends React.Component {
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
    </div>
  );}
}

export default App;
