import React from 'react';
import {useForm} from "../../hooks/useForm";

const TodoAdd = ({handlerSaveTodo}) => {
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
            handlerSaveTodo(newTodo);
            resetForm();
        }
    };

    return (
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
    );
};

export default TodoAdd;
