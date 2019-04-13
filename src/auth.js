import m from 'mithril'
import bcrypt from 'bcryptjs'
import { isEmpty } from 'ramda'

const secure = (str) => bcrypt.hash(str, 10)

const checkAuth = (model) => {
  console.warn('checking Auth', { id: model.user.id }, isEmpty(model.user.id))
  if (isEmpty(model.user.id)) return m.route.set('/login')
}

export { secure, checkAuth }
