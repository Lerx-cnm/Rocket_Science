import React from 'react'
import FormDist from './formdist'
import FormFuel from './formfuel'
import { Link } from 'react-router-dom';
import { Component } from 'react'
import { connect } from 'react-redux'
import { sendComb } from '../actions/sendComb'




class Home extends Component{    

    submit = () => {
        let obj = {
            fuel: document.body.getElementsByClassName('fuel')[0].value, 
            distance: document.body.getElementsByClassName('distance')[0].value
    }
    // this.props.func(obj)
    this.props.sendComb(obj)
    }

    render(){
    return(
    <div>
        <FormFuel />
        <FormDist />

        <Link onClick={this.submit} to='/results' className="button2" >Show In Results Tab!</Link>
    </div>
    );
  };
};

export default connect(null, { sendComb })(Home)