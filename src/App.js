import './App.css';
import React from 'react';
import LandedContainer from './containers/landed_container'
import { NavBar } from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/about'
import resultsContainer from './containers/resultsContainer';

class App extends React.Component {
  render(){
  return (
    <div>
      <Router>
      <NavBar />
        <Switch>
        <Route exact path='/' component={LandedContainer} />
        <Route exact path='/results' component={resultsContainer} />
        <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );}
}

export default App;
