import { observer } from "mobx-react"
import CounterStore from "../stores/CounterStore";

export const DisplayCounter = observer(() => {
    return (
        <h2>{CounterStore.count}</h2>
    )
});