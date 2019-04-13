import m from 'mithril'

import { getAttendance } from '../../requests.js'

const onLoadS = (state) => (attendance) => {
  console.log(state)
  console.log(attendance)
  return (state.attendance = attendance)
}

const onLoadE = (model) => (err) => {
  model.err = err
  console.log('fail', model)
}

export const Attendance = {
  oninit: ({ attrs: { key, model }, state }) => {
    getAttendance(model)(key).then(onLoadS(state), onLoadE(state))
  },
  view: ({ attrs: { key }, state }) =>
    m('.attendance', key, JSON.stringify(state)),
}
