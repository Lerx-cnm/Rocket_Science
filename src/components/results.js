import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// FINALLY FREAKING DID IT LOL
class Results extends Component{
    funct = () => {
        this.props.ste(this.props.comb)
    }

    display = () => {
    let array 
    if(this.props.state.result){
    array = this.props.state.result.map((e)=>{
    if(e.result < 1){
        return(<p>It takes {e.result.toFixed(20).toLocaleString()} {e.name.split('_')[0]} to propel a rocket {e.name.split('_')[1]}</p>)

    }else{
        return(<p>It takes {e.result.valueOf().toLocaleString()} {e.name.split('_')[0]} to propel a rocket {e.name.split('_')[1]}</p>)
    }}
    )}
    if(this.props.comb){
        if(this.props.comb.result < 1){
    array.push(<p>It takes {this.props.comb.result.toFixed(20).toLocaleString()} {this.props.comb.name.split("_")[0]} to propel a rocket {this.props.comb.name.split('_')[1]}
    </p>)}
    else{    
        array.push(<p>It takes {this.props.comb.result.valueOf().toLocaleString()} {this.props.comb.name.split("_")[0]} to propel a rocket {this.props.comb.name.split('_')[1]}
</p>)}
    }
    else{
        return(<p>Please make a conversion</p>)
    }
    return(
            array
        )
    }

    render(){
        return(
    <div style={{textAlign: "center", text: "Robotica"}}>
        <h2 style={{font: "Robotica"}}>Results:</h2>
        <div> {this.display()}</div>
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
