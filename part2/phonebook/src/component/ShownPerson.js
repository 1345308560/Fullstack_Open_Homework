const Content = (props) => <p>{props.name} {props.number}</p>
const ShowNames = ({persons}) => (
    persons.map(p => <Content key={p.id} name={p.name} number={p.number}/>)
)
const ShownPerson = ({persons})=>{
    return ShowNames(persons={persons})
}

export default ShownPerson