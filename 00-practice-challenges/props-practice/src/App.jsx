import React from 'react'
import Joke from './components/Joke'
import jokesData from './js/jokesData.js'


/*
  TODO: Challenge: See if you can correctly pass the necessary props to the Joke component in the .map() (and render the jokeElements array) so the jokes show up on the page again
*/

function App() {

  return (
    <>
      {
        jokesData.map((joke) => (
          <Joke 
            setup={joke.setup}
            punchline={joke.punchline}/>
        ))
      }
      {/* <Joke 
        setup ="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it"/>
      <Joke 
        setup ="How did the hacker escape the police?"
        punchline="He just ransomware!"/>
      <Joke 
        setup ="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."/>
      <Joke 
        setup ="Why do bees stay in the hive in the winter?"
        punchline="Swarm."/>
      <Joke 
        setup ="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"/> */}
    </>
  )
}

export default App;
