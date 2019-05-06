import m from 'mithril'
import http from '../../http.js'
import { format } from 'date-fns'
import { pluck } from 'ramda'

let addresses = []

const onSearchError = (state) => (error) => {
  state.errors = error
}

const onSearchSuccess = (state) => (data) => {
  state.errors = ''
  addresses = data
}

const onValidateError = (state) => (error) => {
  state.errors = error
}

const onValidateSuccess = (state) => (data) => {
  state.errors = ''
  console.log(data)
  // addresses = pluck('text', suggestions)
}

export const groupForm = (state) => [
  m('fieldset.fieldset', [
    m('legend', 'Create Group'),
    m('.fields', [
      m('label', { for: 'name' }, 'name'),
      m('input', {
        type: 'text',
        id: 'name',
        name: 'name',
        value: state.data.name,
        onchange: (e) => {
          state.data.name = e.target.value
        },
      }),
    ]),
    state.errors ? m('p.error', state.errors[0]) : '',
  ]),
]

export const eventForm = (state) => [
  m('fieldset.fieldset', [
    m('legend', 'Create Event'),
    m('.fields', [
      m('label', { for: 'title' }, 'title'),
      m('input', {
        value: state.data.title,
        type: 'text',
        id: 'title',
        name: 'title',
        onchange: (e) => {
          state.data.title = e.target.value
        },
      }),
    ]),
    m('.fields', [
      m('label', { for: 'description' }, 'description'),
      m('input', {
        value: state.data.description,
        type: 'textarea',
        id: 'description',
        name: 'description',
        onchange: (e) => {
          state.data.description = e.target.value
        },
      }),
    ]),
    m('.fields', [
      m('label', { for: 'location' }, 'location'),
      m('input', {
        value: state.data.location,
        type: 'textarea',
        id: 'location',
        name: 'location',
        onkeyup: (e) => {
          state.data.location = e.target.value
          http
            .lookupLocationTask(state.data.location)
            .fork(onSearchError(state), onSearchSuccess(state))
        },
      }),
      addresses.map((a, i) =>
        m(
          'li',
          {
            key: i,
            onclick: () => {
              state.data.location = [a.lat, a.lon]
              addresses = []
            },
          },
          a.display_name
        )
      ),
    ]),
    m('.fields', [
      m('label', { for: 'startDate' }, 'startDate'),
      m('input', {
        value: format(state.data.startDate, 'YYYY-MM-DD'),
        type: 'date',
        id: 'startDate',
        name: 'startDate',
        onchange: (e) => {
          state.data.startDate = format(e.target.value, 'YYYY-MM-DD')
        },
      }),
    ]),
    state.errors ? m('p.error', state.errors[0]) : '',
  ]),
]
