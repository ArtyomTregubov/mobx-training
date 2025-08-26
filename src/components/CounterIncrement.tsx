import { observer } from "mobx-react"
import CounterStore  from "../stores/CounterStore";

export const CounterIncrement = observer(() => {
    return (
        <button onClick={CounterStore.increment}>+</button>
    )
});