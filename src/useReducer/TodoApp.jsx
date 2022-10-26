
import { useTodo } from "../hooks/useTodo"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoApp = () => {

    const { todos, todosCount, todosPendingCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo()

  return (
    <>
        <h1>TodoApp {todosCount}, <small>pendientes: {todosPendingCount}</small></h1>
        <hr />


        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}></TodoList>

            </div>

            <div className="col-5">
                <h4>Agregar Tarea</h4>
                <hr />
                    <TodoAdd onNewTodo={handleNewTodo}></TodoAdd>
            </div>
        </div>
    </>
  )
}
