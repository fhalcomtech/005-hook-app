import React from 'react';

const TodoListItem = ({handlerClickDone, handlerClickDelete, todo, index}) => {
    const {id, desc, done} = todo;
    return (
        <li className="list-group-item d-flex justify-content-around" key={id}>
            <p
                onClick={(e)=>{handlerClickDone({id, desc, done:!done})}}
                className={ done && 'text-decoration-line-through text-success' }
            >
                {index + 1}. {desc}
            </p>
            <button className="btn btn-danger" onClick={(e)=>{
                handlerClickDelete({id,desc,done})
            }}>delete</button>
        </li>
    );
};

export default TodoListItem;
