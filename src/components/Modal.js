import m from 'mithril'
import { animateSidebarEntrance,slideModalOut } from '../assets/index.js'

const Modal = {
  oncreate: animateSidebarEntrance,
  onbeforeremove:slideModalOut,
  view: ({ children }) => m('.navigationModal', children),
}

export default Modal
