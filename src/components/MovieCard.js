import { Lightning, Router } from '@lightningjs/sdk'

export class MovieCard extends Lightning.Component {
  _handleEnter() {
    Router.navigate(`movies/${this.movieId}`)
  }

  static _template() {
    return {
      rect: true,
      w: 350,
      h: 400,
      // eslint-disable-next-line prettier/prettier
      src: this.bindProp('imageUrl'),
      shader: { type: Lightning.shaders.RoundedRectangle, radius: 20 },
      flexItem: { marginBottom: 32 },

      Overlay: {
        rect: true,
        w: 350,
        h: 400,
        colorTop: 0xff000000,
        colorBottom: 0x00000000,
        shader: { type: Lightning.shaders.RoundedRectangle, radius: 20 },
      },

      Wrapper: {
        flex: { padding: 24, direction: 'column' },

        Title: {
          text: {
            text: this.bindProp('title'),
            fontFace: 'Bold',
            fontSize: 32,
            wordWrapWidth: 302,
            lineHeight: 40,
            textColor: 0xff919191,
          },
        },

        Overview: {
          alpha: 0,
          text: {
            text: this.bindProp('overview'),
            fontFace: 'Regular',
            fontSize: 24,
            wordWrapWidth: 302,
            lineHeight: 30,
            maxLines: 7,
          },
        },
      },
    }
  }

  _setup() {
    this._rootAnimation = this.animation({
      duration: 0.25,
      repeat: 0,
      stopMethod: 'reverse',
      actions: [
        { p: 'w', v: { 0: 350, 1: 700 } },
        { p: 'scale', v: { 0: 1, 1: 1.075 } },
      ],
    })

    this._overlayAnimation = this.tag('Overlay').animation({
      duration: 0,
      repeat: 0,
      stopMethod: 'reverse',
      actions: [
        { p: 'w', v: { 0: 350, 1: 700 } },
        { p: 'alpha', v: { 0: 1, 1: 0.9 } },
        { p: 'colorBottom', v: { 0: 0x000000, 1: 0xff000000 } },
        { p: 'scale', v: { 0: 1, 1: 1.075 } },
      ],
    })

    this._titleAnimation = this.tag('Wrapper')
      .tag('Title')
      .animation({
        duration: 0.25,
        repeat: 0,
        stopMethod: 'reverse',
        actions: [
          { p: 'text.textColor', v: { 0: 0xff919191, 1: 0xffffffff } },
          { p: 'text.wordWrapWidth', v: { 0: 302, 1: 652 } },
          { p: 'text.fontSize', v: { 0: 33, 1: 56 } },
          { p: 'text.lineHeight', v: { 0: 40, 1: 60 } },
        ],
      })

    this._overviewAnimation = this.tag('Wrapper')
      .tag('Overview')
      .animation({
        duration: 0.25,
        repeat: 0,
        stopMethod: 'reverse',
        actions: [
          { p: 'alpha', v: { 0: 0, 1: 1 } },
          { p: 'text.wordWrapWidth', v: { 0: 302, 1: 652 } },
          { p: 'text.fontSize', v: { 0: 24, 1: 34 } },
          { p: 'text.lineHeight', v: { 0: 30, 1: 40 } },
          { p: 'text.maxLines', v: { 0: 7, 1: 5 } },
        ],
      })
  }

  _focus() {
    this._overlayAnimation.start()
    this._rootAnimation.start()
    this._titleAnimation.start()
    this._overviewAnimation.start()
    this.zIndex = 999
  }

  _unfocus() {
    this._rootAnimation.stop()
    // this._overlayAnimation.stop()
    this._titleAnimation.stop()
    this._overviewAnimation.stop()
  }
}
