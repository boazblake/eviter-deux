import m from 'mithril'
import Hamburger from './Hamburger.js'
import { animate } from '../assets/index.js'

// const ChangeLimits = {
//   view: ({ attrs: { model } }) =>
//     m('.changeLimits', [
//       m(
//         'button.changeLimitBtn',
//         {
//           onclick: () => model.toggleLimits(model),
//         },
//         'Change Limit'
//       ),
//       model.state.showLimits && m(Selector, { model }),
//     ]),
// }

const Header = {
  oncreate: animate('slideDown'),
  view: ({ attrs: { model } }) =>
    m(
      'header.header',
      {
        id: 'header',
      },
      [m(Hamburger, { model })]
    ),
}

export default Header
