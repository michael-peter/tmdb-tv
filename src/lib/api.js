import axios from 'axios'

/*
Please replace `<API_READ_ACCESS_TOKEN>` below with your TMDB token to access the API. Note that using an environment variable will not work as the app is client-side.
*/
export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
    // eslint-disable-next-line no-undef
    Authorization: 'Bearer <API_READ_ACCESS_TOKEN>',
  },
})
