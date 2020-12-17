import React, {Component} from 'react'

function handleChange(){
    console.log(document.body.getElementsByClassName('dist')[0].value)
}


class FormDist extends Component{
    state = {
        dist1:"",
        dist2:"",
        dist3:"",
        dist4:"",
        dist5:"",
        dist6:"",
        dist7:"",
        dist8:""
    }


    render(){
    return(
        <div>
            <p> does it take to go 
            <select className="dist" onChange = {handleChange}>
            <option value={this.state.dist1.name}> {this.state.dist1.name}</option>
            <option value={this.state.dist2.name}>{this.state.dist2.name}</option>
            <option value={this.state.dist3.name}> {this.state.dist3.name} </option>
            <option value={this.state.dist4.name}> {this.state.dist4.name} </option>
            <option value={this.state.dist5.name}> {this.state.dist5.name} </option>
            <option value={this.state.dist6.name}> {this.state.dist6.name} </option>
            <option value={this.state.dist7.name}> {this.state.dist7.name} </option>
            </select>
            ?
            </p>
        </div>
    )}

componentDidMount(){
    this.setState({
        fuel: "testing2"
    })
    fetch('http://localhost:3000/distances/')
    .then(response => response.json())
    .then(json => { 
        this.setState({
        dist1: json[0],
        dist2: json[1],
        dist3: json[2],
        dist4: json[3],
        dist5: json[4],
        dist6: json[5],
        dist7: json[6]
    })
  })
 }
}
export default FormDist