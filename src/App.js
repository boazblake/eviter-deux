import m from 'mithril'
import { isNil } from 'ramda'

import Layout from './components/Layout.js'
import { Login, Register } from './Login/component'
import { Attendances } from './Attendances/component'
import { checkAuth } from './auth.js'

const LoginPage = {
  view: ({ attrs: { model } }) => m('.component', m(Login, { model })),
}

const RegisterPage = {
  view: ({ attrs: { model } }) => m('.component', m(Register, { model })),
}

const AttendancesPage = {
  view: ({ attrs: { model } }) => m('.component', m(Attendances, { model })),
}

export const App = (model) => ({
  '/login': {
    onmatch: () => {
      model.state.route = 'login'
    },
    render: () => m(Layout, { model }, m(LoginPage, { model })),
  },
  '/register': {
    onmatch: () => {
      model.state.route = 'register'
    },
    render: () => m(Layout, { model }, m(RegisterPage, { model })),
  },
  '/attendances/:id': {
    onmatch: () => {
      if (isNil(model.user.id)) return m.route.set('/login')
      model.state.route = 'attendance'
    },
    render: () => m(Layout, { model }, m(AttendancesPage, { model })),
  },
  '/logout': {
    onmatch: () => {
      model.user = {}
      checkAuth(model)
    },
    render: () => m(Layout, { model }, m(Login, { model })),
  },
})
