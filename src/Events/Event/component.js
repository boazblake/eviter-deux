import m from 'mithril'

import { makeRoute } from '../../utils/index.js'
import { deleteEvent } from '../model.js'

const onError = (model) => (errors) => {
  console.warn('errors', errors, model)
}

const onSuccess = (reload) => (res) => {
  console.log('success', res)
  reload()
}

export const Event = {
  view: ({
    attrs: {
      reload,
      model,
      i: { objectId, name, response },
    },
  }) => {
    return m('.event', [
      m(
        'button.btn',
        {
          onclick: () =>
            m.route.set(
              `/${makeRoute(model.user.name)}/${makeRoute(name)}/events`
            ),
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
      m('p.groupSize', response),
      m('button.btn-delete', {
        onclick: () =>
          deleteEvent(model)(objectId).fork(onError(model), onSuccess(reload)),
      }),
    ])
  },
}
