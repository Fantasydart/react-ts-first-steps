import React, {FC, useEffect, useState} from 'react';
import { IUser} from "../types/types";
import UserItem from "../components/UserItem";
import List from "../components/List";
import {UserServices} from "../API/UserServices";

const UsersPage: FC = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(()=>{
        fetchUsers()
    }, [])

    async function fetchUsers() {
            const response = await UserServices.getUsers()
            setUsers(response)
    }

    return (
        <List
            items={users}
            renderItem={(user:IUser)=><UserItem user={user} key={user.id} />}
        />
    );
};

export default UsersPage;