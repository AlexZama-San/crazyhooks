import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  const algo = useContext(UserContext)
  return (
    <>
        <h1>LoginPage</h1>
        <hr />

        <pre aria-label="preTag">
          {JSON.stringify(algo, null, 3)}
        </pre>

        <button className="btn btn-primary"
          onClick={()=> algo.setUser({id:123,name: 'Ayaka'})}>
          Login
        </button>
    </>
  )
}
