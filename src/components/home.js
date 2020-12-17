import React from 'react'
import FormDist from './formdist'
import FormFuel from './formfuel'


const Home = (props) => {
    return(
        <div>
        <h2>Welcome to Rocket Science!</h2>
        <FormFuel />
        <FormDist />
        </div>
    )
}

export default Home