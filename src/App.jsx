import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BookSearch from './components/BookSearch'
import MyBookshelf from './components/MyBookshelf'

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<BookSearch />} />
          <Route path='/myBookShelf' element={<MyBookshelf />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
