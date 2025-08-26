import { observer } from "mobx-react"
import CounterStore from "../stores/CounterStore";

export const CounterDouble = observer(() => {
    return (
        <button onClick={CounterStore.doubleCount}>*</button>
    )
});