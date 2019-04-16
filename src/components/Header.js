import m from 'mithril'
import Hamburger from './Hamburger.js'
import { animate } from '../assets/index.js'
import { makeRoute } from '../utils/index.js'

const Btn = {
  view: ({ attrs: { route, label } }) => [
    m(
      'button.Btn',
      {
        onclick: () => m.route.set(route),
      },
      label
    ),
  ],
}

const actionsAt = {
  groups: (model) => [
    m(Btn, {
      route: `/${model.user.username}/new-group`,
      label: 'Add Group',
    }),
  ],
  landing: () => ['LANDING PAGE'],
  home: () => ['LANDING PAGE'],
  events: (model) => [
    m(Btn, {
      route: `/${model.user.username}/groups`,
      label: 'Back to Groups',
    }),
    m(Btn, {
      route: `/${model.user.username}/${makeRoute(
        model.state.group.name
      )}/new-event`,
      label: 'Add Event',
    }),
  ],
  newGroup: (model) => [
    m(Btn, {
      route: `/${model.user.username}/groups`,
      label: 'Back to Groups',
    }),
  ],
  newEvent: (model) => [
    m(Btn, {
      route: `/${model.user.username}/groups${makeRoute(
        model.state.group.name
      )}`,
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
