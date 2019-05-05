import m from 'mithril'

export const EventBlock = {
  oninit: (v) => console.log(v),
  view: ({ attrs: { model } }) => m('', 'event'),
}
