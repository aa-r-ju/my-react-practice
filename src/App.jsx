import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 const  handleClick = () => {
  setGood(good + 1)

 }
 const handleClick1 = () => {
  setNeutral(neutral + 1)
 }
 const handleClick2 = () => {
  setBad( bad + 1)
 }

  return (
    <div>
      <h1> Give feedback</h1>
      <button onClick={handleClick}> good </button>
      <button onClick={handleClick1}> neutral </button>
      <button onClick={handleClick2}> bad  </button>
      <h1> statistic </h1>
      <p> good {good} </p>
      <p> neutral {neutral} </p>
      <p> bad {bad} </p>
      <p> all {good + neutral + bad} </p>
      <p> average {(good - bad)/(good + neutral + bad)} </p>
      <p> positive {(good) / (good + neutral + bad) * 100} %</p>
    </div>
  )
}
 

export default App