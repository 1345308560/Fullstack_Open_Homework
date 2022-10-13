
const FindForm = ({countriesData,newFilter,setNewFilter,setDataToShow}) =>{
    const handleNewFilter = (event)=>{
        console.log(event.target.value)
        const newDataToShow=countriesData.filter(country=>{
            const str1=country.name.common.toLowerCase()
            const str2=newFilter.toLowerCase()
            return str1.match(str2)!=null
        })
        setDataToShow(newDataToShow)
        setNewFilter(event.target.value)
    }
    return(
        <form>
            find countries<input value={newFilter} onChange={handleNewFilter}/>
        </form>
    )
}

export default FindForm