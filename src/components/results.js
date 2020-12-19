import { connect } from 'react-redux';
import React, { Component } from 'react'

let state = {
    comb1: []
}
let display = (props) => {
    // debugger
    if(props.comb.comb){
    let array = props.comb.comb.name.split("_")
    let num;
    if(props.comb.comb.result < 1){
        num = props.comb.comb.result.toFixed(20).toLocaleString()
    }else if(props.comb.comb.result >1){
        debugger
        num = props.comb.comb.result.valueOf().toLocaleString()
        }
    return(
        <p>It takes about {num} {array[0]} to get {array[1]}</p>
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
    // debugger
    return{
        comb: state.combs
    }
}

export default connect(mapStateToProps)(Results)