
const Header = ({ name }) => (<h2>{name}</h2>)
const Part = (props) => (<p>{props.name} {props.exercises}</p>)
const Total = (props) => {
    var totalExercises = props.parts.reduce((sum, note) => sum + note.exercises, 0)
    return (<p>total of {totalExercises} exercises</p>)
}
const Content = (props) => {
    return (
        <>
            {props.course.parts.map((note) =>
                <Part key={note.id} name={note.name} exercises={note.exercises} />
            )}
        </>
    )
}
const Course = (props) => {
    return (
        <>
            <Header name={props.course.name} />
            <Content course={props.course} />
            <Total parts={props.course.parts} />
        </>

    )
}

export default Course