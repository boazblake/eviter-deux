import m from 'mithril'
import { animateSidebarEntrance } from '../assets/index.js'

const Tab = ({ attrs: { key } }) => {
  return {
    oncreate: animateSidebarEntrance,
    view: ({ attrs: { tab } }) =>
      m(
        'a.tab',
        {
          key,
          id: `${tab}`,
          href: `${tab}`,
          oncreate: m.route.link,
        },
        tab
      ),
  }
}

const Sidebar = ({ attrs: { model } }) => {
  let tabs = model.pages

  return {
    oncreate: animateSidebarEntrance,
    view: ({ attrs: { model } }) =>
      m(
        'aside.sidebar slide-left',
        {
          id: 'sidebar',
        },
        tabs.map((tab, idx) =>
          m(Tab, {
            key: idx,
            active: model.state.route() == tab,
            tab,
          })
        )
      ),
  }
}

export default Sidebar
