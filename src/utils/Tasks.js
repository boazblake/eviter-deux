// import m from 'mithril'
// import Task from 'data.task'

// const baseUrl = 'http://localhost:4466/'

// const postTask = (url) => ({ dto }) =>
//   new Task((rej, res) =>
//     m
//       .request({
//         method: 'POST',
//         url: `${baseUrl}/${url}`,
//         data: dto,
//         withCredentials: false,
//       })
//       .then(res, rej)
//   )

// const putTask = (url) => ({ dto }) =>
//   new Task((rej, res) =>
//     m
//       .request({
//         method: 'PUT',
//         url: `${baseUrl}/${url}`,
//         data: dto,
//         withCredentials: false,
//       })
//       .then(res, rej)
//   )

// const getTask = (url) =>
//   new Task((rej, res) =>
//     m
//       .request({
//         method: 'GET',
//         url: `${baseUrl}/${url}`,
//         withCredentials: false,
//       })
//       .then(res, rej)
//   )

// const deleteTask = (url) => (id) =>
//   new Task((rej, res) =>
//     m
//       .request({
//         method: 'DELETE',
//         url: `${baseUrl}/${url}/${id}`,
//         withCredentials: false,
//       })
//       .then(res, rej)
//   )

// export default { postTask, putTask, getTask, deleteTask }
