import React, {useReducer} from 'react';
import todoReducer from "./todoReducer";
const initialState = [{
    id: 1,
    desc: 'Learn react',
    done: false
}];
const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState );
    return (
        <>
            <h1 className="text-center">Todo App</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <ul className = "list-group list-group-flush">
                        {
                            todos.map(({id, desc, done}, index) =>
                            (
                                <li className="list-group-item" key={id}>
                                    <p className="text-center">
                                        {index + 1}. {desc}
                                        <button className="btn-sm btn-danger ms-3">delete</button>
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h2>Add Todo</h2>
                </div>
            </div>
        </>
    );
};

export default TodoApp;
