import http from '../http.js'

const toDto = (dto) => ({ dto })

export const getGroupData = (id) => http.getTask(`/data/Groups/${id}`)

export const saveGroup = (name) => http.postTask('data/Groups')(toDto({ name }))

export const assocUserToGroup = (userId) => ({ objectId }) =>
  http.putTask(`data/Groups/${objectId}/members`)(toDto([userId]))
