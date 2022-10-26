

const initialState = [{
    id: 1,
    todo: 'Hacer diarias de genshin',
    done: false
}]


const todoReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        default:
            return state
    }
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'hacer diarias de tower of fantasy',
    done: false
}

const addTodoAction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction)

console.log(todos)