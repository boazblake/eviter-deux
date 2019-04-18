import m from 'mithril'

import { makeRoute } from '../../utils/index.js'

export const Group = {
  view: ({
    attrs: {
      model,
      g: { name, members },
    },
  }) => {
    return m(
      '.group',
      {
        onclick: () => {
          console.log(`/${model.user.name}/${makeRoute(name)}/events`)
          m.route.set(`/${model.user.name}/${makeRoute(name)}/events`)
        },
      },
      [m('p.title', name), m('p.groupSize', members.length)]
    )
  },
}
