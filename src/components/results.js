import { connect } from 'react-redux';
import React from 'react'

let display = (props) => {
    if(props.comb.comb){
    let array = props.comb.comb.name.split("_")
    let num;
    if(props.comb.comb.result < 1){
        num = props.comb.comb.result.toFixed(20).toLocaleString()
    }else if(props.comb.comb.result >1){
        num = props.comb.comb.result.valueOf().toLocaleString()
        }
    return(
        <p>It takes about {num} {array[0]} to propel a rocket {array[1]}</p>
    )}
    else{
        return(
            <small style={{color:"red"}}>please return home and Make an equation</small>
        )
    }
}
const Results = (props) => {

    return(
        <div>
            <h2 style={{font: "Robotica"}}>Results:</h2>
        <p>  {display(props)}</p>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        comb: state.combs
    }
}

export default connect(mapStateToProps)(Results)