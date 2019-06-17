import React from 'react';
import ShelfChanger from './ShelfChanger';

const bookTop = (props) => {

    return (
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${props.book.imageURL})` }}></div>
            <ShelfChanger book={props.book} handleBookActions={props.handleBookActions} />
        </div>
    )

}

export default bookTop;