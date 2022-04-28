import React from "react"
import HookApp from "../HookApp";
import {shallow} from "enzyme";

describe("Making test with HookApp Component", ()=>{
    test("Write Snapshot", ()=>{
       const wrapper = shallow(<HookApp/>);
       expect(wrapper).toMatchSnapshot();
    });
})