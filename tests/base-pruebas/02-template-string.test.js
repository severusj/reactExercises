import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', ()=>{
    test ('getSaludo debe retornar "Hola"', ()=>{
        const name="HOLA"
        const message=getSaludo(name);

    });
})