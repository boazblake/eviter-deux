import m from 'mithril'

import { makeRoute } from '../../utils/index.js'
import http from '../../http.js'

const deleteGroup = (id) => http.deleteTask('data/groups')(id)

const onError = (model) => (errors) => {
  console.warn('errors', errors, model)
}

const onSuccess = (model) => (res) => {
  console.log('success', res)
  model.emitter.emit('fetch-groups')
}

export const Group = {
  view: ({
    attrs: {
      model,
      g: { objectId, name, members },
    },
  }) => {
    return m('.group', [
      m(
        'button.btn',
        {
          onclick: () =>
            m.route.set(`/${model.user.name}/${makeRoute(name)}/events`),
        },
        m('p.title', name)
      ),
      m(
        'button.btn',
        {
          onclick: () => {
            model.state.group.id = objectId
            model.state.group.name = name
            model.emitter.emit('toggle-group')
          },
        },
        m('p.title', 'Edit')
      ),
      m('p.groupSize', members.length),
      m(
        'button.btn-delete',
        {
          onclick: () => {
            deleteGroup(objectId).fork(onError(model), onSuccess(model))
          },
        },
        m('p.title', 'X')
      ),
    ])
  },
}
