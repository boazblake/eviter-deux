import m from 'mithril'

import { findAllInvites } from '../requests.js'

import { Invite } from './Invite/component.js'

const onLoadS = (model) => ({ allInvites }) => (model.user.invites = allInvites)

const onLoadE = (model) => (err) => {
  model.err = err
  console.log('fail', model)
}

export const Invites = {
  oninit: ({ attrs: { model } }) =>
    findAllInvites(model).fork(onLoadE(model), onLoadS(model)),
  view: ({ attrs: { model } }) =>
    m(
      '.attendaces',
      model.user.invites.map(({ id }) =>
        m(Invite, { model, key: id }, `id: ${id}`)
      )
    ),
}
