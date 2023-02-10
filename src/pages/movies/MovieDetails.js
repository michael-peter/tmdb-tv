/* eslint-disable prettier/prettier */
import { Lightning, Router, Utils } from '@lightningjs/sdk'
import { Button } from '../../components/Button'
import { Chip } from '../../components/Chip'

export class MovieDetails extends Lightning.Component {
  pageTransition() {
    return 'left'
  }

  _handleBack() {
    Router.navigate('movies')
  }

  set params(args) {
    this.tag('Main').tag('Title').text.text = args.title
    this.tag('Main').tag('Content').tag('Poster').src = args.imageUrl
    this.tag('Main').tag('Content').tag('Details').tag('Overview').text.text =
      args.overview
    this.tag('Main')
      .tag('Content')
      .tag('Details')
      .tag('Metrics')
      .tag('Votes').label = args.averageVote
    this.tag('Main')
      .tag('Content')
      .tag('Details')
      .tag('Metrics')
      .tag('Popularity').label = args.popularity
    this.tag('Main')
      .tag('Content')
      .tag('Details')
      .tag('Metrics')
      .tag('Date').label = args.releaseDate
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

      Main: {
        w: 1840,
        flex: {
          direction: 'column',
          padding: 40,
        },

        Title: {
          flexItem: { marginBottom: 40 },
          text: {
            text: '',
            fontFace: 'Bold',
            fontSize: 72,
          },
        },

        Content: {
          w: 1840,
          flex: {},

          Poster: {
            w: 800,
            h: 848,
            shader: { type: Lightning.shaders.RoundedRectangle, radius: 20 },
            flexItem: { marginRight: 40 },
          },

          Details: {
            flex: { direction: 'column' },

            Overview: {
              w: 1000,
              text: {
                text: '',
                fontSize: 36,
                lineHeight: 56,
                fontFace: 'Regular',
                wordWrapWidth: 1000,
              },
            },

            Metrics: {
              w: 1000,
              flex: {},

              Votes: {
                type: Chip,
                flexItem: { marginRight: 16 },
                icon: Utils.asset('icons/stars.png'),
                label: '',
              },
              Popularity: {
                type: Chip,
                flexItem: { marginRight: 16 },
                icon: Utils.asset('icons/chart.png'),
                label: '',
              },
              Date: {
                type: Chip,
                flexItem: { marginRight: 16 },
                icon: Utils.asset('icons/date.png'),
                label: '',
              },
            },

            ButtonWrapper: {
              flexItem: { marginTop: 40 },

              Button: {
                type: Button,
                label: 'Watch Now',
              },
            },
          },
        },
      },
    }
  }
}
