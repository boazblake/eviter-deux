import m from 'mithril'

import { getGroup } from '../../requests.js'
import { makeRoute } from '../../utils/index.js'

const oninitError = (state) => (errors) => (state.errors = errors)

const oninitSuccess = (model) => (state) => ({ Group }) => {
  state.group = Group
  model.state.group = Group
  return state
}

export const Group = {
  oninit: ({ attrs: { model, key }, state }) => {
    state.group = {}
    getGroup(model)(key).fork(oninitError(state), oninitSuccess(model)(state))
  },
  view: ({ attrs: { model }, state }) => {
    if (state.group.id) {
      return m(
        '.group',
        {
          onclick: () => {
            return m.route.set(
              `/${model.user.username}/${makeRoute(
                model.state.group.name
              )}/events`
            )
          },
        },
        [
          m('p.title', state.group.name),
          m('p.groupSize', state.group.members.length),
        ]
      )
    }
  },
}
