import { useEffect, useState } from 'react'
import './App.css'
import UserForm from './components/UserForm/UserForm'
import UserList from './components/UserList/UserList';
import data from './data/data';

function App() {

  const [userData, setUserData] = useState(data);

  const setUser = (name, email, role) => {
    setUserData((prevData) =>
      [...prevData, {name, email, role}])
  }

  return (
    <>
      <UserForm></UserForm>
      <UserList userData={userData} setUser={setUser}></UserList>
    </>
  )
}

export default App
