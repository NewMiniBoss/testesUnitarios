import { somaHorasExtras, calculaDescontos } from '../index.js';

describe('teste de calculos da folhas', () => {
    it ('retorno das horas extras', ()=> {
        const esperado = 2500;
        const retorno = somaHorasExtras(2000, 500);
        expect(retorno).toBe(esperado);
    }) 
    
    it ('retorno dos descontos', ()=> {
        const esperado = 1500;
        const retorno = calculaDescontos(2000, 500);
        expect(retorno).toBe(esperado);
    }) 
})
