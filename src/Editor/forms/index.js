import m from 'mithril'

export const groupForm = (state) => [
  m('fieldset.fieldset', [
    m('legend', 'Create Group'),
    m('.fields', [
      m('label', { for: 'name' }, 'name'),
      m('input', {
        type: 'text',
        id: 'name',
        name: 'name',
        onchange: (e) => {
          console.log(e.target.value, state)
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
        type: 'text',
        id: 'title',
        name: 'title',
        onchange: (e) => {
          console.log(e.target.value, state)
          state.data.title = e.target.value
        },
      }),
    ]),
    m('.fields', [
      m('label', { for: 'description' }, 'description'),
      m('input', {
        type: 'textarea',
        id: 'description',
        name: 'description',
        onchange: (e) => {
          console.log(e.target.value, state)
          state.data.description = e.target.value
        },
      }),
    ]),
    m('.fields', [
      m('label', { for: 'location' }, 'location'),
      m('input', {
        type: 'textarea',
        id: 'location',
        name: 'location',
        onchange: (e) => {
          console.log(e.target.value, state)
          state.data.location = e.target.value
        },
      }),
    ]),
    m('.fields', [
      m('label', { for: 'date' }, 'date'),
      m('input', {
        type: 'date',
        id: 'date',
        name: 'date',
        onchange: (e) => {
          console.log(e.target.value, state)
          state.data.date = e.target.value
        },
      }),
    ]),
    state.errors ? m('p.error', state.errors[0]) : '',
  ]),
]
