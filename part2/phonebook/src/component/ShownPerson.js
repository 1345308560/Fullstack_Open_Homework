import personService from '../services/personService'

const Button = ({id,persons,setNewPerson}) =>{
    const deleteHandler = () => {
        if (window.confirm('Do you really want to delete?')){
            personService.deletePerson(id)
                .then(personData=>{
                    const newObj=persons.filter(person => person.id !== id)
                    console.log(newObj)
                    setNewPerson(newObj)
                })
        }
    }
    return <button onClick={deleteHandler}>delete</button>
}
const Content = (props) => {
    return (
        <p>{props.name} {props.number} <Button id={props.id} persons={props.persons} setNewPerson={props.setNewPerson}/></p>
    )
}
const ShowNames = ({persons,setNewPerson}) => (
    persons.map(p => <Content key={p.id} persons={persons} id={p.id} name={p.name} number={p.number} setNewPerson={setNewPerson}/>)
)
const ShownPerson = ({persons,setNewPerson})=>{
    return <ShowNames persons={persons} setNewPerson={setNewPerson}/>
}

export default ShownPerson