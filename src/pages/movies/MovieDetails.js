import { Lightning, Router, Utils } from '@lightningjs/sdk'

export class MovieDetails extends Lightning.Component {
  pageTransition() {
    return 'left'
  }

  _handleEnter() {
    Router.navigate('movies')
  }

  _onUrlParams(args) {
    this._movieId = args.movieId
    console.log('got an id:', this._movieId)
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
        alpha: 0.925,
      },

      Content: {
        w: 1840,
        x: 40,
        flex: {
          direction: 'column',
          padding: 40,
        },

        Title: {
          flexItem: { marginBottom: 40 },
          text: {
            text: 'Uzumaki Naruto',
            fontFace: 'Bold',
            fontSize: 72,
          },
        },

        Poster: {
          w: 800,
          h: 500,
          src: Utils.asset('images/naruto.jpeg'),
          shader: { type: Lightning.shaders.RoundedRectangle, radius: 20 },
          flexItem: { marginBottom: 40 },
        },

        Description: {
          text: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum sit nulla aspernatur, minus assumenda blanditiis praesentium! Ad, reiciendis quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum sit nulla aspernatur, minus assumenda blanditiis praesentium! Ad, reiciendis quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum sit nulla aspernatur, minus assumenda blanditiis praesentium! Ad, reiciendis quasi.',
            fontSize: 36,
            lineHeight: 56,
            fontFace: 'Regular',
            wordWrapWidth: 1840,
          },
        },
      },
    }
  }
}
