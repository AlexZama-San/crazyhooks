import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
      console.log('mensaje montado')
      return () => {
        console.log('mensaje desmontado')
      }
    }, [])
    


  return (
    <>
    <h3>Usuario ya existe</h3>
    </>
  )
}
