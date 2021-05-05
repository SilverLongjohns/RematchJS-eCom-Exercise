import React, {Component, useEffect} from 'react'
import { connect } from 'react-redux';

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
        <div className="Book">
            <p>The Giver</p><p>10.00</p>
            <button onClick={() => addToBasket({title: "The Giver", price: 10.00})}>Buy</button>
        </div>
    </div>
)

export default connect(({models}) => ({...models}), ({models}) => ({...models}))(App);
