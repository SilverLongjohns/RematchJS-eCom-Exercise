export default {

    state: {
        cart: [],
        total: 0,
    },
    reducers: {
        addToBasketSuccess(state, data) {
            var { cart } = state;
            cart.push(data);
            return {
                ...state,
                cart: cart,
            }
        },
        updateTotalSuccess(state) {
            var { cart } = state;
            var total = 0;
            for (let book of cart) {
                total += book.price;
            }
            return {
                ...state,
                total: total,
            }
        }
    },
    effects: {
        addToBasket(book) {
            try {
                this.addToBasketSuccess(book);
                this.updateTotal();
            } catch (err) {
                console.log(err)
            }
        },
        updateTotal() {
            try {
                this.updateTotalSuccess();
            } catch (err) {
                console.log(err)
            }
        }
    },

}


