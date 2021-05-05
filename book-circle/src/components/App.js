import React, {Component, useEffect} from 'react'
import { connect } from 'react-redux';
import Books from './books'

const App = ({
    total,
    cart,
    addToBasket,
             }) => (
    <div className="App">
        <div className="Basket">
<p>In Basket: {cart.map(book => book.title).join(" | ")}</p>
        <p>Total: {total.toString()}</p>
        </div>
        <Books add={addToBasket} book={{title: "The Giver", price: 10}} />
        <Books add={addToBasket} book={{title: "The Lord of the Rings", price: 20}} />
        <Books add={addToBasket} book={{title: "Harry Potter", price: 30}} />
    </div>
)

export default connect(({models}) => ({...models}), ({models}) => ({...models}))(App);
