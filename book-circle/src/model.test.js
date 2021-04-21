import { init } from "@rematch/core";
import model from './model';

describe("A book", () => {
    let store;
    beforeEach(() => {
    store = init({
        models: {
            books: { ...model, state: { cart: [] } },
        },
    })
    })
    it("should be added to the basket", () => {
        const {dispatch, getState} = store;
        dispatch.books.addToBasket("book1");
        const { books } = getState();
        expect(books.cart).toEqual(["book1"])
    });
});