import Stream from 'mithril-stream'

const pages = ['login', 'logout', 'createEvent', '']

const state = {
  isLoading: Stream(false),
  profile: '',
  tabsShowing: false,
  modalShowing: false,
  route: Stream(''),
  group: { id: '', name: '' },
  event: { id: '', name: '' },
}

const toggleDict = {
  'groups-modal': Stream(false),
}

const user = { objectId: '', name: '' }

const errors = null

const showTabs = (model) => (model.state.tabsShowing = !model.state.tabsShowing)

export const model = {
  pages,
  user,
  state,
  showTabs,
  errors,
  getState: (ctx) => toggleDict[ctx](),
  toggleState: (ctx) => toggleDict[ctx](!toggleDict[ctx]()),
}
