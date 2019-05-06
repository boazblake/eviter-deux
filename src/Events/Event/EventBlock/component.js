import m from 'mithril'
import {
  slideComponentDown,
  slideComponentUp,
} from '../../../assets/animations.js'

export const EventBlock = {
  oninit: (v) => console.log(v),
  oncreate: ({ dom }) => slideComponentDown(1)({ dom }),
  onbeforeremove: ({ dom }) => slideComponentUp(1)({ dom }),
  view: ({ attrs: { e } }) => m('', e.title),
}
