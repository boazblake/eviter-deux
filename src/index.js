// index.jsx
import m from 'mithril'
const root = document.getElementById('app')
import { model } from './Model.js'
import { App } from './App.js'

if (module.hot) {
  module.hot.accept()
}

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

// Styles
import './index.css'
import './animations.css'

m.route(root, '/posts', App(model))
