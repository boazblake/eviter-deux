import m from 'mithril'
import Task from 'data.task'
import { traverse } from 'ramda'
import { Group } from './Group/component.js'
import Modal from '../components/Modal.js'
import { BtnClose } from '../components/Btns.js'
import { Editor } from '../Editor/component.js'
import http from '../http.js'

const toggleModal = (state) => {
  state.showModal = !state.showModal
}

const getGroups = ({
  state: {
    user: { groups },
  },
}) => {
  groups.map((g) => traverse(Task.of, http.getTask(`/data/Groups/${g}`)))
}

const onInitError = (state) => (errors) => (state.errors = errors)
const onInitSuccess = (state) => ({ allGroups }) => (state.groups = allGroups)

export const Groups = {
  oncreate: ({ dom, state, attrs: { model } }) => {
    state.showModal = false
    model.emitter.on('add-group', () => toggleModal(state), dom)
  },
  oninit: ({ attrs: { model }, state }) => {
    model.user.groups
      ? getGroups(model).fork(onInitError(state), onInitSuccess(state))
      : ''
  },
  view: ({ attrs: { model }, state }) => [
    m(
      '.groups',
      state.groups
        ? state.groups.map(({ id }) =>
          m(Group, { model, key: id }, `id: ${id}`)
        )
        : 'add a group'
    ),
    state.showModal
      ? m(
        Modal,
        m('.modal-content', [
          m(Editor, { model, page: 'group' }),
          m(BtnClose, {
            action: () => model.emitter.emit('add-group'),
            label: 'Close',
          }),
        ])
      )
      : '',
  ],
  onremove: ({ dom, attrs: { model } }) =>
    model.emitter.removeListener('add-group', toggleModal, dom),
}
