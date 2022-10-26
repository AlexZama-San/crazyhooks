import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";

describe('pruebas en useForm', () => {
    const initialForm={
        name: 'Ayaka',
        email: 'kamizatoAyaka@genshin.com'
    }
    
    test('debe regresar el objeto por defecto', () => {

        
        const { result } = renderHook(() => useForm(initialForm))

        expect (result.current).toEqual({
            initialForm: initialForm,
            formState: {
              initialForm: initialForm
            },
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })


    });

    test('debe cambiar el valor del formulario', () => {
        const newValue = 'Ayato'

        const { result } = renderHook(() => useForm(initialForm))

        act(() => {
            result.current.onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            })
        })

        expect(result.current.name).toEqual(newValue)
        expect(result.current.formState.name).toEqual(newValue)

    })

    test('debe resetear el formulario', () => {
        const newValue = 'Ayato'

        const { result } = renderHook(() => useForm(initialForm))

        act(() => {
            result.current.onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            })
        })

        act(() => {
            result.current.onResetForm()
        })

        expect(result.current.name).toEqual(initialForm.name)
        expect(result.current.formState.name).toEqual(initialForm.name)

    })
});