import m from 'mithril'

import Layout from './components/Layout.js'
import { Login, Register } from './Login/component'
import { Groups } from './Groups/component'
import { Invites } from './Invites/component'
import { Editor } from './Editor/component'
import Auth0Lock from 'auth0-lock'

import Task from 'data.task'
import { checkAuth } from './auth.js'

const authUser = (model) => {
  const lock = new Auth0Lock(
    'wly12TyM6CBy5rA90BfNTbh14dgN9KyZ',
    'boazblake.auth0.com',
    {
      auth: {
        params: { scope: 'openid email' }, //Details: https://auth0.com/docs/scopes
      },
      rememberLastLogin: true,
    }
  )

  lock.on('authenticated', function(authResult) {
    lock.getProfile(authResult.idToken, function(error, profile) {
      if (error) {
        alert('Unable to authenticate!')
        return
      }
      localStorage.setItem('id_token', authResult.idToken)

      return console.log(localStorage, profile, authResult)
    })
  })

  lock.show()
}

const Landing = {
  view: ({ attrs: { model } }) =>
    m(
      '.container',
      m(
        'button.card-btn',
        {
          onclick: () => authUser(model), //.fork(onAuthError(model), onAuthSuccess(model)),
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
      return console.log('landed home', args, path, model)
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
