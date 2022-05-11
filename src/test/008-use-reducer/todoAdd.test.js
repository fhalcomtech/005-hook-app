import React from "react";
import { shallow } from "enzyme"
import TodoAdd from "../../Component/008-use-reducer/TodoAdd";

describe('Test TodoAdd', () => 
{ 
    const handlerSaveTodo = jest.fn();
    const wrapper = shallow(<TodoAdd handlerSaveTodo={handlerSaveTodo}/>);
    test('Test TodoAdd create snapshot', () => { 
        expect(wrapper).toMatchSnapshot();

     });

     test('Test TodoAdd Should not to be call handlerSavetodo', () => { 
         const form = wrapper.find("form");
         form.simulate("submit",{preventDefault:()=>{}});
         expect(handlerSaveTodo).toBeCalledTimes(0);
      })

      test('Test TodoAdd Should not to be call handlerSavetodo', (done) => { 
        const newTodoDesc = "Learn Vue Js";
        wrapper.find('[name="todoDesc"]').simulate("change", {target: {value:newTodoDesc, name: 'todoDesc'}})
        wrapper.find("form").simulate("submit",{preventDefault:()=>{}});
        expect(handlerSaveTodo).toBeCalledTimes(1);
        expect(handlerSaveTodo).toBeCalledWith(
            { 
                "desc": newTodoDesc,
                "done": false, 
                "id": expect.any(Number)
            });
        expect(wrapper.find('[name="todoDesc"]').text()).toEqual("")
        done(); 
    })
 })