import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './component/Filter'
import AddPerson from './component/AddPerson'
import ShownPerson from './component/ShownPerson'

const App = () => {
  const [persons, setNewPerson] = useState([])
  const [newPerson, setNewName] = useState({name:'',phoneNumber:''})
  const [newFilter,setNewFilter]=useState('');
  const personToShow = persons.filter(p => p.name.match(newFilter)!=null)
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setNewPerson(response.data)
      })
  }, [])
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>
      <h2>add a new</h2>
      <AddPerson persons={persons} setNewPerson={setNewPerson} newPerson={newPerson} setNewName={setNewName}/>
      <h2>Numbers</h2>
      <ShownPerson persons={personToShow}/>
    </div>
  )
}

export default App