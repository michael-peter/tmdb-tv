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
        y: 40,
        mount: 0.5,
        text: {
          text: 'Welcome to The MovieDB',
          fontSize: 72,
          fontWeight: 700,
        },
      },

      Logo: {
        x: 960,
        y: 540,
        mountX: 0.5,
        src: Utils.asset('images/logo.png'),
      },

      Label: {
        x: 960,
        y: 1040,
        mount: 0.5,
        text: {
          text: '[Press any key to continue]',
          fontSize: 36,
          fontWeight: 500,
        },
      },
    }
  }
}
