import http from '../http.js'
import { compose } from 'ramda'

const getGroup = (dto) =>
  http.getTask(`data/Groups?${dto}&loadRelations=members`)

const toDto = (id) => encodeURI(`where=members.objectId = '${id}'`)

export const findGroups = compose(
  getGroup,
  toDto
)
