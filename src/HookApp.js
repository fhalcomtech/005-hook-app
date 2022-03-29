import { CounterApp } from "./Component/001-use-state/CounterApp";
import { CounterWithCustomHook } from "./Component/001-use-state/CounterWithCustomHook";
import { FormWithCustomHook } from "./Component/002-use-effect/FormWithCustomHook";
import { SimpleForm } from "./Component/002-use-effect/SimpleForm";
import {MultipleCustomHook} from "./Component/002-use-effect/MultipleCustomHook";

const HookApp = () => (<>
        <MultipleCustomHook/>
    </>);
export default HookApp;
