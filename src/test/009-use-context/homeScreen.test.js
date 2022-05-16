import React from "react"
import { mount } from "enzyme"
import HomeScreen from "./../../Component/009-use-context/HomeScreen"
import { UserContext } from "../../Component/009-use-context/UserContext"
describe('Test HomeScreen component', () => {
    const user = {name: "Fidel", lastname: "Lascano", edad:37}
    const setUser = jest.fn();
    const wrapper = mount(
    <UserContext.Provider value={{user, setUser:setUser}}>
        <HomeScreen/>
    </UserContext.Provider>
    )
    test('Test HomeScreen must be match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
     })
37})