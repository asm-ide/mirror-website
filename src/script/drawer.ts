import { Drawer } from "@material/mwc-drawer";
const drawerShadowStyle = require( '../style/drawer-shadow.scss?string')
const t = require('../style/test.css?string')

addEventListener('load', () => {
  const drawer = document.querySelector('mwc-drawer') as Drawer
  drawer.shadowRoot.append(`<style rel="stylesheet">${drawerShadowStyle}</style>`)
  const container = drawer.parentNode

  container.addEventListener('MDCTopAppBar:nav', (e) => {
    drawer.open = !drawer.open
  })
})