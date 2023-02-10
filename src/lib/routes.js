import { Boot } from '../pages/boot'
import { MovieDetails, Movies } from '../pages/movies'

export default {
  root: '$',
  routes: [
    { path: '$', component: Boot },
    { path: 'movies', component: Movies },
    { path: 'movies/:movieId', component: MovieDetails },
  ],
}
