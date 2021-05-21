import React, {Component, useEffect} from 'react'
import { connect } from 'react-redux';
import Book from '../Book/Book'

const App = ({
    total,
    cart,
    addToBasket,
             }) => (
    <div className="App">
        <div className="Basket">
<p>In Basket: {cart.map(book => <p>{book.title}</p>)}</p> {/*Make a component from the <p></p> tags*/}
        <p>Total: {total.toString()}</p>
        </div>
        <Book add={addToBasket} book={{title: "The Giver", price: 10}} />
        <Book add={addToBasket} book={{title: "The Lord of the Rings", price: 20}} />
        <Book add={addToBasket} book={{title: "Harry Potter", price: 30}} />
    </div>
)

export default connect(({models}) => ({...models}), ({models}) => ({...models}))(App);
