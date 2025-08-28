import { observer } from "mobx-react";
import type { FC } from "react";

interface CounterDisableProps {
    hideButton: () => void;
}

export const CounterDisable:FC<CounterDisableProps> = observer(({hideButton}) => {
    return (
        <button className="disable-button"
                onClick={hideButton}>DISABLE</button>
    )
}); 