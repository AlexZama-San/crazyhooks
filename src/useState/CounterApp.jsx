import { useState } from "react"

export const CounterApp = () => {
    const [counter, setcounter] = useState({
        counter1 : 10,
        counter2 : 20,
        counter3 : 30
    })

  return (
    <>
    <h1>Counter: {counter.counter1}</h1>
    <h1>Counter: {counter.counter2}</h1>
    <h1>Counter: {counter.counter3}</h1>

    <hr />

    <button className="btn" onClick={() => setcounter({
        ...counter, counter1: counter.counter1 + 1
    })}>+1</button>
    </>
  )
}
