// #make more useful
import Results from "../components/results"


const ResultsContainer = (props) =>{
    // console.log(props.ste)
    return(
        <div>
        <Results ste={props.res} state={props.state}/>
        </div>
    )}

export default ResultsContainer