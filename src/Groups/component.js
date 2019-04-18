import m from 'mithril'
import { Group } from './Group/component.js'
import Modal from '../components/Modal.js'
import { BtnClose } from '../components/Btns.js'
import { Editor } from '../Editor/component.js'
import { findGroups } from './model.js'

const toggleModal = (state) => {
  state.showModal = !state.showModal
}
const onInitError = (state) => (errors) => (state.errors = errors)

const onInitSuccess = (state) => (groups) => {
  state.groups = groups
}

export const Groups = {
  showModal: false,
  oninit: ({ dom, state, attrs: { model } }) => {
    model.emitter.on('toggle-group', () => toggleModal(state), dom)
    model.emitter.on(
      'fetch-groups',
      () =>
        findGroups(model.user.objectId).fork(
          onInitError(state),
          onInitSuccess(state)
        ),
      dom
    )
  },
  oncreate: ({ attrs: { model } }) => model.emitter.emit('fetch-groups'),
  view: ({ attrs: { model }, state }) => [
    m(
      '.groups',
      state.groups
        ? state.groups.map((g, id) =>
          m(Group, { model, g, key: id }, `id: ${id}`)
        )
        : 'add a group'
    ),
    state.showModal
      ? m(
        Modal,
        m('.modal-content', [
          m(Editor, { model, page: 'group' }),
          m(BtnClose, {
            action: () => model.emitter.emit('toggle-group'),
            label: 'Close',
          }),
        ])
      )
      : '',
  ],
  onremove: ({ dom, attrs: { model } }) =>
    model.emitter.removeListener('toggle-group', toggleModal, dom),
}
