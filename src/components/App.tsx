import { CounterIncrement } from "./CounterIncrement"
import { DisplayCounter } from "./DisplayCounter"
import { CounterDecrement } from "./CounterDecrement"
import { CounterDouble } from "./CounterDouble"
import { CounterReset } from "./CounterReset"
import { CounterDisable } from "./CounterDisable"
import { useState } from "react"
import { Cards } from "./Cards"

function App() {
  const [enable, setEnable] = useState<boolean>(false);

  const hideButton = (): void => setEnable(true);

  return ( 
    <div className="main">
      <div className="counter">
        <h1>Hello</h1>
        <DisplayCounter />
        <div>
          <CounterIncrement
            enable={enable} />
          <CounterDecrement />
        </div>
        <div className="button-container">
          <CounterDouble />
          <CounterReset />
        </div>
        <CounterDisable
          hideButton={hideButton} />
      </div>
      <Cards />
    </div>
  )
}

export default App
