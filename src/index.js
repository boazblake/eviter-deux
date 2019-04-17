import m from 'mithril'
const root = document.body
import { model } from './Model.js'
import { checkAuth } from './auth.js'
import { App, UnAuthenticated } from './App.js'
import Auth0Lock from 'auth0-lock'

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

if (/access_token|id_token|error/.test(window.location.hash)) {
  let authRes = window.location.hash.split('#')[1].split('&')
  authRes.map((res) => {
    let key = res.split('=')[0]
    let value = res.split('=')[1]
    if (key == 'access_token') {
      model.state.accesstoken = value
      model.state.token = window.location.hash
    }
    console.log([key, value])
    return [key, value]
  })

  m.route(root, '/home', App(model))
} else {
  console.log('window', window.location.hash)
  m.route(root, '/landing', UnAuthenticated(model))
}
