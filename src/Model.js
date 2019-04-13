const pages = ['login', 'logout', 'createEvent', '']

const state = {
  isLoading: false,
  profile: '',
  tabsShowing: false,
  route: '',
}

const user = { attendances: [] }

const errors = null

const showTabs = (model) => (model.state.tabsShowing = !model.state.tabsShowing)

export const model = {
  pages,
  user,
  state,
  showTabs,
  errors,
}
