import React from 'react'
import FormDist from './formdist'
import FormFuel from './formfuel'
import { Link } from 'react-router-dom';
import { Component } from 'react'
import { connect } from 'react-redux'
import { sendComb } from '../actions/sendComb'
import { Redirect } from 'react-router-dom'




class Home extends Component{

    
    submit = () => {
        let obj = {
            fuel: document.body.getElementsByClassName('fuel')[0].value, 
            distance: document.body.getElementsByClassName('distance')[0].value
    }
    this.props.sendComb(obj)
    // alert('Saved in the Results tab')
}
redirect = () => {
    return <Redirect to='/results' />
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