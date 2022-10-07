import { useState } from 'react'
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Header = () =>(<h1>Anecdotes of the day</h1>)
const ShowAnecdotes = (props) =>{
  return(
    <>
      <p>{props.text}</p>
      <p>has {props.number} votes</p>
    </>
  )
}
const Footer = (props) =>{
  return(
    <>
      <h1>Anecdotes with most votes</h1>
      <p>{props.text}</p>
      <p>has {props.number} votes</p>
    </>
  )
}
const App = () => {
  const NewPoints=[0,0,0,0,0,0,0]
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const [NewSelected, setSelected] = useState({
    selected:0,
    points:NewPoints
  })
  const [MostVote,setMostVote] = useState(0)
  const SetRandomValue = () => {
    const NewSel={
      ...NewSelected,
      selected:Math.floor((NewSelected.selected+Math.random()*7))%7
    }
    setSelected(NewSel)
  }
  const VoteForAnecdotes = () => {
    const copy = [...NewSelected.points]
    copy[NewSelected.selected]+=1
    const NewSel={
      ...NewSelected,
      points:copy
    }
    if(copy[NewSelected.selected]>copy[MostVote]){
      setMostVote(NewSelected.selected)
    }
    setSelected(NewSel)
  }
  return (
    <div>
      <Header />
      <ShowAnecdotes text={anecdotes[NewSelected.selected]} number={NewSelected.points[NewSelected.selected]}/>
      <Button handleClick={VoteForAnecdotes} text="vote"/>
      <Button handleClick={SetRandomValue} text="next anecdotes"/>
      <Footer text={anecdotes[MostVote]} number={NewSelected.points[MostVote]}/>
    </div>
  )
}

export default App