import m from 'mithril'

import { groupForm, eventForm } from './forms/index.js'
import { saveGroup, assocUserToGroup, updateGroup } from './model.js'

const onError = (state) => ({ message }) => {
  state.error = message
  console.error('error', state.error)
}

const validateData = (data) => {
  return data
}

const onSaveGroupSuccess = (state) => (model) => (reload) => (data) => {
  model.state.group.id = ''
  model.state.group.name = ''
  state.error = null
  console.log('saved', model, data)
  model.toggleState('groups-modal')
  reload()
}

const saveForm = (model) => (state) => (reload) => {
  console.log('save form', model.state, model.user, state)
  if (model.state.route() == 'groups') {
    if (model.state.group.id) {
      return updateGroup(model)(model.state.group.id, state.data.name).fork(
        onError(state),
        onSaveGroupSuccess(state)(model)(reload)
      )
    } else {
      return saveGroup(model)(state.data.name)
        .chain(assocUserToGroup(model)(model.user.objectId))
        .fork(onError(state), onSaveGroupSuccess(state)(model)(reload))
    }
  }
  if (model.state.route() == 'events') {
    console.log('state in events', state)
  }
  if (model.state.route() == 'editGroup') {
    // return editGroup(model)(state).fork(onError(state), onSaveSuccess(model))
  }
  if (model.state.route() == 'editEvent') {
    // return editEvent(model)(state).fork(onError(state), onSaveSuccess(model))
  }
  return state
}

const getForm = {
  group: groupForm,
  event: eventForm,
}

export const Editor = {
  oninit: ({ attrs: { model, page }, state }) => {
    state.form = getForm[page]
    state.data = {}
    console.log('page', page, state)
    state.userId = model.user.id
    if (model.state.group.id) {
      console.log('id', model.state.group.id)
      state.data.name = model.state.group.name
    } else {
      console.log('no id')
      state.data = {}
    }
    return state
  },
  view: ({ attrs: { model, reload }, state }) => {
    // console.log('Editor', state, model)
    return m(
      'form.form',
      {
        onsubmit: (e) => {
          model.error = null
          e.preventDefault()
          validateData(state.data) ? saveForm(model)(state)(reload) : ''
        },
      },
      state.form(state),
      state.error ? m('p.error', state.error) : '',
      m(
        'button[type=submit]',
        {
          class: model.state.isLoading() ? 'submitting' : 'submit',
        },
        model.state.isLoading() ? 'Submitting' : 'Submit'
      )
    )
  },
}
