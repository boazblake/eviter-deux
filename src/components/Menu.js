import m from 'mithril'
import { animateSidebarEntrance, slideMenuOut } from '../assets/index.js'

const Menu = {
  oncreate: animateSidebarEntrance,
  onbeforeremove: slideMenuOut,
  view: ({ children }) => m('.navigationMenu', children),
}

export default Menu
