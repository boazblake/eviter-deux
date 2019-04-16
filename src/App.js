import m from 'mithril'

import Layout from './components/Layout.js'
import { Login, Register } from './Login/component'
import { Groups } from './Groups/component'
import { Invites } from './Invites/component'
import { Editor } from './Editor/component'
import auth0 from 'auth0-js'

import Task from 'data.task'
import { checkAuth } from './auth.js'

const authenticateUSer = (model) => {
  var webAuth = new auth0.WebAuth({
    domain: 'boazblake.auth0.com',
    clientID: 'wly12TyM6CBy5rA90BfNTbh14dgN9KyZ',
    responseType: 'token id_token',
    scope: 'openid',
    redirectUri: 'http://localhost:3000/#!/landing',
  })

  console.log(webAuth)
  webAuth.authorize()
}

const Landing = {
  view: ({ attrs: { model } }) =>
    m(
      '.container',
      m(
        'button.card-btn',
        {
          onclick: () => authenticateUSer(model), //.fork(onAuthError(model), onAuthSuccess(model)),
        },
        'LOG IN WITH GITHUB'
      )
    ),
}

const LandingPage = {
  view: ({ attrs: { model } }) => m('.component', m(Landing, { model })),
}

const LoginPage = {
  view: ({ attrs: { model } }) => m('.component', m(Login, { model })),
}

const RegisterPage = {
  view: ({ attrs: { model } }) => m('.component', m(Register, { model })),
}

const GroupsPage = {
  view: ({ attrs: { model } }) => m('.component', m(Groups, { model })),
}

const EventsPage = {
  view: ({ attrs: { model } }) => m('.component', m(Invites, { model })),
}

const EditorPage = {
  view: ({ attrs: { model, page, id } }) =>
    m('.component', m(Editor, { model, page, id })),
}

export const App = (model) => ({
  '/:username/groups': {
    onmatch: (args, path) => {
      console.log('args, path', args, path)
      model.state.route = 'groups'
      checkAuth(model)
    },
    render: () => m(Layout, { model }, m(GroupsPage, { model })),
  },
  '/:username/new-group': {
    onmatch: (args, path) => {
      console.log('args, path', args, path)
      model.state.route = 'Event'
      checkAuth(model)
    },
    render: () =>
      m(Layout, { model }, m(EditorPage, { model, page: 'group', id: null })),
  },
  '/:username/edit/:group': {
    onmatch: (args, path) => {
      console.log('args, path', args, path)
      model.state.route = 'editGroup'
      checkAuth(model)
    },
    render: () =>
      m(
        Layout,
        { model },
        m(EditorPage, { model, page: 'group', id: 'groupId' })
      ),
  },
  '/:username/:group/events': {
    onmatch: (args, path) => {
      console.log('args, path', args, path)
      model.state.route = 'events'
      checkAuth(model)
    },
    render: () => m(Layout, { model }, m(EventsPage, { model })),
  },
  '/:username/:group/new-event': {
    onmatch: (args, path) => {
      console.log('args, path', args, path)
      model.state.route = 'newEvent'
      checkAuth(model)
    },
    render: () =>
      m(Layout, { model }, m(EditorPage, { model, page: 'event', id: null })),
  },
  '/:username/:group/edit/:event': {
    onmatch: (args, path) => {
      console.log('args, path', args, path)
      model.state.route = 'editEvent'
      checkAuth(model)
    },
    render: () =>
      m(
        Layout,
        { model },
        m(EditorPage, { model, page: 'event', id: 'eventID' })
      ),
  },
  '/logout': {
    onmatch: () => {
      model.user = {}
      checkAuth(model)
    },
    render: () => m(Layout, { model }, m(Login, { model })),
  },
  '/home': {
    onmatch: (args, path) => {
      model.state.route = 'home'
      return console.log('landed home', args, path)
    },
    render: () => m(Layout, { model }, m(LandingPage, { model })),
  },
})

export const UnAuthenticated = (model) => ({
  '/landing': {
    onmatch: () => {
      model.state.route = 'landing'
    },
    render: () => m(Layout, { model }, m(LandingPage, { model })),
  },
})
