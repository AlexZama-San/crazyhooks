import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')


describe('Pruebas en MultipleCustomHooks', () => {

    const mockIncrement= jest.fn()
    useCounter.mockReturnValue({counter: 1, increment: mockIncrement})

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('debe de mostar el componente por defect', () => {

        useFetch.mockReturnValue({data: null, loading: true, error: null})
        render(<MultipleCustomHooks/>)

        expect(screen.getByText('Loading...'))
        expect(screen.getByText('Cosas magikas'))

        const quote = screen.getByRole('button')
        expect(quote.dissabled).toBe(undefined)
        screen.debug()
    });

    test('debe mostrar un quote', () => {
        useFetch.mockReturnValue({data: [{author: 'Ei', quote: 'Now you should parish'}], loading: false, error: null})
        render(<MultipleCustomHooks/>)

        expect(screen.getByText('Now you should parish')).toBeTruthy()
        expect(screen.getByText('Ei')).toBeTruthy()

    });

    test('debe de llamar la funcion de incrementar', () => {
        

        useFetch.mockReturnValue({data: [{author: 'Ei', quote: 'Now you should perish'}], loading: false, error: null})
        render(<MultipleCustomHooks/>)


        const quote = screen.getByRole('button')
        fireEvent.click(quote)
        
        expect(mockIncrement).toHaveBeenCalled()
    })
 })