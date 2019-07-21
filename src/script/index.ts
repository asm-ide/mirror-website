import './dependencies'

import './drawer'

const allView = document.querySelector("#all-view") as HTMLTemplateElement
document.body.appendChild(document.importNode(allView.content, true))

addEventListener('load', () => {
  // style
  require( '../style/main.scss')
})