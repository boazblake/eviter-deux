import Stream from 'mithril-stream'

const pages = ['login', 'logout', 'createEvent', '']

const state = {
  reload: () => {},
  isLoading: Stream(false),
  profile: '',
  tabsShowing: false,
  route: Stream(''),
  page: Stream(''),
  modal: Stream({}),
  group: { id: Stream(''), name: Stream('') },
  event: { id: Stream(''), name: Stream('') },
  invite: { id: Stream(''), name: Stream('') },
  errors: Stream(''),
  eventBlock: {},
}

const toggleDict = {
  'groups-modal': Stream(false),
  'events-modal': Stream(false),
  'event-page': Stream(false),
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
  getEventBlock: ({ model, event, group }) =>
    model.state.eventBlock[`${event}-${group}`],
  toggleEventBlock: ({ model, event, group }) =>
    model.state.eventBlock[`${event}-${group}`]
      ? (model.state.eventBlock[`${event}-${group}`] = !model.state.eventBlock[
        `${event}-${group}`
      ])
      : (model.state.eventBlock[`${event}-${group}`] = true),
}
