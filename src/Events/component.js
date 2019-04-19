import m from 'mithril'
import Modal from '../components/Modal.js'
import { BtnClose } from '../components/Btns.js'
import { Editor } from '../Editor/component.js'
import { findEvents } from './model.js'

import { Event } from './Event/component.js'

const findEventsError = (model) => (errors) => model.state.errors(errors)

const findEventsSuccess = (model) => ({ events }) => model.events(events)

export const Events = {
  oninit: ({ attrs: { model } }) => {
    model.state.reload = () =>
      findEvents(model)(model.state.group.id())(model.user.objectId).fork(
        findEventsError(model),
        findEventsSuccess(model)
      )
  },
  oncreate: ({ attrs: { model } }) => model.state.reload(),
  view: ({ attrs: { model } }) => [
    m(
      '.events',
      model.events()
        ? model.events().map((i, id) =>
          m(
            Event,
            {
              reload: model.state.reload,
              model,
              i,
              key: id,
            },
            `id: ${id}`
          )
        )
        : 'No Events Yet'
    ),
    model.getState('events-modal')
      ? m(
        Modal,
        m('.modal-content', [
          m(Editor, {
            model,
            page: 'event',
            id: model.state.event.id(),
            reload: model.state.reload,
          }),
          m(BtnClose, {
            action: () => {
              model.state.event.id('')
              model.toggleState('events-modal')
            },
            label: 'Close',
          }),
        ])
      )
      : '',
  ],
}
