import { useEffect, useState } from 'react'
import './App.css'
import UserForm from './components/UserForm/UserForm'

function App() {

  const [userData, setUserData] = useState;

  useEffect(() => {
    fetch('./data.json')
    .then((response) => response.json())
    .then((data) =>  console.log("RESOII" + JSON.stringify(data)))
  })

  return (
    <>
      <UserForm></UserForm>
    </>
  )
}

export default App
