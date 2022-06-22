import React, {useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import List from "../components/List";
import {UserServices} from "../API/UserServices";
import TodoItem from "../components/TodoItem";

const TodosPage = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(()=>{
        fetchTodos()
    }, [])

    async function fetchTodos() {
            const response = await UserServices.getTodos()
            setTodos(response)
    }
    return (
        <List
            items={todos}
            renderItem={(todo:ITodo)=><TodoItem todo={todo} key={todo.id}/>}
        />
    );
};

export default TodosPage;