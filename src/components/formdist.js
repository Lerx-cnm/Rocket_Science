import React, {Component} from 'react'
import { getDistances } from '../actions/fetchDistances'
import { connect } from 'react-redux';


function handleChange(){
   }


class FormDistance extends Component{
    componentDidMount(){
        this.props.getDistances();
     }
   comp(){
     if(this.props.distance){
         return(
        <div>
            <p>does it take to get
            <select className="distance" onChange = {handleChange} style={{marginLeft: "5px", marginRight: "5px"}}>
            <option value={this.props.distance[0].name}> {this.props.distance[0].name}</option>
            <option value={this.props.distance[1].name}>{this.props.distance[1].name}</option>
            <option value={this.props.distance[2].name}> {this.props.distance[2].name} </option>
            <option value={this.props.distance[3].name}> {this.props.distance[3].name} </option>
            <option value={this.props.distance[4].name}> {this.props.distance[4].name} </option>
            <option value={this.props.distance[5].name}> {this.props.distance[5].name} </option>
            <option value={this.props.distance[6].name}> {this.props.distance[6].name} </option>
            <option value={this.props.distance[7].name}> {this.props.distance[7].name} </option>
            <option value={this.props.distance[8].name}> {this.props.distance[8].name} </option>
            <option value={this.props.distance[9].name}> {this.props.distance[9].name} </option>
            </select>
            ?
            </p>
        </div>
        )
     }else{
         return(
         <p>Loading...</p>
         )}
 }

    render(){
        // debugger
    return(
        <div>
        {this.comp()}
        </div>
    )}


}
const mapStateToProps = state =>{
    debugger
    return{
        distance: state.distances.distances
    }
}

export default connect(mapStateToProps, { getDistances })(FormDistance)