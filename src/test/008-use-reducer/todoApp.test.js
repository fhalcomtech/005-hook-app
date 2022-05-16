import React from "react"
import { mount, shallow } from "enzyme"
import TodoApp from "../../Component/008-use-reducer/TodoApp"
import { initialTodoState } from "../fixtures"
import { act } from "@testing-library/react"

describe('test TodoApp component', () => { 
    const wrapper = shallow(<TodoApp/>);
    Storage.prototype.setItem = jest.fn(()=>{});
    test('TodoApp should to match snapshot', () => { 
        expect(wrapper).toMatchSnapshot();
     });

     test('TodoApp must be add a todo', () => { 
         const wapper = mount(<TodoApp/>);
        act(()=>{
            wrapper.find('TodoAdd').prop("handlerSaveTodo")(initialTodoState[0]);
            wrapper.find('TodoAdd').prop("handlerSaveTodo")(initialTodoState[1]);
        });
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(wrapper.find('h1').text().trim()).toBe('Todo App: 2')
      });

      test('TodoApp must be delete a todo', (done) => {
          wrapper.find('TodoAdd').props().handlerSaveTodo(initialTodoState[0]);
          expect(wrapper.find('h1').text().trim()).toBe('Todo App: 3');


          wrapper.find('TodoList').props().handlerClickDelete(initialTodoState[0]);
          expect(wrapper.find('h1').text().trim()).toBe('Todo App: 1');
          done();
       })
 })