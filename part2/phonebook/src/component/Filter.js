
const Filter = ({newFilter,setNewFilter}) =>{
    const handleNewFilter = (event)=>{
        console.log(event.target.value)
        setNewFilter(event.target.value)
    }
    return(
    <form>
        <div>
            filter shown with<input value={newFilter} onChange={handleNewFilter}/>
        </div>
    </form>
    )
    
}

export default Filter