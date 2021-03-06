import m from 'mithril'

import { makeRoute } from '../../utils/index.js'
import { deleteGroup } from '../model.js'

const onError = (model) => (errors) => {
  console.warn('errors', errors, model)
}

const onSuccess = (reload) => () => {
  reload()
}

export const Group = {
  view: ({ attrs: { reload, model, g } }) => {
    return m('.group', [
      m(
        'button.btn',
        {
          onclick: () => {
            model.state.group.id(g.objectId)
            model.state.group.name(g.name)
            m.route.set(
              `/${makeRoute(model.user.name)}/${makeRoute(g.name)}/events`
            )
          },
        },
        m('p.title', g.name)
      ),
      m(
        'button.btn',
        {
          onclick: () => {
            model.state.group.id(g.objectId)
            model.state.group.name(g.name)
            model.state.modal(g)
            model.state.page('group')
            model.toggleState('groups-modal')
          },
        },
        m('p.title', 'Edit')
      ),
      m('p.groupSize', g.members.length),
      m('button.btn-delete', {
        onclick: () =>
          deleteGroup(model)(g.objectId).fork(
            onError(model),
            onSuccess(reload)
          ),
      }),
    ])
  },
}
