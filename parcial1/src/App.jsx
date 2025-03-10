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
      <UserForm setUser={setUser}></UserForm>
      <UserList userData={userData}></UserList>
    </>
  )
}

export default App
