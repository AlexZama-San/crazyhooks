import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/useContext/context/UserContext";
import { LoginPage } from "../../src/useContext/LoginPage";

describe('pruebas en LoginPage', () => {
    

    test('debe mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{}}>
                <LoginPage/>
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('preTag')

        screen.debug(preTag)

        expect(preTag.innerHTML).toBe('{}')

    });

    test('debe de llamar el setUser cuando se hace click en el botton', () => {
        
        const setUserMock = jest.fn()

        render(
            <UserContext.Provider value={{setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        )

        const button = screen.getByText('Login')

        fireEvent.click(button)

        expect(setUserMock).toHaveBeenCalled()
        expect(setUserMock).toHaveBeenCalledWith({id:123,name: 'Ayaka'})


    });
});