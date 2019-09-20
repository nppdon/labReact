import React, { Component } from 'react';
import './App.css';
//import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

var words = ['Rock', 'Paper', 'Scissor'];
var word = words[Math.floor(Math.random()*words.length)];

//const word = "Hello";

class App extends Component{
  render(){
    return(
      <div>
        {
          <WordCard value={word}/>
          //Array.from(word).map((c,i) => <CharacterCard value={c} key={i}/>)
        }
      </div>
    );
  }
}
export default App;