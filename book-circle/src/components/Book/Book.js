import React, {Component, useEffect} from 'react'
import { connect } from 'react-redux';

const Book = ({
    add,
    book,
               }) => (
    <div className="Book">
        <p>{book.title}</p><p>{book.price}</p>
        <button onClick={() => add(book)}>Buy</button>
    </div>
)

export default Book
