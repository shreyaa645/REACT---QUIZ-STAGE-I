import React, { Component } from 'react'
import "./quiz.css"

class QuizComponent  extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
      <>
        <div id='quizContent'>
            <h1>Question</h1>
            <p id='quesNo'>of 15</p>
            <h2 id='question'>question......</h2>
            <div id='choices'>
                <div>option1</div>
                <div>option2</div>
                <div>option3</div>
                <div>option3</div>
            </div>
            <div id='buttons'>
                <div></div>
                <div>Previous</div>
                <div>Next</div>
                <div>Quit</div>
                <div></div>
            </div>
        </div>
      </>
    )
  }
}

export default QuizComponent 