/*
* 发送请求得到请求数据的模块
*
* */
import ajax from './ajax'
const BASE = '/api'
//-----识物----推荐（发现）
export const reqRecommend = ()=> ajax(BASE+`/topic/v1/find/recManual.json`)
//----识物---导航栏
export const reqTabs = () => ajax(BASE+'/topic/v1/find/getTabs.json')
//---识物---晒单---上方
export const reqComment = () => ajax(BASE+'/topic/v1/look/getCollection.json?id=76')
//---识物---卖家评价-----
export const reqCom=() => ajax(BASE+'/topic/v1/look/getList.json?page=1')

//---分类列表数据
export const reqCatagory = () => ajax('/mock/category')

//---首页数据
export const reqHomeData = () => ajax('/mock/home')
