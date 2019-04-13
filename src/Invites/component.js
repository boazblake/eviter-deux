import m from 'mithril'

import { findAllInvites } from '../requests.js'

import { Invite } from './Invite/component.js'

const onLoadSuccess = (state) => ({ allInvitations }) =>
  (state.invites = allInvitations)

const onLoadError = (state) => (err) => {
  state.error = err
  console.log('fail', state)
}

export const Invites = {
  oninit: ({ attrs: { model }, state }) => {
    state.invites = []
    state.errors = {}
    findAllInvites(model).fork(onLoadError(state), onLoadSuccess(state))
  },
  view: ({ attrs: { model }, state }) => {
    console.log('state', state)
    return m(
      '.attendaces',
      state.invites.map(({ id }) => m(Invite, { model, key: id }, `id: ${id}`))
    )
  },
}
