import React from 'react';
import TodoListItem from "./TodoListItem";

const TodoList = ({todos, handlerClickDone, handlerClickDelete}) => {
    return (
        <div className="col-7">
            <ul className="list-group list-group-flush">
                {todos.map((todo, index) =>
                    (<TodoListItem
                        todo={todo}
                        index={index}
                        handlerClickDelete={handlerClickDelete}
                        handlerClickDone={handlerClickDone}
                    />)
                )}
            </ul>
        </div>

    );
};

export default TodoList;
