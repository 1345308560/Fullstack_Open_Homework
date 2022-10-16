import personService from '../services/personService'
const AddPerson = ({persons,setNewPerson,newPerson,setNewName})=>{
    const addName = (event) => {
        event.preventDefault()
        const newObj={
            name:newPerson.name,
            number:newPerson.phoneNumber,
            id:persons.length+1
        }
        const check=persons.find(p => p.name===newObj.name)
        if(check === undefined) {
            personService
                .create(newObj)
                .then(personData => setNewPerson(persons.concat(personData)))
        }
        else {
            if (window.confirm(newPerson.name+' is already added, replace the old number with the new one?')){
                console.log(check)
                newObj.id=check.id
                personService
                    .update(check.id,newObj)
                    .then(personData => 
                        setNewPerson(persons.map(p=> p.id===check.id?personData:p))
                    )
            }
        }
        setNewName({name:'',phoneNumber:''})
    }
    const handleNewName = (event) =>{
        console.log(event.target.value)
        const newObj={
            ...newPerson,
            name:event.target.value
        }
        setNewName(newObj)
    }
        const handleNewPhone = (event) =>{
        console.log(event.target.value)
        const newObj={
            ...newPerson,
            phoneNumber:event.target.value
        }
        setNewName(newObj)
    }
    return (
    <form onSubmit={addName}>
        <div>
            name: <input value={newPerson.name} onChange={handleNewName}/>
        </div>
        <div>
            number: <input value={newPerson.phoneNumber} onChange={handleNewPhone}/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
    )
}
export default AddPerson