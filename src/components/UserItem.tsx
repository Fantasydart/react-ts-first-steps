import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser
}

const UserItem:FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: 15, marginBottom: 20, border: '1px solid #999'}}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    );
};

export default UserItem;