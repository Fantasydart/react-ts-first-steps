import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import {useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UserItemPage:FC = () => {
    const [user, setUsers] = useState<IUser|null>(null)
    const params = useParams()

    let navigate = useNavigate();
    useEffect(()=>{
        fetchUser()
    }, [])

    async function fetchUser() {
        try{
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            setUsers(response.data)
        }catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <button onClick={()=>navigate('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>{user?.email}</div>
            <div>{user?.address.city} {user?.address.street} {user?.address.zipcode}</div>
        </div>
    );
};

export default UserItemPage;