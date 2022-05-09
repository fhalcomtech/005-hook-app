import React from "react";
import { shallow } from "enzyme";
import TodoList from "../../Component/008-use-reducer/TodoList";
import { initialTodoState } from "../fixtures";

describe("Testing TodoList",()=> {
    const handlerClickDone = jest.fn(); 
    const handlerClickDelete = jest.fn();
    const wrapper = shallow(<TodoList todos = {initialTodoState} handlerClickDone = {handlerClickDone} handlerClickDelete = {handlerClickDelete}/>)
    
    test("Testing TodoList Snapshot", ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test("Testing TodoList count lisItems", () => {
        const listItems = wrapper.find("li").html();
        console.log(listItems.length);
    });
});