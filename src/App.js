import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UsersForm from './Components/UsersForm';
import UsersList from './Components/UsersList';

function App() {

  const[users, setUsers]= useState([])
  const [userSelected, setUserSelected]= useState(null)

  useEffect(()=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then(res=>setUsers(res.data))
  },[])

  const getUsers=()=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then(res=>setUsers(res.data))
  }

  const selectedUser= user=> setUserSelected(user)
  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };

  return (
    <div className="app">
    <UsersForm getUsers={getUsers} userSelected={userSelected}/>
    <UsersList users={users} selectedUser={selectedUser} deleteUser={deleteUser}/>
    </div>
  );
}

export default App;
