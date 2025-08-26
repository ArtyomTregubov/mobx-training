import { observer } from "mobx-react"
import CounterStore from "../stores/CounterStore";

export const CounterDecrement = observer(() => {
    return (
        <button onClick={CounterStore.decrement}>-</button>
    )
});