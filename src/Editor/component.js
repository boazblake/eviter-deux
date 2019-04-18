import m from 'mithril'

import { groupForm, eventForm } from './forms/index.js'
import { saveGroup, assocUserToGroup } from './model.js'

const onInitSuccess = (state) => (data) => (state.data = data)

const onError = (state) => ({ message }) => {
  state.error = message
  console.error('error', state.error)
}

const validateData = (data) => {
  return data
}

const onSaveGroupSuccess = (state) => (model) => (data) => {
  state.error = null
  console.log('saved', model, data)
  return model.emitter.emit('toggle-group', model.emitter.emit('fetch-groups'))
}

const onSaveEventSuccess = (state) => (model) => (data) => {
  state.error = null
  console.log('saved', model, data)
}

const saveForm = (model) => (state) => {
  console.log('save form', model.state, model.user, state)
  if (model.state.route == 'groups') {
    return saveGroup(state.data.name)
      .chain(assocUserToGroup(model.user.objectId))
      .fork(onError(state), onSaveGroupSuccess(state)(model))
  }
  if (model.state.route == 'events') {
    return createEvent(model)(state)
      .chain(joinEvent(model))
      .fork(onError(state), onSaveEventSuccess(state)(model))
  }
  if (model.state.route == 'editGroup') {
    // return editGroup(model)(state).fork(onError(state), onSaveSuccess(model))
  }
  if (model.state.route == 'editEvent') {
    // return editEvent(model)(state).fork(onError(state), onSaveSuccess(model))
  }
  return state
}

const getForm = {
  group: groupForm,
  event: eventForm,
}

export const Editor = {
  oninit: ({ attrs: { model, page, id }, state }) => {
    state.form = getForm[page]
    state.data = {}
    console.log('page', page, state)
    state.userId = model.user.id
    if (id) {
      getGroupData(model)(id).fork(onError(state), onInitSuccess(state))
    }
    return state
  },
  view: ({ attrs: { model }, state }) => {
    // console.log('Editor', state, model)
    return m(
      'form.form',
      {
        onsubmit: (e) => {
          model.error = null
          e.preventDefault()
          validateData(state.data) ? saveForm(model)(state) : ''
        },
      },
      state.form(state),
      state.error ? m('p.error', state.error) : '',
      m(
        'button[type=submit]',
        {
          class: model.state.isLoading ? 'submitting' : 'submit',
        },
        model.state.isLoading ? 'Submitting' : 'Submit'
      )
    )
  },
}
