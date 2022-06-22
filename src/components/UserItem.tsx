import React, {FC} from 'react';
import {IUser} from "../types/types";
import {useNavigate} from "react-router-dom";

interface UserItemProps {
    user: IUser
}

const UserItem:FC<UserItemProps> = ({user}) => {
    let navigate = useNavigate();
    return (
        <div style={{padding: 15, marginBottom: 20, border: '1px solid #999'}}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
            <button onClick={()=>{
                navigate(`/users/${user.id}`)
            }}>Подробнее</button>
        </div>
    );
};

export default UserItem;