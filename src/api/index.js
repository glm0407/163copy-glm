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


//---分类列表数据
export const reqCatagory = () => ajax('/mock/category')

//---首页数据
export const reqHomeData = () => ajax('/mock/home')
