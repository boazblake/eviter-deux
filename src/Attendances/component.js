import m from 'mithril'

import { findAllAttendances } from '../requests.js'

import { Attendance } from './Attendance/component.js'

const onLoadS = (model) => ({ allAttendances }) =>
  (model.user.attendances = allAttendances)

const onLoadE = (model) => (err) => {
  model.err = err
  console.log('fail', model)
}

export const Attendances = {
  oninit: ({ attrs: { model } }) => {
    console.log('attendances on init', model)
    findAllAttendances(model).then(onLoadS(model), onLoadE(model))
  },
  view: ({ attrs: { model } }) =>
    m(
      '.attendaces',
      model.user.attendances.map(({ id }) =>
        m(Attendance, { model, key: id }, `id: ${id}`)
      )
    ),
}
