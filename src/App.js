import m from 'mithril'

import Layout from './components/Layout.js'
import { Groups } from './Groups/component'
import { Events } from './Events/component'
import { EventHome } from './EventHome/component'
import { UnAuthenticated } from './UnAuthenticated.js'
import { checkAuth } from './auth.js'

const GroupsPage = {
  view: ({ attrs: { model } }) => m('.component', m(Groups, { model })),
}

const EventsPage = {
  view: ({ attrs: { model } }) => m('.component', m(Events, { model })),
}

const EventPage = {
  view: ({ attrs: { model } }) => m('.component', m(EventHome, { model })),
}

export const App = (model) => ({
  '/:username/groups': {
    onmatch: () => {
      model.state.route('groups')
      checkAuth(model)
    },
    render: () => m(Layout, { model }, m(GroupsPage, { model })),
  },
  '/:username/:group/events': {
    onmatch: () => {
      model.state.route('events')
      checkAuth(model)
    },
    render: () => m(Layout, { model }, m(EventsPage, { model })),
  },
  '/:username/:group/event/:eventId': {
    onmatch: () => {
      model.state.route('eventHome')
      checkAuth(model)
    },
    render: () => m(Layout, { model }, m(EventPage, { model })),
  },
  '/logout': {
    onmatch: () => {
      model.user = {}
      checkAuth(model)
    },
    render: () => m.route(document.body, '/login', UnAuthenticated(model)),
  },
})
