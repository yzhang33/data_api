import React from 'react';
import {useEffect, useState} from 'react';
import Jokes from './jokes';
import './App.css';

const App = () => {
  useEffect(()=>{
    getJokes();
  },[]);
  
  //assign jokes
  const [jokes,setJokes] = useState([]);
  //get json from api
  const getJokes = async () => {
    const response = await fetch(`https://official-joke-api.appspot.com/jokes/general/ten`);
    const data = await response.json();
    setJokes(data);
  }
  
  return(
    <div className="App">
      <h1>Joke Api</h1>
      {jokes.map(joke=>(
         <Jokes 
          setup={joke.setup}
          punchline = {joke.punchline}/>
      ))}
    </div>
  );
}

export default App;
