import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Results extends Component{
    state = {}


    funct(){
        this.setState({
            result: this.props.comb
        }, ()=>{
            debugger
        })
    }

    display(){
        debugger
    }

    render(){
        return(
    <div style={{textAlign: "center", text: "Robotica"}}>
        <h2 style={{font: "Robotica"}}>Results:</h2>
        <ul> {this.display}</ul>
        <Link onClick={this.funct} to='/' className='button2'>Home</Link>
    </div>
        )}
}
const mapStateToProps = state =>{
    return{
        comb: state.combs.comb
    }
}

export default connect(mapStateToProps)(Results)