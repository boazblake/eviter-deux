import Task from 'data.task'

const url = 'https://api.graph.cool/simple/v1/cj5u4etx4bw5t01228cbd6pw9'

const BearerToken =
  'shindigit eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTUwODE4NzcsImNsaWVudElkIjoiY2o1dTRldHg0Ync1dTAxMjJtYnlpdTJ1eiIsInByb2plY3RJZCI6ImNqNXU0ZXR4NGJ3NXQwMTIyOGNiZDZwdzkiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqdWU3bGpyYzVrcnowMTQ0ZGZzMng0bzQifQ.1oMt3f6TOsRtjTc0a_-9aPRemGWvs3CJ8BoYaayRdHk'

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
  )},password:${JSON.stringify(password)}}){user {id}}}`

  return postQl(model)({ query })
}

export const registerReq = (model) => ({ email, password }) => {
  let query = `mutation{createUser(authProvider:{email:{email:${JSON.stringify(
    email
  )},password:${JSON.stringify(password)}}){id}}`

  return postQl(model)({ query })
}

export const findAllInvites = (model) => {
  let query = `query{allInvitations(filter:{user:{id:${JSON.stringify(
    model.user.id
  )}}}){id}}`

  return postQl(model)({ query })
}

export const getInvite = (model) => (id) => {
  let query = `query{Invite(id:${JSON.stringify(
    id
  )}){id,partySize,response,event{id, date, title, hostedBy{email} invitations{partySize, response}}}}`

  return postQl(model)({ query })
}

export const updateInviteWithResponse = (model) => (key) => (rsvp) => {
  let query = `mutation{updateInvite(id:${JSON.stringify(
    key
  )},response:${rsvp}){id,partySize,response,event{id,date,title,hostedBy{email}invitations{partySize, response}}}}`

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
// createInvite(
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
