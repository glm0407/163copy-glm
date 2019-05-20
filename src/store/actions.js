import {reqTabs,reqRecommend,reqCatagory,reqHomeData} from '../api'

import {REQTABS_NAME,REQRECOMMEND_DATA,CATEGORYDATA_,HOME_DATA} from './mutation-types'

export default {
  //获取识物导航栏信息
  async getTabs ({commit}) {
    const result = await reqTabs()
    const taps = result.data
    if(result.code==="200"){
      commit(REQTABS_NAME,taps)
    }
  },

  //获取识物推荐信息
  async getRecommend({commit}){
    const result = await reqRecommend()
    const recommend = result.data
    if(result.code==="200"){
      commit(REQRECOMMEND_DATA,{recommend})
    }
  },

  //获取分类列表
  async getCategory({commit}){
    const result = await reqCatagory()
    const categoryData = result.data.categoryL1List
    if(result.code===0){
       commit(CATEGORYDATA_,{categoryData})
    }
  },
  //获取首页数据
  async getHomeData({commit}){
    const result = await reqHomeData()
    const homeData = result.data
    if(result.code === 0){
      commit(HOME_DATA,{homeData})
    }
  }

}
