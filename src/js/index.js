// polyfill
import '@babel/polyfill'

customElements.whenDefined("mwc-icon-button").then((e) => {
  console.log("!!!!!!")
})

// style
import '../sass/main.scss'

// material web component
import '@webcomponents/webcomponentsjs/webcomponents-loader'

import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'
import '@material/mwc-drawer'
import '@material/mwc-icon'
import '@material/mwc-top-app-bar'
import '@material/mwc-icon-button'

const HELLOOO = 1