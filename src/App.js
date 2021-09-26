import React, { useState, useEffect } from 'react';
import useCountry from './hooks/useCountry';

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

const Country = ({ country }) => {
  
  if (!country) {
    return null
  }
  if (!country.found) {
    return (
      <div>
        not found...
      </div>
    )
  }
  

  return (
    <div>
      <h3>{country.name.common} </h3>
      <div>capital {country.capital[0]} </div>
      {/* <div>population {country.data.population}</div>  */}
      <img src={country.flags[0]} height='100' alt={`flag of ${country.name.common}`}/>  
    </div>
  )
}

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const {country} = useCountry(name)
  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)

  }
console.log('country', country);
  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App
