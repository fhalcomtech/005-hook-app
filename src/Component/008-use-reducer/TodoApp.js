import React, {useEffect, useReducer} from "react";
import {useForm} from "../../hooks/useForm";
import todoReducer from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const initialState = [];

const init = () => JSON.parse(localStorage.getItem("todos")) || initialState;

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const handlerSaveTodo = (todo) => {
        const action = {
            type: 'add',
            payload: todo
        };
        dispatch(action)
    }



    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos]);


    const handlerClickDelete = (todo) =>
    {
        const action = {
            type: 'delete',
            payload: todo
        };
        dispatch(action);
    }


    const handlerClickDone = (todo) => {
        const action = {
            type: 'done',
            payload: todo
        };
        dispatch(action);
    }

    return (
        <>
            <h1 className="text-center">Todo App: {todos.length}</h1>
            <hr/>
            <div className="row">
                <TodoList handlerClickDone={handlerClickDone} handlerClickDelete={handlerClickDelete} todos={todos}/>
                <TodoAdd handlerSaveTodo = {handlerSaveTodo}/>
                </div>
        </>
    );
};

export default TodoApp;
