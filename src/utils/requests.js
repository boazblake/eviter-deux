import httpTasks from './Tasks.js'

export const loginTask = ({ email, password }) => {
  let query = `mutation {signinUser(email:{email:${JSON.stringify(
    email
  )},password:${JSON.stringify(password)}}){user {id}}}`

  return httpTasks.postQl({ query })
}
