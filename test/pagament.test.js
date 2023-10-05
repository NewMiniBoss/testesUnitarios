import { somaHorasExtras, calculaDescontos } from '../index.js';

test('retorno das horas extras', ()=> {
    const esperado = 2500;
    const retorno = somaHorasExtras(2000, 500);
    expect(retorno).toBe(esperado);
}) 

test('retorno dos descontos', ()=> {
    const esperado = 1500;
    const retorno = calculaDescontos(2000, 500);
    expect(retorno).toBe(esperado);
}) 
