import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjEzYTBmNWZjOGIzYTQ1NTQzMzU0MjQ1MjIyYzAxZCIsInN1YiI6IjYzZTUxODk5MGU1OTdiMDA3Y2EwOGEwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QMi-7Na0zYFk7g8FHkltuaCFIZHMw1QD-101lmrDu_E',
  },
})
