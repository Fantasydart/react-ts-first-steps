import React, {FC, useEffect, useState} from 'react';
import axios from "axios";
import {ITodo, IUser} from "../types/types";
import UserItem from "./UserItem";
import List from "./List";

const UsersPage: FC = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(()=>{
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try{
            const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`)
            setUsers(response.data)
        }catch (e) {
            console.log(e)
        }
    }

    return (
        <List
            items={users}
            renderItem={(user:IUser)=><UserItem user={user} key={user.id} />}
        />
    );
};

export default UsersPage;