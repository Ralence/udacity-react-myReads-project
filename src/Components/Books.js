import React from 'react';

const books = (props) => {
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {props.children}
            </ol>
        </div>
    )
}

export default books;