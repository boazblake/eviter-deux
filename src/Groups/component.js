import m from 'mithril'

import { Group } from './Group/component.js'

import { findAllGroups } from '../requests.js'

const getGroups = (model) => findAllGroups(model)

const onInitError = (state) => (errors) => (state.errors = errors)
const onInitSuccess = (state) => ({ allGroups }) => (state.groups = allGroups)

export const Groups = {
  oninit: ({ attrs: { model }, state }) => {
    state.groups = []
    return getGroups(model).fork(onInitError(state), onInitSuccess(state))
  },
  view: ({ attrs: { model }, state }) =>
    m(
      '.groups',
      state.groups.map(({ id }) => m(Group, { model, key: id }, `id: ${id}`))
    ),
}
