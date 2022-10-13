import { useState, useEffect } from 'react'
import axios from 'axios'
import ShowData from './components/ShowData'
import FindForm from './components/FindForm'

const App = () => {
  
  const [countriesData,setCountriesData]= useState([])
  const [newFilter,setNewFilter]=useState('')
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountriesData(response.data)
      })
  }, [])

  const [dataToShow,setDataToShow]= useState(countriesData);
  
  // const dataToShow = countriesData.filter(country =>{
  //   const str1=country.name.common.toLowerCase()
  //   const str2=newFilter.toLowerCase()
  //   return str1.match(str2)!=null
  // })
  const api_key = process.env.REACT_APP_API_KEY
  console.log(api_key)
  return (
    
    <>
      <FindForm countriesData={countriesData} newFilter={newFilter} setNewFilter={setNewFilter} setDataToShow={setDataToShow}/>
      <ShowData countriesData={dataToShow} setDataToShow={setDataToShow}/>
    </>
    
  );
}

export default App;
