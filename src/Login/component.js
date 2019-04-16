import m from 'mithril'
import { loginReq, registerReq } from '../requests.js'
import { pluck, or, isNil, not } from 'ramda'

const validateData = ({ email, password }) =>
  not(or(isNil(email), isNil(password)))

const userLoggedIn = (model) => ({
  signinUser: {
    user: { id, username },
  },
}) => {
  model.user.id = id
  model.user.username = username
  model.errors = null
  m.route.set(`/${model.user.username}/groups/`)
}

const userRegistered = (model) => ({ createUser: { id, username } }) => {
  model.user.id = id
  model.user.username = username
  model.errors = null
  m.route.set(`/${model.user.username}/groups/`)
}

const onE = (model) => (errors) => (model.errors = pluck('message', errors))

const logUserIn = (model) => (data) =>
  loginReq(model)(data).fork(onE(model), userLoggedIn(model))

const registerUser = (model) => (data) =>
  registerReq(model)(data).fork(onE(model), userRegistered(model))

const Login = {
  view: ({ attrs: { model }, state }) =>
    m(
      'form.form',
      {
        onsubmit: (e) => {
          model.errors = null
          e.preventDefault()
          validateData(state) ? logUserIn(model)(state) : ''
        },
      },
      [
        m('fieldset.fieldset', [
          m('legend', 'Login'),
          m(
            'button.card-btn',
            {
              id: 'btn-login',
            },
            'LOGIN'
          ),
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
          model.errors ? m('p.error', model.errors[0]) : '',
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
          validateData(state) ? registerUser(model)(state) : ''
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
            m('label', { for: 'username' }, 'username'),
            m('input', {
              type: 'text',
              id: 'username',
              name: 'register',
              onchange: (e) => (state.username = e.target.value),
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
          model.errors ? m('p.error', model.errors[0]) : '',
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
