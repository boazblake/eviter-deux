import m from 'mithril'
import { animate, animateChildrenLimitsEntrance } from '../assets/index.js'


const Footer = {
  oncreate: animate('slideUp'),
  view: () => m('footer.footer', {
    oncreate:animateChildrenLimitsEntrance, id: 'footer',
  },
  'by Boaz Blake',
  ),
}

export default Footer
