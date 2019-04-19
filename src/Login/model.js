import m from 'mithril'
import http from '../http.js'
import { App } from '../App.js'

export const validateData = ({ email, password }) =>
  email ? (password ? true : false) : false

export const authenticated = (model) => (route) =>
  m.route(document.body, route, App(model))

export const loginUser = (model) => (data) => {
  let dto = {
    login: data.email,
    password: data.password,
  }

  return http.postTask(model)('users/login')({ dto })
}
export const registerUser = (model) => (dto) =>
  http.postTask(model)('users/register')({ dto })
