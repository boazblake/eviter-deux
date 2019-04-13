import m from 'mithril'

import { getInvite, updateInviteWithResponse } from '../../requests.js'

const updateInviteResponse = (model) => (state) => (key) => (rsvp) =>
  updateInviteWithResponse(model)(key)(rsvp).fork(
    onLoadE(state),
    onLoadS(state)
  )

import { format } from 'date-fns'

const rsvps = ['Yes', 'No', 'Maybe']

const onLoadS = (state) => ({
  Invite: {
    response,
    partySize,
    event: {
      id,
      title,
      date,
      hostedBy: { email },
    },
  },
}) => {
  state.invite = {
    response,
    partySize,
    title,
    date: format(date, 'MM-DD-YYYY'),
    email,
    eventId: id,
  }
  return state
}

const onLoadE = (state) => (err) => {
  state.err = err
  console.log('fail', state)
}

export const Invite = {
  oninit: ({ attrs: { key, model }, state }) =>
    getInvite(model)(key).fork(onLoadE(state), onLoadS(state)),
  view: ({ attrs: { key, model }, state }) => {
    return state.invite
      ? m('.invite', [
        m('p.title', state.invite.title),
        m('p.email', state.invite.email),
        m('p.date', state.invite.date),
        m(
          '.rsvps',
          rsvps.map((rsvp) =>
            m(
              `button.button${
                state.invite.response == rsvp ? '.isSelected' : ''
              }`,
              {
                onclick: () => {
                  state.invite.response = rsvp
                  updateInviteResponse(model)(state)(key)(rsvp)
                },
              },
              rsvp
            )
          )
        ),
        m('p.partySize', state.invite.partySize),
      ])
      : ''
  },
}
