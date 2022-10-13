
const Content = ({country,setDataToShow}) =>{
  const showHandler = () =>{
    setDataToShow([country])
  }
  const name=country.name.common
  return(
    <>
      <p>{name} <button onClick={showHandler}>show</button> </p>
    </>
  )
}
  
const ShowLanguage = ({country}) =>{
  const arrayLanguage=Object.values(country.languages)
  console.log(arrayLanguage)
  return(
    arrayLanguage.map(language=> <li key={language}>{language}</li>)
  )
}
const ShowOneData = ({country}) =>{
  console.log(country.flags.png)
  return(
    <>
      <h2>{country.name.official}</h2>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h3>languages:</h3>
      <ShowLanguage country={country}/>
      <img src={country.flags.png}/>
    </>
  )
}
const ShowData = ({countriesData,setDataToShow}) =>{
  if(countriesData.length > 10) return (<p>Too many matches, specify another filter</p>)
  else if(countriesData.length === 1)return(
    <ShowOneData country={countriesData[0]} />
  )
  else return(
    countriesData.map(country => <Content key={country.name.official} country={country} setDataToShow={setDataToShow}/> )
  )
}

export default ShowData