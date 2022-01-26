import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ({getUsers, userSelected}) => {


    const[first_name, setFirstName]=useState("")
    const[last_name, setLastName]=useState("")
    const[password, setPassword]=useState("")
    const[email, setEmail]=useState("")
    const[birthday, setBirthday]=useState("")

    useEffect(()=>{
        if (userSelected) {
            setPassword(userSelected.password)
            setFirstName(userSelected.first_name)
            setLastName(userSelected.last_name)
            setEmail(userSelected.email)
            setBirthday(userSelected.birthday)
        }
    },[userSelected])
   
    const submit=e=>{ 
        e.preventDefault();
        const user={
            password,
            first_name,
            last_name,
            email,
            birthday
        }
        if(userSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
            .then(()=>getUsers())
        }
        else{
            axios.post(`https://users-crud1.herokuapp.com/users/`,user)
            .then(()=>getUsers());
        }
    }
 

    return (
        <form className='form' onSubmit={submit}>
            <div className='input-container'>
                <label htmlFor="first_name"></label>
                <input className='input'  placeholder='First Name' type="text" id='first_name' value={first_name} onChange={e=>setFirstName(e.target.value)} />
            </div>
            <div className='input-container'>
                <label htmlFor="last_name"></label>
                <input className='input'  placeholder='Last Name' type="text" id='last_name' value={last_name} onChange={e=>setLastName(e.target.value)} />
            </div>
            <div className='input-container'>
                <label htmlFor="last_name"></label>
                <input className='input'  placeholder='Password' type="password" id='password' value={password} onChange={e=>setPassword(e.target.value)} />
            </div>
            <div className='input-container'>
                <label htmlFor="email"></label>
                <input className='input' placeholder='Email' type="text" id='email' value={email} onChange={e=>setEmail(e.target.value)} />
            </div>
            <div className='input-container'>
                <label htmlFor="birthday"></label>
                <input className='input'  type="date" id='birthday'  value={birthday} onChange={e=>setBirthday(e.target.value)}/>
            </div>
            <button className='submit'>Submit</button>
        </form>
    );
};

export default UsersForm;