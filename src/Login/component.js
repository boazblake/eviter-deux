import m from 'mithril'

import {
  validateData,
  authenticated,
  loginUser,
  registerUser,
} from './model.js'

const onSuccess = (model) => (user) => {
  model.user = user
  model.errors = null
  authenticated(model)(`/${model.user.name}/groups`)
}

const onError = (model) => (errors) => (model.errors = errors)

const logUserIn = (model) => (dto) =>
  loginUser(dto).fork(onError(model), onSuccess(model))

const regUser = (model) => (dto) =>
  registerUser(dto).fork(onError(model), onSuccess(model))

const Login = {
  view: ({ attrs: { model }, state }) =>
    m(
      'form.form',
      {
        onsubmit: (e) => {
          model.errors = null
          e.preventDefault()
          validateData(state)
            ? logUserIn(model)({
              login: state.email,
              password: state.password,
            })
            : ''
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
          model.errors ? m('p.error', model.errors.message) : '',
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
          model.errors = null
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
          model.errors ? m('p.error', model.errors.message) : '',
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
