import { Drawer } from '@material/mwc-drawer'
import './drawer.scss'

addEventListener('load', () => {
  const drawer = document.querySelector('mwc-drawer') as Drawer
  const container = drawer.parentNode

  container.addEventListener('MDCTopAppBar:nav', (_) => {
    drawer.open = !drawer.open
  })
})
