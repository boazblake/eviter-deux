import m from 'mithril'

import { groupForm, eventForm } from './forms/index.js'
import {
  saveGroup,
  assocUserToGroup,
  updateGroupName,
  saveEvent,
  updateEventDetails,
} from './model.js'

const onError = (state) => ({ message }) => (state.error = message)

const validateData = (data) => data

const onSaveGroupSuccess = (state) => (model) => (reload) => () => {
  model.state.group.id('')
  model.state.group.name('')
  state.error = null
  model.toggleState('groups-modal')
  reload()
}

const onSaveEvent = (state) => (model) => (reload) => () => {
  state.error = null
  model.toggleState('events-modal')
  reload()
}

const saveForm = (model) => (state) => (reload) => {
  if (model.state.route() == 'groups') {
    if (model.state.group.id()) {
      return updateGroupName(model)(
        model.state.group.id(),
        state.data.name
      ).fork(onError(state), onSaveGroupSuccess(state)(model)(reload))
    } else {
      return saveGroup(model)(state.data.name)
        .chain(assocUserToGroup(model)(model.user.objectId))
        .fork(onError(state), onSaveGroupSuccess(state)(model)(reload))
    }
  }
  if (model.state.route() == 'events') {
    if (model.state.event.id()) {
      return updateEventDetails(model)(state.data).fork(
        onError(state),
        onSaveEvent(state)(model)(reload)
      )
    } else {
      return saveEvent(model)(state.data)(model.state.group.id()).fork(
        onError(state),
        onSaveEvent(state)(model)(reload)
      )
    }
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
  oninit: ({ attrs: { model }, state }) => {
    state.form = getForm[model.state.page()]
    state.data = model.state.modal()
    return state
  },
  view: ({ attrs: { model, reload }, state }) =>
    m(
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
    ),
}
