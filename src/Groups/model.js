import http from '../http.js'
import { compose } from 'ramda'

const getGroup = (model) => (dto) =>
  http.getTask(model)(`data/Groups?${dto}&loadRelations=members`)

const toDto = (id) => encodeURI(`where=members.objectId = '${id}'`)

export const findGroups = (model) =>
  compose(
    getGroup(model),
    toDto
  )
