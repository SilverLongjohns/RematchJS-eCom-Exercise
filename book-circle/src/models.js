export const models = {

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
        },
        removeFromBasketSuccess(state, data) {
            var { cart } = state;
            for (let book of cart) {
                if(book.title === data.title) {
                    cart.splice(cart.indexOf(book), 1)
                };
            };
            return {
                ...state,
                cart: cart,
            }
        },
        applyDiscountSuccess(state) {
            var { cart, total } = state;
            if(cart.length === 3) {
                total = total*.90;
            }

            return {
                ...state,
                total: total,
            }
        },
        flashSaleSuccess(state, data) {
            var { cart } = state;
            const day = new Date();
            const dayOfWeek = day.getDay();
            if(dayOfWeek === 5) {
                for (let book of cart) {
                    if(book.title === data) {
                        book.price = book.price * 0.75
                    };
                };
            }
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
        },
        removeFromBasket(book) {
            try {
                this.removeFromBasketSuccess(book);
                this.updateTotal();
            } catch (err) {
                console.log(err)
            }
        },
        applyDiscount() {
            try {
                this.applyDiscountSuccess();
            } catch (err) {
                console.log(err)
            }
        },
        flashSale(bookTitle) {
            try {
                this.flashSaleSuccess(bookTitle);
                this.updateTotal();
            } catch (err) {
                console.log(err)
            }
        },
    },
}
