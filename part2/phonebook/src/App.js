import { useState, useEffect } from 'react'
import Filter from './component/Filter'
import AddPerson from './component/AddPerson'
import ShownPerson from './component/ShownPerson'
import personService from './services/personService'

const App = () => {
  const [persons, setNewPerson] = useState([])
  const [newPerson, setNewName] = useState({name:'',phoneNumber:''})
  const [newFilter,setNewFilter]= useState('');
  
  useEffect(() => {
    personService
      .getAll()
      .then(personsData => {
        setNewPerson(personsData)
      })
  }, [])


  const personToShow = persons.filter(p => {
    const str1=p.name.toLowerCase()
    const str2=newFilter.toLowerCase()
    return (str1.match(str2)!=null)
  })

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>
      <h2>add a new</h2>
      <AddPerson persons={persons} setNewPerson={setNewPerson} newPerson={newPerson} setNewName={setNewName}/>
      <h2>Numbers</h2>
      <ShownPerson persons={personToShow} setNewPerson={setNewPerson}/>
    </div>
  )
}

export default App