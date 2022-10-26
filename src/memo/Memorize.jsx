import { useCounter } from "../hooks"
import { Small } from "./small"

export const Memorize = () => {

    const { counter, increment } = useCounter(10)
  return (
    <>
        <h1>Counter: <Small value={counter}></Small></h1>
        <hr />

        <button
        className="btn btn-primary"
        onClick={()=>increment()}>
            +1
        </button>
    </>
  )
}
