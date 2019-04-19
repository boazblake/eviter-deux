import Task from 'data.task'
import { baseUrl, APP_ID, API_KEY } from './secrets.js'

const makeQuery = (string) => JSON.parse(JSON.stringify(string))

const parseQLResponse = (model) => ({ data, errors }) => {
  model.state.isLoading(false)
  return errors ? Promise.reject(errors) : Promise.resolve(data)
}

export const parseHttpError = (model) => (rej) => (Error) => {
  model.state.isLoading(false)
  return rej(Error.response)
}

export const parseHttpSuccess = (model) => (res) => (data) => {
  model.state.isLoading(false)
  return res(data)
}

const getUserToken = () =>
  window.sessionStorage.getItem('user-token')
    ? window.sessionStorage.getItem('user-token')
    : ''

const postQl = (model) => (query) => {
  model.state.isLoading(true)
  return new Task((rej, res) =>
    m
      .request({
        method: 'POST',
        // url: graphQl,
        withCredentials: false,
        data: makeQuery(query),
        headers: {
          Authorization: `Bearer ${model.state.token}`,
          'cache-control': 'no-cache',
          'x-apikey': '64fecd3f0cbb54d46d7f7260b86b8ad45d31b',
          'content-type': 'application/json',
        },
      })
      .then(parseQLResponse(model))
      .then(parseHttpSuccess(model)(res), parseHttpError(model)(rej))
  )
}

const postTask = (model) => (url) => ({ dto }) => {
  model.state.isLoading(true)
  return new Task((rej, res) =>
    m
      .request({
        method: 'POST',
        url: `${baseUrl}/${APP_ID}/${API_KEY}/${url}`,
        data: dto,
        headers: { 'user-token': getUserToken() },
        withCredentials: false,
      })
      .then(parseHttpSuccess(model)(res), parseHttpError(model)(rej))
  )
}

const putTask = (model) => (url) => ({ dto }) => {
  model.state.isLoading(true)
  return new Task((rej, res) =>
    m
      .request({
        method: 'PUT',
        url: `${baseUrl}/${APP_ID}/${API_KEY}/${url}`,
        data: dto,
        headers: { 'user-token': getUserToken() },
        withCredentials: false,
      })
      .then(parseHttpSuccess(model)(res), parseHttpError(model)(rej))
  )
}

const getTask = (model) => (url) => {
  model.state.isLoading(true)
  return new Task((rej, res) =>
    m
      .request({
        method: 'GET',
        url: `${baseUrl}/${APP_ID}/${API_KEY}/${url}`,
        headers: { 'user-token': getUserToken() },
        withCredentials: false,
      })
      .then(parseHttpSuccess(model)(res), parseHttpError(model)(rej))
  )
}
const deleteTask = (model) => (url) => (id) => {
  model.state.isLoading(true)
  return new Task((rej, res) =>
    m
      .request({
        method: 'DELETE',
        url: `${baseUrl}/${APP_ID}/${API_KEY}/${url}/${id}`,
        headers: { 'user-token': getUserToken() },
        withCredentials: false,
      })
      .then(parseHttpSuccess(model)(res), parseHttpError(model)(rej))
  )
}
const http = { postQl, postTask, getTask, putTask, deleteTask }

export default http
