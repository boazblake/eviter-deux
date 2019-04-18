import m from 'mithril'

import {
  validateData,
  authenticated,
  loginUser,
  registerUser,
} from './model.js'

const onSuccess = (state) => (model) => (user) => {
  window.localStorage.setItem('user-token', user['user-token'])
  model.user = user
  state.errors = null
  authenticated(model)(`/${model.user.name}/groups`)
}

const onError = (state) => ({ message }) => {
  state.errors = message
  console.log(state)
  return state
}

const logUserIn = (model) => (state) =>
  loginUser(state).fork(onError(state), onSuccess(state)(model))

const regUser = (model) => (dto) =>
  registerUser(dto).fork(onError(dto), onSuccess(dto)(model))

const Login = {
  view: ({ attrs: { model }, state }) =>
    m(
      'form.form',
      {
        onsubmit: (e) => {
          state.errors = null
          e.preventDefault()
          validateData(state) ? logUserIn(model)(state) : ''
        },
      },
      [
        m('fieldset.fieldset', [
          m('legend', 'Login'),
          m('.fields', [
            m('label', { for: 'email' }, 'email'),
            m('input', {
              type: 'email',
              id: 'email',
              name: 'login',
              onchange: (e) => (state.email = e.target.value),
            }),
            m('label', { for: 'password' }, 'Password'),
            m('input', {
              type: 'password',
              id: 'password',
              name: 'login',
              onchange: (e) => (state.password = e.target.value),
            }),
          ]),
          m(
            'button[type=submit]',
            {
              class: model.state.isLoading ? 'submitting' : 'submit',
            },
            model.state.isLoading ? 'Submitting' : 'Submit'
          ),
          state.errors ? m('p.error', state.errors) : '',
        ]),
        m(
          'a',
          {
            oncreate: m.route.link,
            href: '/register',
          },
          'register'
        ),
      ]
    ),
}

const Register = {
  view: ({ attrs: { model }, state }) =>
    m(
      'form.form',
      {
        onsubmit: (e) => {
          state.errors = null
          e.preventDefault()
          validateData(state) ? regUser(model)(state) : ''
        },
      },
      [
        m('fieldset.fieldset', [
          m('legend', 'register'),
          m('.fields', [
            m('label', { for: 'email' }, 'email'),
            m('input', {
              type: 'email',
              id: 'email',
              name: 'register',
              onchange: (e) => (state.email = e.target.value),
            }),
            m('label', { for: 'name' }, 'name'),
            m('input', {
              type: 'text',
              id: 'name',
              name: 'register',
              onchange: (e) => (state.name = e.target.value),
            }),
            m('label', { for: 'password' }, 'Password'),
            m('input', {
              type: 'password',
              id: 'password',
              name: 'register',
              onchange: (e) => (state.password = e.target.value),
            }),
          ]),
          m(
            'button[type=submit]',
            { class: model.state.isLoading ? 'submitting' : 'submit' },
            model.state.isLoading ? 'Submitting' : 'Submit'
          ),
          state.errors ? m('p.error', state.errors.message) : '',
        ]),
        m(
          'a',
          {
            oncreate: m.route.link,
            href: '/login',
          },
          'login'
        ),
      ]
    ),
}

export { Login, Register }
