import bcrypt from 'bcryptjs'

const secure = (str) => bcrypt.hash(str, 10)

const checkAuth = (model) => {
  let userLogedIn =
    window.sessionStorage.getItem('user-token') == model.user['user-token']

  userLogedIn ? userLogedIn : window.sessionStorage.removeItem('user-token')

  console.log(
    'userLogedIn',
    userLogedIn,
    model.user,
    window.sessionStorage.getItem('user-token')
  )

  return userLogedIn
}

export { secure, checkAuth }
