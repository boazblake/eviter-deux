import m from 'mithril'
import { Group } from './Group/component.js'
import Modal from '../components/Modal.js'
import { BtnClose } from '../components/Btns.js'
import { Editor } from '../Editor/component.js'
import { findGroups } from './model.js'

const findGroupsError = (model) => (errors) => model.state.errors(errors)

const findGroupsSuccess = (model) => (groups) => model.groups(groups)

export const Groups = {
  oninit: ({ attrs: { model } }) => {
    model.state.reload = () =>
      findGroups(model)(model.user.objectId).fork(
        findGroupsError(model),
        findGroupsSuccess(model)
      )
  },
  oncreate: ({ attrs: { model } }) => model.state.reload(),
  view: ({ attrs: { model } }) => [
    m(
      '.groups',
      model.groups()
        ? model.groups().map((g, id) =>
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

    //=========================MODAL=============================================
    model.getState('groups-modal')
      ? m(
        Modal,
        m('.modal-content', [
          m(Editor, {
            model,
            page: 'group',
            reload: model.state.reload,
          }),
          m(BtnClose, {
            action: () => {
              model.state.group.id('')
              model.state.modal({})
              model.toggleState('groups-modal')
            },
            label: 'Close',
          }),
        ])
      )
      : '',
  ],
}
