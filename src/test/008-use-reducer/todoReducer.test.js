import { initialTodoState } from "../fixtures";
import todoReducer from "./../../Component/008-use-reducer/todoReducer";

describe("Testing todoReducer",()=>{
    const payload = {id:1, description: "Learn React", done:true}
    test("Testing todoReducer to get initial data", ()=>{
        const state = todoReducer();
        expect(state.length).toEqual(0);
    });

    test("Testing todoReducer add payload", (done)=>{
        const state = todoReducer([],{type: "add", payload});
        expect(state.length).toEqual(1);
        expect(state[0]).toEqual(payload);
        expect(state[0].id).toBe(1);
        done();
    });

    test("Testing todoReducer delete payload", (done)=>{
        const state = todoReducer(initialTodoState ,{type: "delete", payload});
        expect(state.length).toEqual(1);
        expect(state.filter(stateU=>(state.id!==payload.id)).length).toBe(1);
        done();
    });

    test("Testing todoReducer done payload", (done)=>{
        const state = todoReducer(initialTodoState ,{type: "done", payload});
        expect(state.length).toEqual(2);
        expect(state.filter(stateU=>(stateU.id===payload.id))[0].done).toBeTruthy();
        done();
    });
    
})