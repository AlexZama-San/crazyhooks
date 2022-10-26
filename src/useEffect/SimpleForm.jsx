import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'Ayaka',
        email: 'KamizatoAyaya@jenshin.com'
    })

    const { username, email } = formState

    const onInputChange = ({ target }) => {
        setformState({
            ...formState,
            [target.name]: target.value
        })
    }

    useEffect(()=>{
        console.log('Hey the formState changed')
    }, [formState])


  return (
    <>
    <h1>Simple Form</h1>
    <hr />

    <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange}/>
    <input type="text" className="form-control mt-2" placeholder="Email" name="email" value={email} onChange={onInputChange}/>
    {
        (username === 'Ayaka') && <Message></Message>
    }
    </>
  )
}
