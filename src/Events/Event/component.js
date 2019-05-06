import m from 'mithril'
import { deleteEvent } from '../model.js'
import { EventBlock } from './EventBlock/component'

const onError = (model) => (errors) => {
  console.warn('errors', errors, model)
}

const onSuccess = (reload) => (res) => {
  console.log('success', res)
  reload()
}

export const Event = {
  view: ({ attrs: { reload, model, e } }) =>
    m('', [
      m('.event', [
        m(
          'button.btn',
          {
            onclick: () => {
              model.state.event.id(e.objectId)
              model.state.event.name(e.title)
              model.toggleEventBlock({
                model,
                event: e.objectId,
                group: model.state.group.id(),
              })
            },
          },
          m('p.title', e.title)
        ),
        m(
          'button.btn',
          {
            onclick: () => {
              model.state.event.id(e.objectId)
              model.state.page('event')
              model.state.modal(e)
              model.toggleState('events-modal')
            },
          },
          m('p.title', 'Edit')
        ),
        m('p.groupSize', e.response),
        m('button.btn-delete', {
          onclick: () =>
            deleteEvent(model)(e.objectId).fork(
              onError(model),
              onSuccess(reload)
            ),
        }),
      ]),
      model.getEventBlock({
        model,
        event: e.objectId,
        group: model.state.group.id(),
      }) && m('.component', m(EventBlock, { model, e })),
    ]),
}
