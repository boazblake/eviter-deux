import http from '../http.js'
import { compose } from 'ramda'

export const deleteEvent = (model) => (id) =>
  http.deleteTask(model)('data/Events')(id)

const getEvent = (model) => (groupId) => (dto) =>
  http.getTask(model)(`data/Groups/${groupId}?${dto}&loadRelations=events`)

const toDto = (id) => encodeURI(`where=members.objectId = '${id}'`)

export const findEvents = (model) => (groupId) =>
  compose(
    getEvent(model)(groupId),
    toDto
  )
