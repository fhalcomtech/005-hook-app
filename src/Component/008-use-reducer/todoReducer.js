const todoReducer = (state = [], action = {type:'', payload:{}}) => {
    const {type, payload} = action;
    switch (type) {
        case 'add': return [...state,payload];
        case 'delete': return  state.filter(({id, desc, done})=>id !== payload.id)
        default: return [...state];
    }
}

export default todoReducer;