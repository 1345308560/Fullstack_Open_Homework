const AddPerson = ({persons,setNewPerson,newPerson,setNewName})=>{
    const addName = (event) => {
        event.preventDefault()
        const newObj={
            name:newPerson.name,
            number:newPerson.phoneNumber,
            id:persons.length+1
        }
        var check=persons.find(p => p.name===newObj.name)
        if(check === undefined) setNewPerson(persons.concat(newObj))
        else window.alert(`${newPerson.name} is already added to phonebook`)
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