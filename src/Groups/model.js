import http from '../http.js'
import { compose } from 'ramda'
import { log } from '../utils/index.js'

const getGroup = (dto) =>
  http.getTask(`data/Groups?${dto}&loadRelations=members`)

const toDto = (id) => encodeURI(`where=members.objectId = '${id}'`)

export const findGroups = compose(
  getGroup,
  toDto,
  log('wtf')
)
