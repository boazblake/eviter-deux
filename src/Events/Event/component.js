import m from 'mithril'
import Modal from '../../components/Modal.js'
import { BtnClose } from '../../components/Btns.js'
import { Editor } from '../../Editor/component.js'
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
  view: ({ attrs: { reload, model, e } }) => {
    return m('.event', [
      m(
        'button.btn',
        {
          onclick: () =>
            m.route.set(
              `/${makeRoute(model.user.name)}/${makeRoute(name)}/events`
            ),
        },
        m('p.title', e.title)
      ),
      m(
        'button.btn',
        {
          onclick: () => {
            model.state.event.id(e.objectId)
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

      //=========================MODAL=============================================
      model.getState('events-modal')
        ? m(
          Modal,
          m('.modal-content', [
            m(Editor, {
              model,
              page: 'event',
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
    ])
  },
}
