
import {
  REQRECOMMEND_DATA,
  REQTABS_NAME,
  CATEGORYDATA_,
  HOME_DATA
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
  }
}
