import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm} = useForm({
        username: '',
        email: '',
        pass: ''
    })

    const {username, email, pass} = formState
        useEffect(()=>{
            console.log('Hey the formState changed')
        }, [formState])
    
    
      return (
        <>
        <h1>Simple Form</h1>
        <hr />
    
        <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange}/>
        <input type="text" className="form-control mt-2" placeholder="Email" name="email" value={email} onChange={onInputChange}/>
        <input type="text" className="form-control mt-2" placeholder="Contraseña" name="pass" value={pass} onChange={onInputChange}/>

        <button className="btn btn-danger mt-3" onClick={onResetForm}>borrar formulario</button>
        </>
      )
    }
    
