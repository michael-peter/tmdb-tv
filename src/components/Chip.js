import { Lightning } from '@lightningjs/sdk'

export class Chip extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      color: 0xff000000,
      shader: { type: Lightning.shaders.RoundedRectangle, radius: 16 },
      flex: {
        padding: 16,
        alignContent: 'center',
      },

      Icon: {
        rect: true,
        w: 50,
        h: 50,
        src: this.bindProp('icon'),
        flexItem: { marginRight: 16 },
      },

      Label: {
        text: this.bindProp('label'),
        fontFace: 'Regular',
        fontSize: 40,
        wordWrapWidth: 50,
      },
    }
  }
}
