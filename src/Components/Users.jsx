import axios from '../Helpers/axios';
import React, { useState } from 'react'

const Users = () => {

    const [users,setUsers] =  useState("");

    const getUsers = async() => {
        try {
            const {data} = await axios.get("/users");
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        Users
        <hr className='mt-10' />
            <input onClick={getUsers} type="submit" value="Submit" className='mt-10 bg-red-500 ml-3 text-zinc-200 rounded-full p-2 w-24' />
        <hr className='mt-5' />

        <ul className='p-10 list-items'>
            {users ? users.map((u) => (
                    <li key={u.id} className='list-disc'>{u.name}</li>
            )) : <h1 className='text-red-400'>loading...</h1> }
        </ul>
    </div>
  )
}

export default Users