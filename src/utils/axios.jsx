import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://openlibrary.org',
})

export default instance
