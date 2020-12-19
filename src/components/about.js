const About = () =>{
    return(
        <div style={{font: "Robotica"}}>
          <h1>About</h1>
          <p>This page is dedicated to telling you how I came up with the formulas for the equations required.</p>
          <p>The way I do my calculations is divided into three categories:</p>
          <h3>Wattage:</h3>
          <p>Wattage in and of itself is not actually pure energy, its energy over a specified amount of time, Such as Joules per Hour.
            So in turning wattage(duckpower, catpower) to actual Joules, I had to form a sort of baseline time amount where it could result in the
            easiest way of doing calculations, so I put the over an hour. This then turned them into wattage hours, or dp-hr and cp-hr respectively.
            I could then easily measure the outputted Joules based on that.
          </p>
          <h3>Food:</h3>
          <p>This is one that I personally found funny, and fun to deal with. In fact this was the categorie that inspiried me to make this. 
            To turn food items into Joules, or energy, I had to find some sort of unit that was well known and used widely. Calories. KiloCalories 
            are what we know as Calories. KiloCalories have a conversion rate of '1Kc to 4.184Kj'. Knowing this, I could take the Calories of any food
            item and turn it easily into Joules!
          </p>
          <h3>Pure Energy:</h3>
          <p>The Pure Energy category includes basically anything else that I didnt need to do some wild conversion on, these are items that I was able to 
            directly get the Joules from, our outputted energy. This category includes atomic bombs, neutron stars, gasoline, etc. This category was the 
            easiest for me as I did not have to do any extra conversion into Joules.
          </p>
          <h2>Overall:</h2>
          <p>Alright, this is where I tell you how I came up with the 'inefficient rocket fuel' formula.
            My first step was doing everything above, turning all my items into outputted energy(Joules).
            From there I needed baseline, or a constant of Joules per Kilometre. I did some research and figured out that it took around 7900
            Gallons of kerosene to get to the moon, I took the output Joules of 1 gallon of kerosene and then I divided 7'900 by the Km to the moon
            to get a Joules/Km.  I ended up storing the distances in Lightyears not Kilometres, but in my equation I converted Lightyears back to Kilometres
            for ease with smaller numbers. 

            <h4 style={{textAlign: "center"}}>(distance * 9461000000000)*4266.00000000/Kilojoules</h4>

            Using this formula I was able to get a semi-accurate output (+-5e6 Kilojoules) of all the different 'fuels' that I had listed. 
          </p>
        </div>
    )
}
export default About