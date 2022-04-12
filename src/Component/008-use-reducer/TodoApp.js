import React, {useEffect, useReducer} from "react";
import {useForm} from "../../hooks/useForm";
import todoReducer from "./todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        desc: "Learn react",
        done: false,
    },
];
const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState,);
    const [formData, handlerInputChange, resetForm] = useForm({todoDesc: ""});
    const {todoDesc} = formData;

    const handlerSubmit = (e) => {
        e.preventDefault();
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
        resetForm({todoDesc: ""});
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



    return (
        <>
            <h1 className="text-center">Todo App</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {todos.map(({id, desc, done}, index) => (
                            <li className="list-group-item d-flex justify-content-around" key={id}>
                                    {index + 1}. {desc}
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
