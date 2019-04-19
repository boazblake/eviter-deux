import m from 'mithril'

import { makeRoute } from '../../utils/index.js'
import { deleteGroup } from '../model.js'

const onError = (model) => (errors) => {
  console.warn('errors', errors, model)
}

const onSuccess = (reload) => (res) => {
  console.log('success', res)
  reload()
}

export const Group = {
  view: ({
    attrs: {
      reload,
      model,
      g: { objectId, name, members },
    },
  }) => {
    return m('.group', [
      m(
        'button.btn',
        {
          onclick: () => {
            model.state.group.id(objectId)
            model.state.group.name(name)
            m.route.set(
              `/${makeRoute(model.user.name)}/${makeRoute(name)}/events`
            )
          },
        },
        m('p.title', name)
      ),
      m(
        'button.btn',
        {
          onclick: () => {
            model.state.group.id(objectId)
            model.state.group.name(name)
            model.toggleState('groups-modal')
          },
        },
        m('p.title', 'Edit')
      ),
      m('p.groupSize', members.length),
      m('button.btn-delete', {
        onclick: () =>
          deleteGroup(model)(objectId).fork(onError(model), onSuccess(reload)),
      }),
    ])
  },
}
