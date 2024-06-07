import React from 'react'
import './BookCard.css'
const BookCard = ({ book, show }) => {
  let flag = true
  const addToBookshelf = () => {
    const existingBookshelf =
      JSON.parse(localStorage.getItem('bookshelf')) || []
    const isBookInBookshelf = existingBookshelf.some(
      (b) => b.title === book.title
    )
    if (!isBookInBookshelf) {
      const updatedBookshelf = [...existingBookshelf, book]
      localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf))
    } else {
      flag = false
    }
  }

  return (
    <div className='card'>
      <div className='heading'>
        <span className='title'>Book Title:</span>
        <span className='data'>
          {book.title || book.title_sort || book.title_suggest}
        </span>
      </div>
      <div className='edition'>
        <span className='title'>Edition Count:</span>
        <span className='data'>{book.edition_count}</span>
      </div>
      {show && (
        <button className='card-button' onClick={addToBookshelf}>
          Add to Bookshelf
        </button>
      )}
    </div>
  )
}

export default BookCard
