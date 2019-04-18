import bcrypt from 'bcryptjs'
import { isEmpty, not } from 'ramda'

const secure = (str) => bcrypt.hash(str, 10)

const checkAuth = (model) => {
  console.warn(
    'checking Auth',
    model,
    { id: model.user.objectId },
    not(isEmpty(model.user.objectId))
  )
  return not(isEmpty(model.user.objectId))
}

export { secure, checkAuth }
