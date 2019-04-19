import m from 'mithril'
import { Group } from './Group/component.js'
import Modal from '../components/Modal.js'
import { BtnClose } from '../components/Btns.js'
import { Editor } from '../Editor/component.js'
import { findGroups } from './model.js'

const onInitError = (state) => (errors) => (state.errors = errors)

const onInitSuccess = (state) => (groups) => {
  state.groups = groups
}

export const Groups = {
  oninit: ({ state, attrs: { model } }) => {
    model.state.reload = () =>
      findGroups(model)(model.user.objectId).fork(
        onInitError(state),
        onInitSuccess(state)
      )
  },
  oncreate: ({ attrs: { model } }) => model.state.reload(),
  view: ({ attrs: { model }, state }) => [
    m(
      '.groups',
      state.groups
        ? state.groups.map((g, id) =>
          m(
            Group,
            {
              reload: model.state.reload,
              model,
              g,
              key: id,
            },
            `id: ${id}`
          )
        )
        : 'add a group'
    ),
    model.getState('groups-modal')
      ? m(
        Modal,
        m('.modal-content', [
          m(Editor, {
            model,
            page: 'group',
            id: model.state.group.id,
            reload: model.state.reload,
          }),
          m(BtnClose, {
            action: () => {
              model.state.group.id = ''
              model.toggleState('groups-modal')
            },
            label: 'Close',
          }),
        ])
      )
      : '',
  ],
}
