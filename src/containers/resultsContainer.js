// #make more useful
import Results from "../components/results"


const ResultsContainer = (props) =>{
    // console.log(props.ste)
    return(
        <div style={{color: "white"}}>
        <Results ste={props.res} state={props.state}/>
        </div>
    )}

export default ResultsContainer