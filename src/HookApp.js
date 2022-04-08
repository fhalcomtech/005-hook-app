import { CounterApp } from "./Component/001-use-state/CounterApp";
import { CounterWithCustomHook } from "./Component/001-use-state/CounterWithCustomHook";
import { FormWithCustomHook } from "./Component/002-use-effect/FormWithCustomHook";
import { SimpleForm } from "./Component/002-use-effect/SimpleForm";
import {MultipleCustomHook} from "./Component/002-use-effect/MultipleCustomHook";
import FocusScreen from "./Component/004-use-ref/FocusScreen";
import { Layout } from "./Component/005-use-layout-efect/Layout";
import { Memorize } from "./Component/006-memos/Memorize";
import MemoHook from "./Component/006-memos/MemoHook";
import CallbackHook from "./Component/006-memos/CallbackHook";

const HookApp = () => (<><CallbackHook/></>);
export default HookApp;