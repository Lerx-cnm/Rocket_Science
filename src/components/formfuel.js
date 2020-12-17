import React, {Component} from 'react'

function handleChange(){
    console.log(document.body.getElementsByClassName('fuel')[0].value)
}


class FormFuel extends Component{
    state = {
        fuel1:"",
        fuel2:"",
        fuel3:"",
        fuel4:"",
        fuel5:"",
        fuel6:"",
        fuel7:"",
        fuel8:""
    }


    render(){
    return(
        <div>
            <p>How many
            <select className="fuel" onChange = {handleChange}>
            <option value={this.state.fuel1.name}> {this.state.fuel1.name}</option>
            <option value={this.state.fuel2.name}>{this.state.fuel2.name}</option>
            <option value={this.state.fuel3.name}> {this.state.fuel3.name} </option>
            <option value={this.state.fuel4.name}> {this.state.fuel4.name} </option>
            <option value={this.state.fuel5.name}> {this.state.fuel5.name} </option>
            <option value={this.state.fuel6.name}> {this.state.fuel6.name} </option>
            <option value={this.state.fuel7.name}> {this.state.fuel7.name} </option>
            </select>
            </p>
        </div>
    )}

componentDidMount(){
    this.setState({
        fuel: "testing2"
    })
    fetch('http://localhost:3000/fuels/')
    .then(response => response.json())
    .then(json => { 
        this.setState({
        fuel1: json[0],
        fuel2: json[1],
        fuel3: json[2],
        fuel4: json[3],
        fuel5: json[4],
        fuel6: json[5],
        fuel7: json[6]
    })
  })
 }
}
export default FormFuel


