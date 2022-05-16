import React from "react"
import { mount } from "enzyme"
import { UserContext } from "../../Component/009-use-context/UserContext"
import UserScreen from "../../Component/009-use-context/UserScreen"
describe('Test UserScreen', () => {
    const user = {name: "Fidel Alembert", lastname: "Lascano Valencia"}
    const setUser = jest.fn();
    const wrapper = mount(
    <UserContext.Provider value={{user,setUser}}>
        <UserScreen/>
    </UserContext.Provider>
    )
    
    test('Test UserScreen to match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test("Test UserScreen must have an user",()=>{
        wrapper.find('[name="name"]').simulate('change',{target:{
            name:'name', value:'Fhalcom'
        }})

        wrapper.find('[name="name"]').simulate('change',{target:{
            name:'lastname', value:'Lascano'
        }})

        wrapper.find('form').simulate('submit',{prenventDefault:()=>{} ,target:{
            name:'lastname', value:'Lascano'
        }})

        expect(setUser).toHaveBeenCalledWith({
            id: expect.any(Number),
            name:'Fhalcom', 
            lastname:'Lascano'})


    })
 })