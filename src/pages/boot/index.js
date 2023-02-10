import { Lightning, Router, Utils } from '@lightningjs/sdk'

export class Boot extends Lightning.Component {
  _handleEnter() {
    Router.navigate('movies')
  }

  pageTransition() {
    return 'crossFade'
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

      Title: {
        x: 960,
        y: 540,
        mount: 0.5,
        text: {
          text: 'Welcome to The MovieDB',
          fontSize: 100,
          fontFace: 'Black',
        },
      },

      Label: {
        x: 960,
        y: 640,
        mount: 0.5,
        text: {
          text: '[Press Enter to continue]',
          fontSize: 36,
          fontFace: 'Bold',
        },
      },
    }
  }
}
