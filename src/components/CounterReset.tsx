import { observer } from "mobx-react";
import CounterStore from "../stores/CounterStore";

export const CounterReset = observer(() => {
    return (
        <button onClick={CounterStore.clear}>R</button>
    )
})