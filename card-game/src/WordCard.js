import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false,
        playMax: 5, // play maximum 5 times
        gamestatus:false, // true when attempted 5 times or when you lose
        hint: false // hint when attempt more than 3
    }
}
export default class WordCard extends Component{

    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }

    activationHandler = (c) => {

        //console.log(`${c} has been activated.`)

        let guess = [...this.state.guess, c]


        this.setState({
            guess
        })

        if(guess.length === this.state.chars.length){
            if(this.state.attempt!=this.state.playMax){ 
                if(guess.join('').toString() === this.state.word){
                    this.setState({guess: [], completed: true})
                }
                else{
                    this.setState({guess: [], attempt: this.state.attempt + 1})
                    if(this.state.attempt>=3){
                        this.setState({guess: [], hint:true})
                    }
                }
            }
            else{
                this.setState({guess: [], completed: true})
                this.setState({guess: [], gamestatus:true})

            }
        }
        
    }
    render(){
        return (
            <div className="App">
                <h1 className="category">CATEGORY : {this.props.category}</h1>
                <br></br>
                { Array.from(this.state.chars).map((c,i) => <CharacterCard value={c} key={i} attempt={this.state.attempt} activationHandler={this.activationHandler}/>)}
                <h1> Round : {this.state.attempt}</h1>
                <h2>THE WORD BEGINS WITH "{this.state.hint? `${this.state.word[0]}` : '... '}" AND ENDS WITH "{this.state.hint? `${this.state.word[this.state.word.length-1]}` : '...'}"</h2>
                <h3> You can play maximum at {this.state.playMax} times</h3>
                <h1 className="win" >{this.state.completed&&!this.state.gamestatus? 'YOU WIN' : ''}</h1>
                <h1 className="lose">{this.state.gamestatus? 'YOU LOSE ' : ''}</h1>
            </div>
        );
    }
}