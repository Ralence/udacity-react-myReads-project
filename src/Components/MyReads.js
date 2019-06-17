import React, { Component } from 'react';
import Shelf from './Shelf';
import { Link } from 'react-router-dom';

class MyReads extends Component {
  render() {
    const shelves = [
      { shelf: 'Currently Reading', books: this.props.books.filter(book => book.currentShelf === 'Currently Reading') },
      { shelf: 'Want to Read', books: this.props.books.filter(book => book.currentShelf === 'Want to Read') },
      { shelf: 'Read', books: this.props.books.filter(book => book.currentShelf === 'Read') },
    ]
    return (
      <div className='list-books'>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            {shelves.map(shelf => <Shelf
              books={shelf.books}
              handleBookActions={this.props.handleBookActions}
              key={shelf.shelf}>
              {shelf.shelf}
            </Shelf>)}
          </div>
        </div>
        <Link to='/search'>
          <div className="open-search">
            <button>Add a book</button>
          </div>
        </Link>
      </div>
    );
  }

}

export default MyReads;