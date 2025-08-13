//casos de uso dos itens:
// ->criar item com subtotal certo
async function createItem(name, price, quantity){
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}

export default createItem;