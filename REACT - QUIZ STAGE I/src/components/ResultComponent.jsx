import React, { Component } from 'react'
import "./result.css"

class ResultComponent extends Component {
  render() {
    return (
        <>
        <h1>Result</h1>
        <div id='resultContent'>
            <h2>You nedd more Practice!</h2>
            <h1 id='score'>Your Score ...</h1>
            <div id='results'>
                <div>
                    <p>Total number of questions</p>
                    <p>15</p>
                </div>
                <div>
                    <p>Number of attempted questions</p>
                    <p>10</p>
                </div>
                <div>
                    <p>Number of correct answers</p>
                    <p>3</p>
                </div>
                <div>
                    <p>Number of wrong answers</p>
                    <p>6</p>
                </div>
            </div>
        </div>
        <div id='buttons-box'>
            <button>Play  Again</button>
            <button>Back  Home</button>
        </div>
      </>
    )
  }
}

export default ResultComponent