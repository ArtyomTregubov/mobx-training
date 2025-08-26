import { makeAutoObservable } from "mobx";

class CounterStore {
    count = 0;
    constructor() {
        makeAutoObservable(this);
    }

    increment = () => {
        this.count++;
    }

    decrement = () => {
        this.count--;
    }

    doubleCount = () => {
        this.count *= 2;
    }

    clear = () => {
        this.count = 0;
    }
}

export default new CounterStore;