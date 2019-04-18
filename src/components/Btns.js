import m from 'mithril'

export const Btn = {
  view: ({ attrs: { action, label } }) => [
    m(
      'button.Btn',
      {
        onclick: () => action(),
      },
      label
    ),
  ],
}

export const BtnClose = {
  view: ({ attrs: { action, label } }) => [
    m(
      'button.btn-close',
      {
        onclick: () => action(),
      },
      label
    ),
  ],
}
