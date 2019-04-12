import m from 'mithril'

import Layout from './components/Layout.js'

import { isEmpty } from 'ramda'

import { loginTask } from './utils/requests.js'

const logUserIn = (model) => (data) => {
  const onS = (user) => {
    model.user = user
    return console.log(model)
    // m.route.set(`events/${user.id}`)
  }

  const onE = (e) => console.error('err', e)

  let dto = data

  loginTask(dto).fork(onS, onE)
}

const checkAuth = (model) => {
  if (!isEmpty(model.user)) {
    return m.route.set(`/events/${model.user.name}`)
  }
}

const Login = {
  oninit: (v) => console.log('state', v),
  view: (v) =>
    m(
      'form.form',
      {
        onsubmit: (e) => {
          e.preventDefault()
          logUserIn(v.attrs.model)(v.state)
        },
      },
      [
        m('fieldset', [
          m('legend', 'Login'),
          m('label', { for: 'email' }, 'email'),
          m('input', {
            type: 'email',
            id: 'email',
            name: 'login',
            onchange: (e) => (v.state.email = e.target.value),
          }),
          m('br'),
          m('label', { for: 'password' }, 'Password'),
          m('input', {
            type: 'password',
            id: 'password',
            name: 'login',
            onchange: (e) => (v.state.password = e.target.value),
          }),
          m('button[type=submit]', 'Submit'),
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
  view: () =>
    m('form.form', [
      m('fieldset', [
        m('legend', 'Register'),
        m('label', { for: 'email' }, 'email'),
        m('input', { type: 'email', id: 'email', name: 'Register' }),
        m('br'),
        m('label', { for: 'password' }, 'Password'),
        m('input', { type: 'password', id: 'password', name: 'Register' }),
      ]),
      m(
        'a',
        {
          oncreate: m.route.link,
          href: '/login',
        },
        'login'
      ),
    ]),
}

const LoginPage = {
  oninit: () => {},
  view: ({ attrs: { model } }) => m('.component', m(Login, { model })),
}

const RegisterPage = {
  oninit: () => {},
  view: ({ attrs: { model } }) => m('.component', m(Register, { model })),
}

export const App = (model) => ({
  '/login': {
    onmatch: () => {
      model.state.route = 'login'
      checkAuth(model)
    },
    render: () => m(Layout, { model }, m(LoginPage, { model })),
  },
  '/register': {
    onmatch: () => {
      model.state.route = 'register'
    },
    render: () => m(Layout, { model }, m(RegisterPage, { model })),
  },
  '/events/:name': {
    onmatch: () => {
      model.state.route = 'events'
      checkAuth(model)
    },
    render: (a) => {
      console.log('render dash', a)
      console.log('render dash', model)
    },
  },
  '/logout': {
    onmatch: () => {
      model.user = {}
      checkAuth(model)
    },
    render: () => m(Layout, { model }, m(Login, { model })),
  },
})
