import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/useReducer/TodoItem";


describe('pruebas en el TodoItem', () => {

    const todo = {
        id: 1,
        desc: 'conseguir a Nahida',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(()=> {
        jest.clearAllMocks();
    })
    
    test('debe mostrar el todo pendiente de completar', () => {
        
        render(<TodoItem todo={todo} 
            onToggleTodo={onToggleTodoMock} 
            onDeleteTodo={onDeleteTodoMock}/>
        )

        const liElement = screen.getByRole('listitem')
        
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByText(todo.desc)

        expect(spanElement.className).toBe('align-self-center false')



    });

    test('debe mostrar el todo completado', () => {
        
        todo.done=true;

        render(<TodoItem todo={todo} 
            onToggleTodo={onToggleTodoMock} 
            onDeleteTodo={onDeleteTodoMock}/>
        )

        const spanElement = screen.getByText(todo.desc)

        expect(spanElement.className).toContain('align-self-center text-decoration-line-through')



    });

    test('el span debe llamar el toggle cuando se hace dobleclick', ()=> {

        render(<TodoItem todo={todo} 
            onToggleTodo={onToggleTodoMock} 
            onDeleteTodo={onDeleteTodoMock}/>
        )

        const spanElement = screen.getByText(todo.desc)

        fireEvent.doubleClick(spanElement)

        expect(onToggleTodoMock).toHaveBeenCalledTimes(1)
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)

    })

    test('el boton debe llamar el onDeleteTodo', () => {
        
        render(<TodoItem todo={todo} 
            onToggleTodo={onToggleTodoMock} 
            onDeleteTodo={onDeleteTodoMock}/>
        )

        const buttonElement = screen.getByRole('button')

        fireEvent.click(buttonElement)

        expect(onDeleteTodoMock).toHaveBeenCalledTimes(1)
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
    });


});