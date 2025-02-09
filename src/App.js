import React, { useEffect, useState} from 'react'
import Card from './components/Card/Card'
const App = () => {
  const [user, setUser] = useState(null)
  const url = 'https://randomuser.me/api/?page=1&results=1&seed=abc'

  async function fetchData() {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setUser(data.results[0])
    } catch (error) {
      console.log("Error")
    }
  }
  useEffect( () => {
    fetchData();
  },[])

  return (
    <div className='container'>
      <Card user={user}/>
    </div>
  )
}

export default App