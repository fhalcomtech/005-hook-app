import {renderHook, act} from "@testing-library/react-hooks";
import {useCounter} from "../../hooks/useCounter";

describe("Testing use counter", ()=>{
    test("test result useCounter",(done)=>{
        const {result}=renderHook(() => useCounter({}));
        const {current:{counter,less, more, reset}} = result;
        expect(counter).toBe(0);
        expect(typeof counter).toBe('number');
        expect(typeof less).toBe('function');
        expect(typeof more).toBe('function');
        expect(typeof reset).toBe('function');
        done();
    });

    test("test set a default value for useCounter",(done)=>{
        const {result}=renderHook(() => useCounter({initial:100}));
        const {current:{counter,less, more, reset}} = result;
        expect(counter).toBe(100);
        done();
    });

    test("test useCounter functions more",(done)=>{
        const initialValue = 100;
        const {result}=renderHook(() => useCounter({initial:initialValue}));
        expect(result.current.counter).toBe(100);
        act(()=> {result.current.more();});
        expect(result.current.counter).toBe(initialValue + 1);
        done();
    });

    test("test useCounter functions reset",(done)=>{
        const initialValue = 100;
        const {result}=renderHook(() => useCounter({initial:initialValue}));
        expect(result.current.counter).toBe(100);
        act(()=> {result.current.reset();});
        expect(result.current.counter).toBe(initialValue);
        done();
    });

    test("test useCounter functions less",(done)=>{
        const initial = 100;
        const {result}=renderHook(() => useCounter({initial}));
        expect(result.current.counter).toBe(100);
        act(()=> {result.current.less();});
        expect(result.current.counter).toBe(initial - 1 );
        done();
    });





    test("test useCounter functions more with increment 5",(done)=>{
        const initial = 100, increment = 5;
        const {result}=renderHook(() => useCounter({initial, increment}));
        expect(result.current.counter).toBe(100);
        act(()=> {result.current.more();});
        expect(result.current.counter).toBe(initial + increment);
        done();
    });

    test("test useCounter functions reset with increment 5",(done)=>{
        const initial = 100, increment = 5;
        const {result}=renderHook(() => useCounter({initial,increment}));
        expect(result.current.counter).toBe(100);
        act(()=> {result.current.reset();});
        expect(result.current.counter).toBe(initial);
        done();
    });

    test("test useCounter functions less increment -5",(done)=>{
        const initial = 100, increment = 5;

        const {result}=renderHook(() => useCounter({initial, increment}));
        expect(result.current.counter).toBe(100);
        act(()=> {result.current.less();});
        expect(result.current.counter).toBe(initial - increment );
        done();
    });
})