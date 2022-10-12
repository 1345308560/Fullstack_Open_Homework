import { useState } from 'react'
import Filter from './component/Filter'
import AddPerson from './component/AddPerson'
import ShownPerson from './component/ShownPerson'

const App = () => {
  const [persons, setNewPerson] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newPerson, setNewName] = useState({name:'',phoneNumber:''})
  const [newFilter,setNewFilter]=useState('');
  const personToShow = persons.filter(p => p.name.match(newFilter)!=null)
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