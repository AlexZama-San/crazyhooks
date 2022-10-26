import { useCallback, useState } from "react"
import { ShowIncrement } from "./showIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const increment = useCallback(
      () => {
        setCounter((value)=>value + 1)
      },
      [setCounter],
    )
    
  return (
    <>
        <h1>useCallback hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={increment}></ShowIncrement>
    </>
  )
}
