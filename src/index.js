const root = document.body
import m from 'mithril'
import { model } from './Model.js'
import Layout from './components/Layout.js'
import { Login, Register } from './Login/component'

const LoginPage = {
  view: ({ attrs: { model } }) => m('.component', m(Login, { model })),
}

const RegisterPage = {
  view: ({ attrs: { model } }) => m('.component', m(Register, { model })),
}

if (module.hot) {
  module.hot.accept()
}

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

// Styles
import './index.css'
import './assets/animations.css'
import './assets/loader.css'

function getProfile(w) {
  if (w < 668) return 'phone'
  if (w < 920) return 'tablet'
  return 'desktop'
}

let winW = window.innerWidth
model.state.profile = getProfile(winW)

function checkWidth() {
  const w = window.innerWidth
  if (winW !== w) {
    winW = w
    var lastProfile = model.state.profile
    model.state.profile = getProfile(w)
    if (lastProfile != model.state.profile) m.redraw()
  }
  requestAnimationFrame(checkWidth)
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then((registration) => {
        console.log('🧟 SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('⚙️ SW registration failed: ', registrationError)
      })
  })
}

checkWidth()

const UnAuthenticated = (model) => ({
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
})

m.route(root, '/login', UnAuthenticated(model))
