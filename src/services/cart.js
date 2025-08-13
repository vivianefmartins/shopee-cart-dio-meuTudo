//quais ações meu carrinho pode fazer

//casos de uso:
// ->adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item); //push = função para adicionar um elemento dentro de um vetor
}

// ->calcular o total
async function calculateTotal(userCart){
    console.log("\nO total do seu carrinho da Shopee é:");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`💵 Total: ${result}`);
}

// ->deletar item do carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}

// ->remover um item - diminui um item
async function removeItem(userCart, index){

}

// ->mostrar o carrinho do usuário
async function displayCart(userCart){
    console.log("Lista de itens no seu carrinho da Shopee:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
    })
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };