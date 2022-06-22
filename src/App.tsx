import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import UsersPage from "./pages/UsersPage";
import TodosPage from "./pages/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";
import './assets/styles/style.css'
import HomePage from "./pages/HomePage";

const App = () => {

    return (
        <BrowserRouter>
            <div className='nav-bar'>
                <Link to='/'>Home</Link>
                <Link to='users'>Users</Link>
                <Link to='todos'>Todos</Link>
            </div>
            <div className="app-body">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/users" element={<UsersPage/>}/>
                    <Route path="/users/:id" element={<UserItemPage/>}/>
                    <Route path="/todos" element={<TodosPage/>}/>
                    <Route path="/users/:id" element={<TodoItemPage/>}/>
                </Routes>
            </div>

        </BrowserRouter>
    );
};

export default App;