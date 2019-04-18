import m from 'mithril'

import Layout from './components/Layout.js'
import { Groups } from './Groups/component'
import { Invites } from './Invites/component'
import { Editor } from './Editor/component'
import { checkAuth } from './auth.js'

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
      model.state.route = 'groups'
      checkAuth(model)
    },
    render: () => m(Layout, { model }, m(GroupsPage, { model })),
  },
  // '/:username/new-group': {
  //   onmatch: (args, path) => {
  //     console.log('args, path', args, path)
  //     model.state.route = 'Event'
  //     checkAuth(model)
  //   },
  //   render: () =>
  //     m(Layout, { model }, m(EditorPage, { model, page: 'group', id: null })),
  // },
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
    render: () => m.route(document.body, '/login', UnAuthenticated(model)),
  },
})
