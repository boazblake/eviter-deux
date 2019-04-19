import http from '../http.js'

const toDto = (dto) => ({ dto })

export const getGroupData = (model) => (id) =>
  http.getTask(model)(`/data/Groups/${id}`)

export const saveGroup = (model) => (name) =>
  http.postTask(model)('data/Groups')(toDto({ name }))
export const updateGroup = (model) => (id, name) =>
  http.putTask(model)(`data/Groups/${id}`)(toDto({ name }))

export const assocUserToGroup = (model) => (userId) => ({ objectId }) =>
  http.putTask(model)(`data/Groups/${objectId}/members`)(toDto([userId]))
