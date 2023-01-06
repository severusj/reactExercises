import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';


describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe de retornar un objecto', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        
        const user = getUser();
        
        expect( testUser ).toEqual( user );

    });
    test('getUsuarioActivo debe retornar un objeto', () => {
        
        let nombre="Gabriel"
        const user = getUsuarioActivo(nombre);
        expect( user ).toEqual( {
            uid: 'ABC567',
            username: nombre
        } );

    });
});
