import { useState } from "react"
import { useForm } from "../hooks"

export const TodoAdd = ({onNewTodo}) => {

    const {formState, onInputChange} = useForm({
        description: ''
    })
    const onFormSubmit = (e) => {
        e.preventDefault()

        if(formState.description.lenght < 1) return
        
        const newTodo = {
            id: new Date().getTime(),
            desc: formState.description,
            done: false
        }
        onNewTodo (newTodo)
    }

  return (
    <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="¿Que hay que hacer?" name="description" value={formState.description} onChange={onInputChange}
        className="form-control"/>

        <button type="submit" className="btn btn-outline-primary mt-1 btn-block">
            Agregar
        </button>
    </form>


  )
}
