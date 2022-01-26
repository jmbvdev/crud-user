import React from 'react';

const UsersList = ({users, selectedUser, deleteUser}) => {
    return (
        <div>
            {
                users.map(user =>(
                   <ul className='list' key={user.id}>
                       <li><h2>{user.first_name} {user.last_name}</h2> </li>
                       <li>{user.email}</li>
                       <li><b>{user.birthday}</b></li>
                       <button onClick={()=>selectedUser(user)} >Editar</button>
                       <button onClick={()=>deleteUser(user.id)}>Delete</button>
                   </ul>
                ))
            }
            
        </div>
    );
};

export default UsersList;