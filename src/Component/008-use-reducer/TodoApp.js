import React, { useReducer } from "react";
import { useForm } from "../../hooks/useForm";
import todoReducer from "./todoReducer";
const initialState = [
  {
    id: new Date().getTime(),
    desc: "Learn react",
    done: false,
  },
];
const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [formData, handlerInputChange] = useForm({ todoDesc: "" });
  const { todoDesc } = formData;
  const saveTodo = (e) => {
    e.preventDefault();
    dispatch("add", {});
  };
  return (
    <>
      <h1 className="text-center">Todo App</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map(({ id, desc, done }, index) => (
              <li className="list-group-item" key={id}>
                <p className="text-center">
                  {index + 1}. {desc}
                  <button className="btn-sm btn-danger ms-3">delete</button>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <div className="container">
          <h2>Add Todo</h2>
            <form className="form" action={saveTodo}>
              <input
                type="text"
                className="form-control"
                placeholder="write todo description"
                name="todoDesc"
                value={todoDesc}
                onChange={handlerInputChange}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
