let initialState = [{
    id:1,
    description: 'Learn Css',
    done: false
}]

const todoReducer = (state = initialState,
                 action = {type:'',payload:{}}) => {
    const {type, payload} = action
    switch (type)
    {
        case 'add': return [...state, payload];
        default: return state;
    }

    return state;
}

let todos = todoReducer();


const newTodo = {
    id:2,
    description: 'Learn Sass',
    done: false
}
console.log(todos);

let action = {type: 'add', payload: newTodo}

todos = todoReducer(todos,action);

console.log(todos);


