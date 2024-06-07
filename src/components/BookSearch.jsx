import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import BookCard from '../components/BookCard'
import { Link } from 'react-router-dom'
import './BookSearch.css'
function BookSearch() {
  const [searches, setSearches] = useState(null)
  const [query, setQuery] = useState('')

  const getSearches = async () => {
    try {
      const { data } = await axios.get(
        `/search.json?q=${query}&limit=10&page=1`
      )
      setSearches(data.docs)
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  useEffect(() => {
    getSearches()
  }, [query])

  return (
    <div className='container'>
      <div className='nav'>
        <div className='nav-search'>
          <h1 className='nav-heading'>Search by book name:</h1>
          <div className='nav-search-container'>
            <i className='search ri-search-line'></i>
            <input
              className='nav-search-input'
              type='text'
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            {query.length > 0 && (
              <i
                onClick={() => setQuery('')}
                className='close ri-close-line'
              ></i>
            )}
          </div>
        </div>
        <div className='nav-button'>
          <Link className='nav-button-link' to='myBookShelf'>
            My Bookshelf
          </Link>
        </div>
      </div>

      <div className='main'>
        {searches && searches.length > 0 ? (
          <div className='cards'>
            {searches.map((book, i) => (
              <BookCard key={i} book={book} show={true} />
            ))}
          </div>
        ) : (
          <p className='no-card'>No search results found.</p>
        )}
      </div>
    </div>
  )
}

export default BookSearch
