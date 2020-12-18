import { connect } from 'react-redux';
import React, { Component } from 'react'

let state = {
    comb1: []
}
let display = (props) => {
    // debugger
    if(props.comb.comb){
    let array = props.comb.comb.name.split("_")
    return(
        <p>It takes {props.comb.comb.result} {array[0]} to get {array[1]}</p>
    )}
    else{
        return(
            <small style={{color:"red"}}>Still loading</small>
        )
    }
}
const Results = (props) => {

    // debugger
    return(
        <div>
        <p>{display(props)}</p>
        </div>
    )
}
const mapStateToProps = state =>{
    debugger
    return{
        comb: state.combs
    }
}

export default connect(mapStateToProps)(Results)