import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BookCard from './BookCard'
import './MyBookshelf.css'
function MyBookshelf() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || []
    setBooks(storedBooks)
  }, [])

  return (
    <div className='container'>
      <div className='nav-container'>
        <div className='heading'>
          <h1 className='my-heading'>My Bookshelf</h1>
        </div>
        <div className='button'>
          <Link className='button-link' to='/'>
            Back to Search
          </Link>
        </div>
      </div>

      <div className='cards'>
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  )
}
export default MyBookshelf
