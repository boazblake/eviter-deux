import Stream from 'mithril-stream'

const pages = ['login', 'logout', 'createEvent', '']

const state = {
  reload: () => {},
  isLoading: Stream(false),
  profile: '',
  tabsShowing: false,
  route: Stream(''),
  group: { id: Stream(''), name: Stream('') },
  event: { id: Stream(''), name: Stream('') },
  invite: { id: Stream(''), name: Stream('') },
  errors: Stream(''),
}

const toggleDict = {
  'groups-modal': Stream(false),
  'events-modal': Stream(false),
  'invites-modal': Stream(false),
}

const user = { objectId: '', name: '' }

const errors = null

const showTabs = (model) => (model.state.tabsShowing = !model.state.tabsShowing)

export const model = {
  events: Stream([]),
  groups: Stream([]),
  pages,
  user,
  state,
  showTabs,
  errors,
  getState: (ctx) => toggleDict[ctx](),
  toggleState: (ctx) => toggleDict[ctx](!toggleDict[ctx]()),
}
