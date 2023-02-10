import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
    // eslint-disable-next-line no-undef
    Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
  },
})
