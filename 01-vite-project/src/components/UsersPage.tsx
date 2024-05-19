import axios from 'axios';
import { useEffect, useState } from 'react';
import type{ ReqResUserListResponse, User } from '../interfaces';

const loadUsers=async():Promise<User[]>=>{
    try {
        const {data}= await axios.get<ReqResUserListResponse>('https://reqres.in/api/users?page=2')
        return data.data;
    } catch (error) {
        console.log(error)
        return [];
    }
}

export const UsersPage=()=>{

    const [users, setusers] = useState<User[]>([])
    useEffect(()=>{
       loadUsers().then(setusers)
    },[])
    return<>{
       users && users.map(user=>(
        <tr key={user.id}>
            <td><img src={user.avatar} alt="User avatar" /></td>
            <td>Nombre : {user.first_name}</td>
            <td>Apellido : {user.last_name}</td>
            <td>Email : {user.email}</td>

        </tr>
       ))
       
    }
    </>
}
