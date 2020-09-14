import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getAllCountries } from './service';
import Flags from './components/Flags'
// import Select from './components/Select'
//import Countries from './components/Countries'

const App = () => {

  //const [flags, setFlags] = useState([])
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    getAllCountries().then(res => {
      setCountries(res.data)
    })
  },[])

  return (
    <div>
      <Flags countries={countries}/>
      {/* <Select setCountries={setCountries}/> */}
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);