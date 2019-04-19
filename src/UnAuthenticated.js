import m from 'mithril'
import Layout from './components/Layout.js'
import { Login, Register } from './Login/component'

const LoginPage = {
  view: ({ attrs: { model } }) => m('.component', m(Login, { model })),
}

const RegisterPage = {
  view: ({ attrs: { model } }) => m('.component', m(Register, { model })),
}

export const UnAuthenticated = (model) => ({
  '/login': {
    onmatch: () => {
      model.state.route('login')
    },
    render: () => m(Layout, { model }, m(LoginPage, { model })),
  },
  '/register': {
    onmatch: () => {
      model.state.route('register')
    },
    render: () => m(Layout, { model }, m(RegisterPage, { model })),
  },
})
