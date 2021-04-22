/*
 * @Author: gp
 * @Date: 2021-04-22 18:20:00
 * @LastEditTime: 2021-04-22 18:31:50
 * @Description: 
 * @FilePath: \baobao01\src\api\index.js
 *  
 */
import request from './request'

export function themeLoopDetail (params) {
  return request.post('/openschool/schoolscreennew/themeLoopDetail', params)
}


export function fetchList(query) {
  return request({
    url: '/vue-element-admin/article/list',
    method: 'get',
    params: query
  })
}


export function updateArticle(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}