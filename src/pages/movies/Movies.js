import { Lightning, Utils } from '@lightningjs/sdk'
import { MovieCard } from '../../components/MovieCard'
import { api } from '../../lib/api'
import { TMDB_IMAGE_URL } from '../../lib/constants'

export class Movies extends Lightning.Component {
  pageTransition() {
    return 'right'
  }

  async _init() {
    this.index = 0
    this.moviesCount = 20
    const { data } = await api.get('/movie/popular')
    this.tag('Container').children = data.results.map((movie) => {
      const imageUrl = TMDB_IMAGE_URL + movie.poster_path
      return {
        imageUrl,
        movieId: movie.id,
        title: movie.title,
        overview: movie.overview,
        type: MovieCard,
      }
    })
  }

  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      src: Utils.asset('images/background.jpg'),

      Overlay: {
        rect: true,
        w: 1920,
        h: 1080,
        color: 0xff000000,
        alpha: 0.95,
      },

      Title: {
        x: 960,
        y: 80,
        mount: 0.5,
        text: {
          fontFace: 'Bold',
          text: 'Movies:',
        },
      },

      Container: {
        w: 1856,
        y: 160,
        flex: {
          direction: 'row',
          padding: 32,
          wrap: true,
          justifyContent: 'space-between',
        },
      },
    }
  }

  static _states() {
    return [
      class Container extends this {
        _handleUp() {
          if (this.index - 4 > 1) {
            this.index = (this.index % 4) - 1
          } else {
            this.index = 0
          }
        }

        _handleDown() {
          if (this.index + 4 > this.moviesCount - 1) {
            this.index = this.moviesCount - 1
          } else {
            this.index -= 5
          }
        }

        _handleRight() {
          if (this.index + 1 > this.moviesCount - 1) {
            this.index = 0
          } else {
            this.index += 1
          }
        }

        _handleLeft() {
          if (this.index - 1 < 0) {
            this.index = 0
          } else {
            this.index -= 1
          }
          this.repositionContainer
        }

        _getFocused() {
          return this.tag('Container').children[this.index]
        }
      },
    ]
  }

  _handleEnter() {
    this._setState('Container')
  }
}
