export default {

    state: {
        cart: []
    },
    reducers: {
        addToBasketSuccess(state, data) {
            return {
                ...state,
                cart: this.cart.push(data),
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


