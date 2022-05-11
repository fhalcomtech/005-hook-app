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

    test("Testing TodoList count lisItems", (done) => {
        const listItems = wrapper.find("TodoListItem");
        expect(listItems.length).toEqual(initialTodoState.length);
        done();
    });

    test("Testing TodoList testing data is correct", (done)=>{
        const props = wrapper.find("TodoListItem").at(0).props();
        const {index, todo, handlerClickDone, handlerClickDelete} = props;
        expect(handlerClickDone).toEqual(expect.any(Function));
        expect(handlerClickDelete).toEqual(expect.any(Function));
        expect(todo.id).toEqual(initialTodoState[index].id);
        done();
    });
});