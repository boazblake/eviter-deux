import Task from 'data.task'
import { baseUrl, APP_ID, API_KEY } from './secrets.js'

const makeQuery = (string) => JSON.parse(JSON.stringify(string))

const parseQLResponse = (model) => ({ data, errors }) => {
  model.state.isLoading = false
  return errors ? Promise.reject(errors) : Promise.resolve(data)
}

export const parseHttpError = (rej) => (Error) => rej(Error.response)

const getUserToken = () =>
  window.localStorage.getItem('user-token')
    ? window.localStorage.getItem('user-token')
    : ''

const postQl = (model) => (query) => {
  model.state.isLoading = true
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
      .then(res, parseHttpError(rej))
  )
}

const postTask = (url) => ({ dto }) =>
  new Task((rej, res) =>
    m
      .request({
        method: 'POST',
        url: `${baseUrl}/${APP_ID}/${API_KEY}/${url}`,
        data: dto,
        headers: { 'user-token': getUserToken() },
        withCredentials: false,
      })
      .then(res, parseHttpError(rej))
  )

const putTask = (url) => ({ dto }) =>
  new Task((rej, res) =>
    m
      .request({
        method: 'PUT',
        url: `${baseUrl}/${APP_ID}/${API_KEY}/${url}`,
        data: dto,
        headers: { 'user-token': getUserToken() },
        withCredentials: false,
      })
      .then(res, parseHttpError(rej))
  )

const getTask = (url) =>
  new Task((rej, res) =>
    m
      .request({
        method: 'GET',
        url: `${baseUrl}/${APP_ID}/${API_KEY}/${url}`,
        headers: { 'user-token': getUserToken() },
        withCredentials: false,
      })
      .then(res, parseHttpError(rej))
  )

const deleteTask = (url) => (id) =>
  new Task((rej, res) =>
    m
      .request({
        method: 'DELETE',
        url: `${baseUrl}/${APP_ID}/${API_KEY}/${url}/${id}`,
        headers: { 'user-token': getUserToken() },
        withCredentials: false,
      })
      .then(res, parseHttpError(rej))
  )

const http = { postQl, postTask, getTask, putTask, deleteTask }

export default http
