import { init } from "@rematch/core";
import model from './model';

describe("A book", () => {
    let store;
    beforeEach(() => {
    store = init({
        models: {
            books: { ...model, state: { cart: [], total: 0 } },
        },
    })
    })
    it("should be added to the basket", () => {
        const {dispatch, getState} = store;
        dispatch.books.addToBasket("book1");
        const { books } = getState();
        expect(books.cart).toEqual(["book1"])
    });

    it("should be able to add multiple books to the basket", () => {
        const{dispatch, getState} = store;
        dispatch.books.addToBasket("book1")
        dispatch.books.addToBasket("book2")
        dispatch.books.addToBasket("book3")
        const {books} = getState();
        expect(books.cart).toEqual(["book1", "book2", "book3"])
    })

    it("should update price when book is added to basket", () => {
        const{dispatch, getState} = store;
        dispatch.books.addToBasket({title: "book1", price: 10});
        const {books} = getState();
        expect(books.total).toEqual(10);
    })
});