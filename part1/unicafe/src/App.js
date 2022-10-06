import { useState } from 'react'
const Header = () =>(<h1>give feedback</h1>)
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const StatisticLine =({text,value}) =>{
  return(
    <tr>
      <td>{text}</td> 
      <td>{value}</td> 
    </tr>
  )

}
const Statistics = (props) => {
  var total=props.good+props.bad+props.neutral
  var average=(props.good-props.bad)/total
  var positive=props.good/total*100
  if(props.good===0&&props.bad===0&&props.neutral===0){
    return(<p>No feedback given</p>)
  }
  else return(
    <>
      <h1>statistics</h1>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <tr>
          <td>{"positive"}</td> 
          <td>{positive}%</td> 
        </tr>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const SetGoodValue = newValue =>(setGood(good+1))
  const SetNeutralValue = newValue =>(setNeutral(neutral+1))
  const SetBadValue = newValue =>(setBad(bad+1))

  return (
    <div>
      <Header />
      <Button handleClick={SetGoodValue} text="good"/>
      <Button handleClick={SetNeutralValue} text="neutral"/>
      <Button handleClick={SetBadValue} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App