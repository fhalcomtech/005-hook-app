import {act, renderHook} from "@testing-library/react-hooks";
import {useForm} from "../../hooks/useForm";

describe("test useForm customHooks",()=>{
    const initialData = {
        name: "Fidel Lascano",
        age: 37
    };

    test("test without initial data", (done)=>{
        const {result}=renderHook(()=>useForm());
        const  [formData, handlerInputChange, resetForm] = result.current;
        expect(Object.entries(formData).length).toBe(0);
        expect(typeof handlerInputChange).toBe('function');
        expect(typeof resetForm).toBe('function');
        done();
    });

    test("test with initial data", (done)=>{
        const {result}=renderHook(()=>useForm(initialData));
        const  [formData, handlerInputChange, resetForm] = result.current;
        expect(Object.entries(formData).length).toBe(2);
        expect(formData).toBe(initialData);
        expect(typeof handlerInputChange).toBe('function');
        expect(typeof resetForm).toBe('function');
        done();
    });

    test("testing useForm for change name data", (done)=>{
        const {result}=renderHook(()=>useForm(initialData));
        const newName = "Huguito Ninini"
        const  [, handlerInputChange] = result.current;
        const event = {target:{name:"name", value: newName}};
        act(()=>{handlerInputChange(event);});
        const [formData] = result.current;
        expect(formData).toEqual({...formData, name: newName});
        done();
    })
});