import {renderHook} from "@testing-library/react-hooks";
import {useFetch} from "../../hooks/useFetch";

describe("Test to useFetch", ()=>{
    const baseUrl = "https://www.breakingbadapi.com/api/quotes/1";
    const baseUrlError = "https://www.breakingbadapi.com/api/quote/300";

    test("Testing useFetch to get default values",(done)=>{
        const defaultResult = {data: null, loading: true, error: null};
        const {result} = renderHook(()=>useFetch(baseUrl));
        expect(result.current).toEqual(defaultResult);
        done();
    });

    test("Testing useFetch data values waiting to fetch result",async (done)=>{
        const defaultResult = {data: null, loading: true, error: null};
        const {result, waitForNextUpdate } = renderHook(()=>useFetch(baseUrl));
        await waitForNextUpdate({timeout: 5000});
        const {data, loading, error} = result.current;
        expect(loading).toBeFalsy();
        expect(error).toBeFalsy();
        expect(data).toHaveLength(1);
        done();
    });

    test("Testing useFetch data values waiting an error in fetch",async (done)=>{

        const defaultResult = {data: null, loading: true, error: null};
        const {result, waitForNextUpdate } = renderHook(()=>useFetch(baseUrlError));
        await waitForNextUpdate({timeout:3000});
        const {data, loading, error} = result.current;
        expect(loading).toBeFalsy();
        expect(error).toBeTruthy();
        expect(data).toBeNull();
        done();
    });

})