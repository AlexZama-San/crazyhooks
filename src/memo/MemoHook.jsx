import { useMemo } from "react"
import { useCounter } from "../hooks"

const heavyStuff = (iterations = 100) => {
  for (let i = 0; i < iterations; i++) {
    console.log('ya vamos...')
  }

  return `${iterations} iteraciones realizadas`
}



export const MemoHook = () => {

    const { counter, increment } = useCounter(10)

    const memortizeValue = useMemo(() => heavyStuff(counter), [counter])
  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr />

        <h4>{heavyStuff(memortizeValue)}</h4>

        <button
        className="btn btn-primary"
        onClick={()=>increment()}>
            +1
        </button>
    </>
  )
}
