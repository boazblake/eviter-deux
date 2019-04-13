import m from 'mithril'

import { getAttendance, updateAttendanceWithResponse } from '../../requests.js'

const updateAttendanceResponse = (model) => (state) => (key) => (rsvp) =>
  updateAttendanceWithResponse(model)(key)(rsvp).then(
    onLoadS(state),
    onLoadE(state)
  )

import { format } from 'date-fns'

const rsvps = ['Yes', 'No', 'Maybe']

const onLoadS = (state) => ({
  Attendance: {
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
  state.attendance = {
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

export const Attendance = {
  oninit: ({ attrs: { key, model }, state }) =>
    getAttendance(model)(key).then(onLoadS(state), onLoadE(state)),
  view: ({ attrs: { key, model }, state }) => {
    return state.attendance
      ? m('.attendance', [
        m('p.title', state.attendance.title),
        m('p.email', state.attendance.email),
        m('p.date', state.attendance.date),
        m(
          '.rsvps',
          rsvps.map((rsvp) =>
            m(
              `button.button${
                state.attendance.response == rsvp ? '.isSelected' : ''
              }`,
              {
                onclick: () => {
                  state.attendance.response = rsvp
                  updateAttendanceResponse(model)(state)(key)(rsvp)
                },
              },
              rsvp
            )
          )
        ),
        m('p.partySize', state.attendance.partySize),
      ])
      : ''
  },
}
