import React, {useEffect, useReducer} from "react";
import {useForm} from "../../hooks/useForm";
import todoReducer from "./todoReducer";

const initialState = [];

const init = () => JSON.parse(localStorage.getItem("todos")) || initialState;

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    const [formData, handlerInputChange, resetForm] = useForm({todoDesc: ""});
    const {todoDesc} = formData;

    const handlerSubmit = (e) => {
        e.preventDefault();
        if(todoDesc && todoDesc.length > 3 ) {
            const newTodo = {
                id: new Date().getTime(),
                desc: todoDesc,
                done: false,
            }
            const action = {
                type: 'add',
                payload: newTodo
            };
            dispatch(action);
            resetForm();
        }
    };

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
            <h1 className="text-center">Todo App</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {todos.map(({id, desc, done}, index) => (
                            <li className="list-group-item d-flex justify-content-around" key={id}>
                                <p onClick={(e)=>{handlerClickDone({id, desc, done:!done})}} className={ done && 'text-decoration-line-through' }>
                                    {index + 1}. {desc}    
                                </p>    
                                <button className="btn btn-danger" onClick={(e)=>{
                                    handlerClickDelete({id,desc,done})
                                }}>delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-4">

                        <h2>Add Todo</h2>
                        <hr/>
                        <form onSubmit={handlerSubmit}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="write todo description"
                                    name="todoDesc"
                                    value={todoDesc}
                                    onChange={handlerInputChange}
                                />
                                <button className='btn btn-success form-control mt-2 ms-0' type="submit">Add</button>
                        </form>
                    </div>
                </div>
        </>
    );
};

export default TodoApp;
