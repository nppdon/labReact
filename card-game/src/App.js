import React, { Component } from 'react';
import './App.css';
//import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

var categories = ['VEGTABLE', 'COLOR', 'ANIMAL','CARTOON'];
var randomnum=Math.floor(Math.random()*categories.length)
var category = categories[randomnum];

if(randomnum==0){
  var VEGTABLE = ['pepper', 'mushroom', 'carrot'];
  var word = VEGTABLE[Math.floor(Math.random()*VEGTABLE.length)];}

if(randomnum==1){
  var COLOR = ['pink', 'blue', 'green'];
  var word = COLOR[Math.floor(Math.random()*COLOR.length)];}

if(randomnum==2){
  var ANIMAL = ['duck', 'zebra', 'monkey'];
  var word = ANIMAL[Math.floor(Math.random()*ANIMAL.length)];}

if(randomnum==3){
var CARTOON = ['benten', 'conan', 'tom&jerry'];
var word = CARTOON[Math.floor(Math.random()*CARTOON.length)];}



//const word = "Hello";

class App extends Component{
  render(){
    return(
      <div>
        {
          <WordCard value={word} category={category}/>
          //Array.from(word).map((c,i) => <CharacterCard value={c} key={i}/>)
          
        }
        
      </div>
    );
  }
}
export default App;