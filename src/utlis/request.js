import axios from 'axios'

const request = axios.create({
  baseURL: 'https://ypyh.gdzc100.com/api' // 基础路径
})

export default request
