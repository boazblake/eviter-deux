import m from 'mithril'

import { groupForm, eventForm } from './forms/index.js'
import {
  getGroup,
  createGroup,
  createEvent,
  editGroup,
  editEvent,
  joinEvent,
} from '../requests.js'
import { makeRoute } from '../utils/index.js'

const getGroupData = (model) => (id) => getGroup(model)(id)
const onInitSuccess = (state) => (data) => (state.data = data)

const onError = (state) => (error) => {
  state.error = error
  console.error('error', state)
}

const validateData = (data) => {
  // console.log('valiudate data', data)
  return data
}

const onSaveGroupSuccess = (model) => (data) => {
  console.log('saved', model, data)
  m.route.set(`/${model.user.username}/groups`)
}

const onSaveEventSuccess = (model) => (data) => {
  console.log(
    'saved',
    model,
    data,
    'route',
    `/${model.user.username}/${makeRoute(model.state.group.name)}/events`
  )

  m.route.set(
    `/${model.user.username}/${makeRoute(model.state.group.name)}/events`
  )
}

const saveForm = (model) => (state) => {
  console.log('save form', model.state, model.user, state)
  if (model.state.route == 'newGroup') {
    return createGroup(model)(state).fork(
      onError(state),
      onSaveGroupSuccess(model)
    )
  }
  if (model.state.route == 'newEvent') {
    return createEvent(model)(state)
      .chain(joinEvent(model))
      .fork(onError(state), onSaveEventSuccess(model))
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
          model.errors = null
          e.preventDefault()
          validateData(state.data) ? saveForm(model)(state) : ''
        },
      },
      state.form(state),
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
