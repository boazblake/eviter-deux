const root = document.body
import m from 'mithril'
import { model } from './Model.js'
// import { checkAuth } from './auth.js'
import { App } from './App.js'
import { makeRoute } from './utils/index.js'
import { UnAuthenticated } from './UnAuthenticated.js'

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

// checkAuth(model)
model.user.id
  ? m.route(document.body, `/${makeRoute(model.user.name)}/groups`, App(model))
  : m.route(root, '/login', UnAuthenticated(model))
