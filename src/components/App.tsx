import { CounterIncrement } from "./CounterIncrement"
import { DisplayCounter } from "./DisplayCounter"
import { CounterDecrement } from "./CounterDecrement"
import { CounterDouble } from "./CounterDouble"
import { CounterReset } from "./CounterReset"

function App() {
  
  return ( 
    <div className="counter">
      <h1>Hello</h1>
      <DisplayCounter />
      <div>
        <CounterIncrement />
        <CounterDecrement />
      </div>
      <div className="button-container">
        <CounterDouble />
        <CounterReset />
      </div>
    </div>
  )
}

export default App
