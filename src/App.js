import { Router, Utils } from '@lightningjs/sdk'
import routes from './lib/routes'

export default class App extends Router.App {
  static getFonts() {
    return [
      { family: 'Regular', url: Utils.asset('fonts/Poppins-Regular.ttf') },
      { family: 'Bold', url: Utils.asset('fonts/Poppins-Bold.ttf') },
      { family: 'Black', url: Utils.asset('fonts/Poppins-Black.ttf') },
    ]
  }

  _setup() {
    Router.startRouter(routes, this)
  }

  static _template() {
    return {
      ...super._template(),
    }
  }
}
