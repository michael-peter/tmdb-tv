import { Lightning, Utils } from '@lightningjs/sdk'

export class Boot extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xff00b87c,

      Title: {
        x: 960,
        y: 80,
        mount: 0.5,
        text: {
          text: 'Welcome to The MovieDB',
          fontSize: 72,
          fontFace: 'Black',
        },
      },

      Logo: {
        x: 960,
        y: 540,
        mount: 0.5,
        src: Utils.asset('images/logo.png'),
      },

      Label: {
        x: 960,
        y: 1040,
        mount: 0.5,
        text: {
          text: '[Press any key to continue]',
          fontSize: 36,
          fontFace: 'Bold',
        },
      },
    }
  }
}
