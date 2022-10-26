import { LoadingQuote } from "../examples/LoadingQuote"
import { Quote } from "../examples/Quote"
import { useCounter, useFetch } from "../hooks"


export const Layout = () => {
  const {counter, increment} = useCounter(1)

  const {data, loading, error} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  return (
    <>
      <h1>Cosas magikas</h1>
      <hr />

      {loading ? (
        <LoadingQuote />

      ):(
        <Quote value={data}/>

      )}


      <button className="btn btn-outline-primary" onClick={()=>increment(1)}>Next Quoute</button>

    </>
  )
}
