import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import {useParams} from "react-router-dom"

interface UserItemPageParams {
    id: string;
}

const TodoItemPage:FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
    const params = useParams()

    useEffect(()=>{
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try{
            const response = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos/${params.id}`,{
                params: {
                    _limit: 10
                }
            })
            setTodos(response.data)
        }catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <button>Back</button>
            <div></div>
        </div>
    );
};

export default TodoItemPage;