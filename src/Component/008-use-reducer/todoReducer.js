const todoReducer = (state = [], action = {type:'', payload:{}}) => {
    const {type, payload} = action;
    switch (type) {
        case 'add': return [...state,payload];
        default: return [...state];
    }
}

export default todoReducer;