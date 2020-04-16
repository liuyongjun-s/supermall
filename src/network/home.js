import {request} from "./request";

// export function getHomeMultidata() {
//   return request({
//     url: '/home/multidata'
//   })
// }


export function getRegistrationFindAll() {
  return request({
    url: '/registration/findAll'
  })
}

export function saveClientInfo(data) {
  return request({
    url: '/client/save',
    method: 'post',
    data
  })
}

export function getFindInfo(params) {
  return request({
    url: '/mentoring/findAll',
    method: 'get',
    params
  })
}

export function getEnterInfo(params) {
  return request({
    url: '/enterprise/findAll',
    method: 'get',
    params
  })
}

export function getCallInfo(params) {
  return request({
    url: '/message/getAll',
    method: 'get',
    params
  })
}

export function getAboutInfo(params) {
  return request({
    url: '/message/aboutUs',
    method: 'get',
    params
  })
}

export function getNewsInfo(params) {
  return request({
    url: '/journalism/findAll',
    method: 'get',
    params
  })
}

export function getRegistInfo(params) {
  return request({
    url: '/registration/findAll',
    method: 'get',
    params
  })
}

export function getSubInfo(data) {
  return request({
    url: '/subscribe/save',
    method: 'post',
    data
  })
}




// export function getRegistrationFindAll() {
//   return request({
//     url: '/registration/findAll',
//     method: 'post',
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     },
//     data: formData,
//     transformRequest: [function (data, headers) {
//       const formData = new FormData()
//       for (const key of Object.keys(data)) {
//         formData.append(key, data[key])
//       }
//       return formData
//     }]
//   })
// }

// 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const names = ['why', 'aaa']
// }
//
// test()
//
// test()


// export function uploadModel () {
//   return request({
//     url: '/registration/findAll',
//     method: 'post',
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     },
//     data: formData,
//     transformRequest: [function (data, headers) {
//       const formData = new FormData()
//       for (const key of Object.keys(data)) {
//         formData.append(key, data[key])
//       }
//       return formData
//     }]
//   })
// }

// const uploadModel = function (formData) {
//   return request({
//     url: '/registration/findAll',
//     method: 'post',
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     },
//     data: formData,
//     transformRequest: [function (data, headers) {
//       const formData = new FormData()
//       for (const key of Object.keys(data)) {
//         formData.append(key, data[key])
//       }
//       return formData
//     }]
//   })
// }
