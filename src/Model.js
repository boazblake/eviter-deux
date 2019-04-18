import AsyncEventEmitter from 'async-eventemitter'
const emitter = new AsyncEventEmitter()

const pages = ['login', 'logout', 'createEvent', '']

const state = {
  isLoading: false,
  profile: '',
  tabsShowing: false,
  modalShowing: false,
  route: '',
  group: { id: '', name: '' },
  event: { id: '', name: '' },
}

const user = { id: '', username: '' }

const errors = null

const showTabs = (model) => (model.state.tabsShowing = !model.state.tabsShowing)
const showModal = (model) =>
  (model.state.modalShowing = !model.state.modalShowing)

export const model = {
  emitter,
  pages,
  user,
  state,
  showTabs,
  showModal,
  errors,
}
