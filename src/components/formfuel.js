import React, {Component} from 'react'
import { getFuels } from '../actions/fetchFuels'
import { connect } from 'react-redux';

class FormFuel extends Component{
    componentDidMount(){
        this.props.getFuels();
     }
   comp(){
     if(this.props.fuel){
         return(
        <div>
            <p>How many
            <select className="fuel" style={{marginLeft: "5px", marginRight: "5px"}}>
            <option value={this.props.fuel[0].name}> {this.props.fuel[0].name}</option>
            <option value={this.props.fuel[1].name}>{this.props.fuel[1].name}</option>
            <option value={this.props.fuel[2].name}> {this.props.fuel[2].name} </option>
            <option value={this.props.fuel[3].name}> {this.props.fuel[3].name} </option>
            <option value={this.props.fuel[4].name}> {this.props.fuel[4].name} </option>
            <option value={this.props.fuel[5].name}> {this.props.fuel[5].name} </option>
            <option value={this.props.fuel[6].name}> {this.props.fuel[6].name} </option>
            </select>, (in terms of Joules)
            </p>
        </div>
        )
     }else{
         return(
         <p>Loading...</p>
         )}
 }
// s
    render(){
    return(
        <div>
        {this.comp()}
        </div>
    )}


}
const mapStateToProps = state =>{
    return{
        fuel: state.fuels.fuels
    }
}

export default connect(mapStateToProps, { getFuels })(FormFuel)


