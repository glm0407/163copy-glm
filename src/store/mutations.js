
import {
  REQRECOMMEND_DATA,
  REQTABS_NAME,
  CATEGORYDATA_,
  HOME_DATA,
  COMMENTDATA_
} from './mutation-types'
export default {
  [REQTABS_NAME](state,tabs){
    state.tabs = tabs
  },
  [REQRECOMMEND_DATA](state,{recommend}){
    state.recommendData = recommend
  },
  [CATEGORYDATA_](state,{categoryData}){
    state.categoryData = categoryData
  },
  [HOME_DATA](state,{homeData}){
    state.homeData = homeData
  },
  [COMMENTDATA_](state,commentData){
    state.commentData = commentData
  }
}
