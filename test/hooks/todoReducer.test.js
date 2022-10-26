import { todoReducer } from "../../src/hooks/todoReducer";

describe('Pruebas en todoReducer', () => {
    
    const initialState = [{
        id: 1,
        desc: 'Aprender React',
        done: false
    }]
    test('debe regresar el estado inicial', () => {
        
        const newStado = todoReducer(initialState, {})

        expect(newStado).toBe(initialState)

    });

    test('debe agregar un todo', () => {
        
        const action = {
            type: 'add',
            payload: {
                id: 2,
                desc: 'Aprender Mongo',
                done: false
            }
        }
        const newStado = todoReducer(initialState, action)

        expect(newStado.length).toBe(2)
        expect(newStado).toContain(action.payload)

    });

    test('debe borrar un todo', () => {
            
            const action = {
                type: 'delete',
                payload: 1
            }
            const newStado = todoReducer(initialState, action)
    
            expect(newStado.length).toBe(0)
    
    })

    test('debe hacer el toggle del todo', () => {

        const action = {
            type: 'toggle',
            payload: 1
        }
        const newStado = todoReducer(initialState, action)

        expect(newStado[0].done).toBe(true)

    })
});