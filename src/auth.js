import bcrypt from 'bcryptjs'
import { isEmpty, not } from 'ramda'

const secure = (str) => bcrypt.hash(str, 10)

const checkAuth = (model) => {
  console.warn(
    'checking Auth',
    { id: model.user.id },
    not(isEmpty(model.user.id))
  )
  return not(isEmpty(model.user.id))
}

export { secure, checkAuth }
