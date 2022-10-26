import { render, screen } from "@testing-library/react";
import { useTodo } from "../../src/hooks/useTodo";
import { TodoApp } from "../../src/useReducer/TodoApp";

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en el TodoApp', () => {

    useTodo.mockReturnValue({
        todos: [{
            id: 1,
            desc: 'Aprender React',
            done: false
        },
        {
            id: 2,
            desc: 'Aprender Mongo',
            done: true
        }],
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        todosCount: 2,
        todosPendingCount: 1
    })
    
    test('debe mostrar el componente correctamente ', () => {
        
        render(<TodoApp/>)

        screen.debug()

        expect(screen.getByText('Aprender React')).toBeTruthy()
        expect(screen.getByText('Aprender Mongo')).toBeTruthy()
        expect(screen.getByPlaceholderText('¿Que hay que hacer?')).toBeTruthy()


    });
});