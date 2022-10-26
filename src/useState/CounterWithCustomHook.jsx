import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter,increment,reset,decrement} = useCounter(10)


  return (
    <>
    <h1>Counter with hook: {counter}</h1>
    <hr />

    <button className="btn btn-primary" onClick={()=>increment(3)}>+1</button>
    <button className="btn btn-primary" onClick={reset}>reset</button>
    <button className="btn btn-primary" onClick={()=>decrement(3)}>-1</button>
    </>
  )
}
