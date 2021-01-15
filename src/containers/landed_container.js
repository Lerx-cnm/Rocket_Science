import Home from "../components/home"

const LandedContainer = (props) =>{
return(
    <div style={{textAlign: "center", color: "white"}}>
        <h2>Welcome to Rocket Science!</h2>
        <Home func={props.func}/>
    </div>
    )}
    export default LandedContainer