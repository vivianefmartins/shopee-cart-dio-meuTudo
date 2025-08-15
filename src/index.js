import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Bem-vindo ao seu carrinho da Shopee!\n");

//Sem o await, o código tentaria executar todas as linhas ao mesmo tempo, sem esperar o resultado das operações. O programa poderia tentar calcular item2.subtotal() antes mesmo de item2 ter sido criado, o que resultaria em um erro. O await garante que as operações assíncronas sejam executadas na ordem correta, tornando seu código mais fácil de ler e de gerenciar.
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

//adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

//deletei dois itens do carrinho
//await cartService.deleteItem(myCart, item2.name);
//await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);