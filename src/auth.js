import bcrypt from 'bcryptjs'

const secure = (str) => bcrypt.hash(str, 10)

const checkAuth = (model) => {
  let userLogedIn =
    model.user.id &&
    window.sessionStorage.getItem('user-token') == model.user['user-token']

  // console.log(
  //   'userLogedIn',
  //   userLogedIn,
  //   model.user,
  //   window.sessionStorage.getItem('user-token')
  // )

  return userLogedIn
}

export { secure, checkAuth }
