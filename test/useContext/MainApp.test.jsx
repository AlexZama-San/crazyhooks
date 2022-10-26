import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { MainApp } from "../../src/useContext/MainApp";

describe('pruebas en mainapp', () => {
    
    test('al estar en la ruta / debe mostrar el homepage', () => {
        
        render( 
            <MemoryRouter initialEntries={['/']}>
            <MainApp />
            </MemoryRouter>
        
        )

        expect(screen.getByText('HomePage')).toBeTruthy()
    });

    test('al estar en la ruta /about debe mostrar el aboutpage', () => {
            
            render( 
                <MemoryRouter initialEntries={['/about']}>

                    <MainApp />

                </MemoryRouter>
            
            )
    
            expect(screen.getByText('AboutPage')).toBeTruthy()
        });

    test('al estar en la ruta /login debe mostrar el LogunPage', () => {
        
        render( 
            <MemoryRouter initialEntries={['/login']}>

                <MainApp />

            </MemoryRouter>
        
        )

        expect(screen.getByText('LoginPage')).toBeTruthy()
    });
    

});