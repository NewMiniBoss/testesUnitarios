import { somaHorasExtras, calculaDescontos } from '../index.js';

test('retorno das horas extras', ()=> {
    const esperado = 2500;
    const retorno = somaHorasExtras(2000, 500);
    expect(retorno).toBe(esperado);
}) 
