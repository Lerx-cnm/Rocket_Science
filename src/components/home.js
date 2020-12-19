import React from 'react'
import FormDist from './formdist'
import FormFuel from './formfuel'
import { useHistory } from "react-router-dom";
import { Component } from 'react'
import { connect } from 'react-redux'
import { sendComb } from '../actions/sendComb'



class Home extends Component{
    submit = () => {
        let obj = {
            fuel: document.body.getElementsByClassName('fuel')[0].value, 
            distance: document.body.getElementsByClassName('distance')[0].value
    }
    this.props.sendComb(obj)

}


    render(){
    return(
    <div>
        <h2>Welcome to Rocket Science!</h2>
        <FormFuel />
        <FormDist />
        <button onClick={this.submit}>Save to Results Tab!</button>
    </div>
    );
  };
};

export default connect(null, { sendComb })(Home)