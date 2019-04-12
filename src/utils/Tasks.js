import m from 'mithril'
import Task from 'data.task'

// const baseUrl = 'http://localhost:4466/'
const onlineUrl = 'https://api.graph.cool/simple/v1/cj5u4etx4bw5t01228cbd6pw9'
const BearerToken =
  'shindigit eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTUwODE4NzcsImNsaWVudElkIjoiY2o1dTRldHg0Ync1dTAxMjJtYnlpdTJ1eiIsInByb2plY3RJZCI6ImNqNXU0ZXR4NGJ3NXQwMTIyOGNiZDZwdzkiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqdWU3bGpyYzVrcnowMTQ0ZGZzMng0bzQifQ.1oMt3f6TOsRtjTc0a_-9aPRemGWvs3CJ8BoYaayRdHk'
const makeQuery = (string) => JSON.parse(JSON.stringify(string))

export const postQl = (query) =>
  new Task((rej, res) =>
    m
      .request({
        method: 'POST',
        url: `${onlineUrl}`,
        withCredentials: false,
        data: makeQuery(query),
        headers: {
          Authorization: BearerToken,
        },
      })
      .then(res, rej)
  )

const postTask = (url) => ({ dto }) =>
  new Task((rej, res) =>
    m
      .request({
        method: 'POST',
        url: `${onlineUrl}/${url}`,
        data: dto,
        withCredentials: false,
      })
      .then(res, rej)
  )

const putTask = (url) => ({ dto }) =>
  new Task((rej, res) =>
    m
      .request({
        method: 'PUT',
        url: `${onlineUrl}/${url}`,
        data: dto,
        withCredentials: false,
      })
      .then(res, rej)
  )

const getTask = (url) =>
  new Task((rej, res) =>
    m
      .request({
        method: 'GET',
        url: `${onlineUrl}/${url}`,
        withCredentials: false,
      })
      .then(res, rej)
  )

const deleteTask = (url) => (id) =>
  new Task((rej, res) =>
    m
      .request({
        method: 'DELETE',
        url: `${onlineUrl}/${url}/${id}`,
        withCredentials: false,
      })
      .then(res, rej)
  )

export default { postTask, putTask, getTask, deleteTask, postQl }
