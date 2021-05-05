import { init } from "@rematch/core";
import { models } from './models';

describe("A basket", () => {
    let store;
    beforeEach(() => {
    store = init({
        models: {
            books: { ...models, state: { cart: [], total: 0 } },
        },
    })
    })
    it("should be able to have books added", () => {
        const {dispatch, getState} = store;
        dispatch.books.addToBasket("book1");
        const { books } = getState();
        expect(books.cart).toEqual(["book1"])
    });

    it("should be able to add multiple books", () => {
        const{dispatch, getState} = store;
        dispatch.books.addToBasket("book1")
        dispatch.books.addToBasket("book2")
        dispatch.books.addToBasket("book3")
        const {books} = getState();
        expect(books.cart).toEqual(["book1", "book2", "book3"])
    })

    it("should update price when book is added", () => {
        const{dispatch, getState} = store;
        dispatch.books.addToBasket({title: "book1", price: 10});
        const {books} = getState();
        expect(books.total).toEqual(10);
    })

    it("should be able to have books removed", () => {
        const {dispatch, getState} = store;
        dispatch.books.addToBasket({title: "book1", price: 10});
        dispatch.books.removeFromBasket({title: "book1", price: 10});
        const {books} = getState();
        expect(books.cart).toEqual([])
    })

    it("should have its total updated when a book is removed", () => {
        const {dispatch, getState} = store;
        dispatch.books.addToBasket({title: "book1", price: 10});
        dispatch.books.addToBasket({title: "book2", price: 15});
        dispatch.books.removeFromBasket({title: "book1", price: 10});
        const {books} = getState();
        expect(books.total).toBe(15);
    })

    it("should have apply 10% discount when three books are in cart", () => {
        const {dispatch, getState} = store;
        dispatch.books.addToBasket({title: "book1", price: 10});
        dispatch.books.addToBasket({title: "book2", price: 15});
        dispatch.books.addToBasket({title: "book3", price: 10});
        dispatch.books.applyDiscount();
        const {books} = getState();
        expect(books.total).toBe(31.50);
    })

    it("should not apply 10% discount when there are less than three books in the cart", () => {
        const {dispatch, getState} = store;
        dispatch.books.addToBasket({title: "book1", price: 10});
        dispatch.books.addToBasket({title: "book2", price: 15});
        dispatch.books.applyDiscount();
        const {books} = getState();
        expect(books.total).toBe(25);
    })

    it("should apply 25% discount on Friday for The Twits", () => {
        const {dispatch, getState} = store;
        var MockDate = require('mockdate');
        MockDate.set(1619776569000);
        dispatch.books.addToBasket({title: "The Twits", price: 10});
        dispatch.books.flashSale("The Twits");
        const {books} = getState();
        expect(books.total).toBe(7.50);
        MockDate.reset();
    });
});
