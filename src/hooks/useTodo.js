
import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"


const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

    const handleNewTodo = (todo) => {
        
        const action = {
            type: 'add',
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = (Id) => {
        dispatch({
            type: 'delete',
            payload: Id
        })
    }

    const handleToggleTodo = (Id) => {
        dispatch({
            type: 'toggle',
            payload: Id
        })
    }

    const todosCount = todos.length

    const todosPendingCount = todos.filter( todo => !todo.done ).length

  return (
    {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        todosPendingCount

    }
  )
}
