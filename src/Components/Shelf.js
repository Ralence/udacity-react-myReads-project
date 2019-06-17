import React from 'react';
import Books from './Books';
import Book from './Book';

const shelv = (props) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{props.children}</h2>
			<Books>
				{props.books.length > 0 ? props.books.map(book => <Book book={book} handleBookActions={props.handleBookActions} key={book.title} />) : <p>This shelf is currently empty.</p>}
			</Books>
		</div>
	)
}

export default shelv;