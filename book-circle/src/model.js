export default {

    state: {
        cart: []
    },
    reducers: {
        addToBasketSuccess(state, data) {
            var { cart } = state
            cart.push(data);
            return {
                ...state,
                cart: cart,
            }
        }
    },
    effects: {
        addToBasket(book) {
            try {
                this.addToBasketSuccess(book);
            } catch (err) {
                console.log(err)
            }
        }
    },

}


