import { mount } from "enzyme";
import React from "react"
import { UserContext } from "../../Component/009-use-context/UserContext";
import AppRouter from "./../../Component/009-use-context/AppRouter"

describe('Test AppRouter', () => { 
    const user = {name: "Fidel Alembert", lastname: "Lascano Valencia"}
    const setUser = jest.fn();
    const wrapper = mount(
       <UserContext.Provider value={{user,setUser}}>
           <AppRouter/>
       </UserContext.Provider>
    )
    test("Test AppRouter to match snapshot", ()=>{
        expect(wrapper).toMatchSnapshot();
    });
 })