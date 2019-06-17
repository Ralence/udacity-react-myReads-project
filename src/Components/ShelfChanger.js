import React from 'react';

const shelfChanger = (props) => {
  console.log(props)
  return (
    <div className="book-shelf-changer">
      <select value={props.book.currentShelf} onChange={(e) => props.handleBookActions(e.target.value, props.book)}>
        <option value="move" disabled>Move to...</option>
        <option value="Currently Reading">Currently Reading</option>
        <option value="Want to Read">Want to Read</option>
        <option value="Read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default shelfChanger;