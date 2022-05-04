import React from "react";
import {shallow} from "enzyme";
import {MultipleCustomHook} from "../../../Component/002-use-effect/MultipleCustomHook";
import {useFetch} from "../../../hooks/useFetch";
import {useCounter} from "../../../hooks/useCounter";

jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Testing MultipleCustomHooks file", ()=>{
    useCounter.mockReturnValue({counter:1,more:()=>{},less:()=>{},reset:()=>{}})

    test("MultipleCustomHooks create new snapshopt",()=>{
         useFetch.mockReturnValue({data: null, loading: true, error: false});
         const wrapper = shallow(<MultipleCustomHook/>);
         expect(wrapper).toMatchSnapshot();
    });

    test("Testing useFetch from MultipleCustomHooks", (done)=>{
        const mockData = {author: "Walter", series: "Fhalcom", quote:"No tiene sentido"};
        useFetch.mockReturnValue({data: [mockData], loading: false, error: false})
        const wrapper = shallow(<MultipleCustomHook/>);
        const cartTitle = wrapper.find(".card .card-body .card-title .bg-secondary").text().trim();
        const cartSubtitle = wrapper.find(".card .card-body .card-subtitle .bg-secondary").text().trim();
        const cartText = wrapper.find(".card .card-body .card-text").text().trim();
        expect(cartTitle).toEqual(mockData.author);
        expect(cartSubtitle).toEqual(mockData.series);
        expect(cartText).toEqual(mockData.quote);
        done();
    });
    test("Testing useCounter from MultipleCustomHooks", (done)=>{
        const wrapper = shallow(<MultipleCustomHook/>);
        done();
    });
})
