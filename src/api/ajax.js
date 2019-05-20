/*
* 能发送ajax请求的函数
*
* */
import axios from 'axios'
import {MessageBox} from 'mint-ui'
export default function ajax(url, data={}, method='GET') {

  return new Promise((resolve, reject) => {
    // 执行异步ajax请求
    let promise
    if(method==='GET') {
      promise = axios.get(url,  { // 配置对象
        params: data// 指定query参数
      })
    } else {
      promise = axios.post(url, data)
    }

    promise.then(response => { // 请求成功, 调用resolve(response.data)
      resolve(response.data)
    }).catch(error => {  // 请求出错了, 不调用reject(), 直接提示(外部不需要处理异常)
      MessageBox.alert('请求出错: ' + error.message)
    })
  })
}
