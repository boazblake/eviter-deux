import m from 'mithril'
import Hamburger from './Hamburger.js'
import { animate } from '../assets/index.js'
import { makeRoute } from '../utils/index.js'
import { Btn } from './Btns.js'

const actionsAt = {
  groups: (model) => [
    m(Btn, {
      action: () => model.emitter.emit('add-group'),
      label: 'Add Group',
    }),
  ],
  landing: () => ['LANDING PAGE'],
  login: () => ['Log in'],
  register: () => ['Register'],
  home: () => ['LANDING PAGE'],
  events: (model) => [
    m(Btn, {
      action: m.route.set(`/${model.user.username}/groups`),
      label: 'Back to Groups',
    }),
    m(Btn, {
      action: m.route.set(
        `/${model.user.username}/${makeRoute(model.state.group.name)}/new-event`
      ),
      label: 'Add Event',
    }),
  ],
  newGroup: (model) => [
    m(Btn, {
      action: m.route.set(`/${model.user.username}/groups`),
      label: 'Back to Groups',
    }),
  ],
  newEvent: (model) => [
    m(Btn, {
      action: m.route.set(
        `/${model.user.username}/groups${makeRoute(model.state.group.name)}`
      ),
      label: 'Back to Group',
    }),
  ],
}

const Actions = {
  view: ({ attrs: { model } }) =>
    m('.actions', actionsAt[model.state.route](model)),
}

const Header = {
  oncreate: animate('slideDown'),
  view: ({ attrs: { model } }) =>
    m(
      'header.header',
      {
        id: 'header',
      },
      [m(Hamburger, { model }), m(Actions, { model })]
    ),
}

export default Header
