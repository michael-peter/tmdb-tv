import { Lightning } from '@lightningjs/sdk'

export class Button extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      color: 0xffffffff,
      flex: {
        padding: 32,
        paddingLeft: 64,
        paddingRight: 64,
        alignContent: 'center',
      },
      shader: { type: Lightning.shaders.RoundedRectangle, radius: 16 },

      Text: {
        text: {
          text: this.bindProp('label'),
          fontSize: 56,
          fontFace: 'Bold',
          textColor: 0x0ff000000,
        },
      },
    }
  }
}
