import Task from 'data.task'

import TOKEN from './secrets.js'

const url = 'https://api.graph.cool/simple/v1/cj5u4etx4bw5t01228cbd6pw9'

const BearerToken = `shindigit ${TOKEN}`

const makeQuery = (string) => JSON.parse(JSON.stringify(string))

const parseResponse = (model) => ({ data, errors }) => {
  model.state.isLoading = false
  return errors ? Promise.reject(errors) : Promise.resolve(data)
}

export const postQl = (model) => (query) => {
  model.state.isLoading = true
  return new Task((rej, res) =>
    m
      .request({
        method: 'POST',
        url: url,
        withCredentials: false,
        data: makeQuery(query),
        headers: {
          Authorization: BearerToken,
        },
      })
      .then(parseResponse(model))
      .then(res, rej)
  )
}

export const loginReq = (model) => ({ email, password }) => {
  let query = `mutation {signinUser(email:{email:${JSON.stringify(
    email
  )},password:${JSON.stringify(password)}}){user {id, username}}}`

  return postQl(model)({ query })
}

export const registerReq = (model) => ({ email, password, username }) => {
  let query = `mutation{createUser(authProvider:{email:{email:${JSON.stringify(
    email
  )},password:${JSON.stringify(password)},username:${JSON.stringify(
    username
  )}){id, username}}`

  return postQl(model)({ query })
}

export const findAllGroups = (model) => {
  let query = `query{allGroups(filter:{members_every:{id:${JSON.stringify(
    model.user.id
  )}}}){id}}`

  return postQl(model)({ query })
}

export const findAllInvites = (model) => {
  let query = `query{allInvitations(filter:{user:{id:${JSON.stringify(
    model.user.id
  )}}}){id}}`

  return postQl(model)({ query })
}

export const findGroupInvites = (model) => {
  let query = `query{allInvitations(filter:{groups_some:{id:${JSON.stringify(
    model.state.group.id
  )}}}){id}}`

  return postQl(model)({ query })
}

export const getGroup = (model) => (id) => {
  let query = `query{Group(id:${JSON.stringify(id)}){id, name, members {id}}}`

  return postQl(model)({ query })
}

export const createGroup = (model) => ({ data: { name } }) => {
  let query = `mutation{createGroup(name:${JSON.stringify(
    name
  )}, membersIds:[${JSON.stringify(model.user.id)}]){id, name, members{id}}}`

  return postQl(model)({ query })
}

export const createEvent = (model) => ({
  data: { title, description, location, date },
}) => {
  let query = `mutation{createEvent(hostedById:${JSON.stringify(
    model.user.id
  )},title:${JSON.stringify(title)},description:${JSON.stringify(
    description
  )},location:${JSON.stringify(location)},date:${JSON.stringify(date)}){id}}`

  return postQl(model)({ query })
}

export const joinEvent = (model) => ({ createEvent: { id } }) => {
  let query = `mutation{createInvitation(userId:${JSON.stringify(
    model.user.id
  )},eventId:${JSON.stringify(id)},partySize:1,response:Yes){id}}`

  return postQl(model)({ query })
}

export const getInvite = (model) => (id) => {
  let query = `query{Invitation(id:${JSON.stringify(
    id
  )}){id,partySize,response,event{id, date, title, hostedBy{email} invites{partySize, response}}}}`

  return postQl(model)({ query })
}

export const updateInviteWithResponse = (model) => (key) => (rsvp) => {
  let query = `mutation{updateInvitation(id:${JSON.stringify(
    key
  )},response:${rsvp}){id,partySize,response,event{id,date,title,hostedBy{email}, invites{partySize, response}}}}`

  return postQl(model)({ query })
}

// Create Event
//  mutation {
//      createEvent(
//          	hostedById: "cjue72u6q007t01390uzladz5",
//            date: "2015-11-22T13:57:31.123Z",
//          	location: "at my home",
//       		  title: "boazs ebent"
//        		description: "this is the best event in the world"
//     ) {
//          id
//   }
// }

//create Invite
// mutation {
// createInvitation(
//   userId: "cjue72u6q007t01390uzladz5",
//   eventId: "cjueplkft04hn0101usyxubaz",
//   partySize: 1,
//   response: Yes){
//   id
// }
// }

// All  events
// query {
//   allEvents(filter: {
//     hostedBy: {
//       id: "cjue72u6q007t01390uzladz5"
//     }
//   }
//   ){
//     id
//   }
// allInvitations(filter: {
//   user: {
//     id: "cjue72u6q007t01390uzladz5"
//   }
// }){
//   id
// }
// }
