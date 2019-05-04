import http from '../http.js'
import Task from 'data.task'

const toDto = (dto) => ({ dto })

const toEventDto = ({ event: { description, location, startDate, title } }) =>
  toDto({
    description,
    location,
    startDate,
    title,
  })

export const getGroupData = (model) => (id) =>
  http.getTask(model)(`/data/Groups/${id}`)

export const saveGroup = (model) => (name) =>
  http.postTask(model)('data/Groups')(toDto({ name }))

export const updateGroupName = (model) => (id, name) =>
  http.putTask(model)(`data/Groups/${id}`)(toDto({ name }))

export const assocUserToGroup = (model) => (userId) => ({ objectId }) =>
  http.putTask(model)(`data/Groups/${objectId}/members`)(toDto([userId]))

const assocEventToGroup = (model) => (groupId) => (eventId) =>
  http.putTask(model)(`data/Groups/${groupId}/events`)(toDto([eventId]))

export const saveEvent = (model) => (event) => (groupId) =>
  http
    .postTask(model)('data/Events')(toEventDto({ event }))
    .chain(({ objectId }) =>
      Task.of((userEventAssoc) => (groupEventAssoc) => {
        userEventAssoc, groupEventAssoc
      })
        .ap(assocUserToEvent(model)(model.user.objectId)(objectId))
        .ap(assocEventToGroup(model)(groupId)(objectId))
    )

export const updateEventDetails = (model) => (event) =>
  http.putTask(model)(`data/Events/${event.objectId}`)(toEventDto({ event }))

export const assocUserToEvent = (model) => (userId) => (eventId) =>
  http.postTask(model)(`data/Events/${eventId}/hostedBy`)(toDto([userId]))
