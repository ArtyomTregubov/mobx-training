import { observer } from "mobx-react"
import CounterStore  from "../stores/CounterStore";
import type { FC } from "react";

interface CounterIncrementProps {
    enable: boolean;
}

export const CounterIncrement:FC<CounterIncrementProps> = observer(({enable}) => {
    return (
        <button onClick={CounterStore.increment}
                disabled = {enable}
        >+</button>
    )
});