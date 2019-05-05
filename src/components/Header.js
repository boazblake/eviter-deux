import m from 'mithril'
import Hamburger from './Hamburger.js'
import { animate } from '../assets/index.js'
import { makeRoute } from '../utils/index.js'
import { Btn } from './Btns.js'

const actionsAt = {
  groups: (model) => [
    m(Btn, {
      action: () => model.toggleState('groups-modal'),
      label: 'Add Group',
    }),
  ],
  landing: () => ['LANDING PAGE'],
  login: () => ['Log in'],
  register: () => ['Register'],
  home: () => ['LANDING PAGE'],
  events: (model) => [
    m(Btn, {
      action: () => {
        model.state.group.name('')
        model.state.group.id('')
        m.route.set(`/${makeRoute(model.user.name)}/groups`)
      },
      label: 'Back to Groups',
    }),
    m(Btn, {
      action: () => model.toggleState('events-modal'),
      label: 'Add Event',
    }),
  ],
  eventHome: (model) => [
    m(Btn, {
      action: () =>
        m.route.set(
          `/${model.user.name}/${makeRoute(model.state.group.name())}/events`
        ),
      label: 'Back to Group',
    }),
  ],
  newGroup: (model) => [
    m(Btn, {
      action: () => {
        model.state.group.name('')
        model.state.group.id('')
        m.route.set(`/${makeRoute(model.user.name)}/groups`)
      },
      label: 'Back to Groups',
    }),
  ],
  newEvent: (model) => [
    m(Btn, {
      action: () =>
        m.route.set(
          `/${model.user.name}/groups${makeRoute(model.state.group.name())}`
        ),
      label: 'Back to Group',
    }),
  ],
}

const Actions = {
  view: ({ attrs: { model } }) =>
    m('.actions', actionsAt[model.state.route()](model)),
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
