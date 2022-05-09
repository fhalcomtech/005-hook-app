import React from "react"
import { shallow } from "enzyme"
import TodoListItem from "./../../Component/008-use-reducer/TodoListItem";
import { initialTodoState } from "../fixtures";


describe("Testing todoListItem",()=>{
    const handlerClickDelete = jest.fn();
    const handlerClickDone = jest.fn();
    
    const wrapper = shallow(
    <TodoListItem
        todo={initialTodoState[0]}
        index={0}
        handlerClickDelete={handlerClickDelete}
        handlerClickDone={handlerClickDone}/>
        );

    test("Testing todoListItem create snapshot",()=>{
        expect(wrapper).toMatchSnapshot()
    })

    test("Testing todoListItem toggle done",()=>{
        wrapper.find("li > p").simulate("click");
        expect(handlerClickDone).toBeCalledWith({...initialTodoState[0],done: !initialTodoState[0].done});
    })

    test("Testing todoListItem must be correct text",()=>
    {
        const text = wrapper.find("li > p").text().trim();
        const textResult = `${initialTodoState[0].id}. ${initialTodoState[0].desc}`;
        expect(text).toEqual(textResult);
    })

    test("Testing todoListItem to delete a todo",()=>
    {
        wrapper.find("li button").simulate("click");
        expect(handlerClickDelete).toBeCalledWith(initialTodoState[0]);
    })


    test("Testing todoListItem to must be text-decoration-line-through class",()=>
    {
        const wrapper2 = shallow(
            <TodoListItem
                todo={initialTodoState[0]}
                index={0}
                handlerClickDelete={handlerClickDelete}
                handlerClickDone={handlerClickDone}/>
                );
    })
})