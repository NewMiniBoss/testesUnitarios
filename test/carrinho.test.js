import Carrinho from "../carrinho/carrinho.js";
import Item from "../carrinho/item.js";

describe('testes de carrinho', () => {
    it ('deve inicializar vázio', () => {
        const carrinho = new Carrinho();
        
        expect(carrinho.subtotal).toBeNull();
    })

    it ('deve conter itens', () => {
        const item1 = new Item('mexirica', 1, 2);
        const carrinho = new Carrinho();

        carrinho.adiciona(item1);

        expect(typeof carrinho).toBe('object');
        expect(carrinho).toHaveProperty('total');
    })
})