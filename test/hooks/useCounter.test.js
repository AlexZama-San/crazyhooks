const { renderHook, act } = require("@testing-library/react");
const { useCounter } = require("../../src/hooks/useCounter");


describe('Pruebas en useCounter', () => {
    
    test('debe retornar el valor por defecto', () => {
        
        const {result} = renderHook( () => useCounter() )
        const {counter, increment, decrement, reset} = result.current

        expect(counter).toBe(10)
        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
    });

    test('debe tener el counter en 100', () => {

        const {result} = renderHook( () => useCounter(100) )
        const {counter} = result.current

        expect(counter).toBe(100)
    })

    test('debe incrementar el counter en 1', () => {

        const {result} = renderHook( () => useCounter() )
        const {increment} = result.current
        act( () => {
            increment()
        })

        expect(result.current.counter).toBe(11)
    })

    test('debe decrementar el counter en 1', () => {
            
        const {result} = renderHook( () => useCounter() )
        const {decrement} = result.current
        act( () => {
            decrement()
        })

        expect(result.current.counter).toBe(9)
    })

    test('debe resetear el counter', () => {
                
        const {result} = renderHook( () => useCounter() )
        const {increment, reset} = result.current
        act( () => {
            increment()
            reset()
        })

        expect(result.current.counter).toBe(10)
    })

});