import m from 'mithril'
import bcrypt from 'bcryptjs'
import { isEmpty } from 'ramda'

const secure = (str) => bcrypt.hash(str, 10)

const checkAuth = (model) => {
  console.warn('checking Auth', model.user, isEmpty(model.user))

  if (isEmpty(model.user)) {
    return m.route.set('/login')
  }
}

export { secure, checkAuth }
