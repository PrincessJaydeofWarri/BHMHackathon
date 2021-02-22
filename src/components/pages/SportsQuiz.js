import React, { Component } from 'react';
import {SportsData} from './SportsData';
import './Quiz.css';


    export class SportsQuiz extends Component {

        constructor(props) {
            super(props)
            this.state = {
                userAnswer: null,
                currentIndex: 0,
                options: [],
                quizEnd: false,
                score: 0,
                disabled: true
            }
        }
    
        loadQuiz = () => {
            const {currentIndex} = this.state;
            this.setState(() => {
                return {
                    question: SportsData[currentIndex].question,
                    options: SportsData[currentIndex].options,
                    answer: SportsData[currentIndex].answer
                }
    
            })
        }
    
        nextQuestionHandler = () => {
            const {userAnswer, answer, score} = this.state
    
            if(userAnswer === answer) {
                this.setState({
                    score: score + 1
                })
            }    
    
            this.setState({
                currentIndex: this.state.currentIndex + 1,
                userAnswer: null
            })
        }
    
        componentDidMount() {
            this.loadQuiz();
        }
    
        checkAnswer = answer => (
            this.setState({
                userAnswer: answer,
                disabled: false
            })
        )
    
        componentDidUpdate(prevProps, prevState){
            const {currentIndex} = this.state;
            if(this.state.currentIndex !== prevState.currentIndex){
                this.setState(() => {
                    return {
                        question: SportsData[currentIndex].question,
                        options: SportsData[currentIndex].options,
                        answer: SportsData[currentIndex].answer
                    }
        
                })
    
            }
        }
    
        finishHandler = () => {
            if(this.state.currentIndex === SportsData.length -1){
                this.setState({
                    quizEnd:true
                })
            }
        }
    
        render() {
            const {question, options, currentIndex, userAnswer, quizEnd} = this.state
    
            if(quizEnd) {
                return (
                    <div>
                        <h1>Game over! You scored {this.state.score} {this.state.score === 1 ? 'point' : 'points' }</h1>
                        
                    </div>
                )
            }
    
            return (
                <div>
                    <h2>{question}</h2>
                    <span>{`Question ${currentIndex + 1} of ${SportsData.length}`}</span>
                    {
                        options.map(option => 
                            <p key= {option.id} className={`options ${userAnswer === option? "selected" : null}`} 
                            
                            onClick= {() => this.checkAnswer(option)}>
                                {option}
                            </p>
                            )
                    }
    
                    {currentIndex < SportsData.length - 1 && 
                    <button disabled= {this.state.disabled} onClick={this.nextQuestionHandler}>
                        Next Question
                        </button>}
                    {currentIndex === SportsData.length-1 && 
                    <button onClick={this.finishHandler} disabled={this.state.disabled}>
                        Finish </button>} 
    
                </div>
            )
        }
    }
    
    export default SportsQuiz;
    