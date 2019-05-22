<template>
  <div class="first_view">
    <homeNav></homeNav> <!--//头部导航-->
    <swiper></swiper>   <!--轮播图-->
    <policy></policy>   <!--30天无忧退款-->
    <shopNav></shopNav>   <!--商品导航区-->
    <sceneLight></sceneLight>
    <!--类目热销榜-->
    <popular></popular>
    <!--人气推荐-->
    <popular_recommond></popular_recommond>
    <FlashSale></FlashSale>  <!--限时购-->

    <NewGoods></NewGoods>  <!--新品首发-->


    <div v-if="homeData.categoryModule">
      <div class="categoryModule" v-for="(categorys,index) in homeData.categoryModule" :key="index">
        <img v-lazy="categorys.titlePicUrl" alt="标题图片">
        <div class="categoryModule_wrap" :class="'categoryModule_wrap_'+index">
          <ul v-if="categorys">
            <li v-for="(item,index) in categorys.itemList" :key="index">
              <img v-lazy="item.primaryPicUrl">
              <div class="good_info">
                <span class="good_name">{{item.name}}</span><br>
                <span class="good_price">￥{{item.retailPrice}}</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

    </div>



    <!--底部-->
    <lastFoot></lastFoot>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import homeNav from './homeNav/homeNav'
  import swiper from './Swiper/swiper'
  import policy from './policy/policy'
  import shopNav from './shopNav/shopNav'
  import sceneLight from './sceneLight/sceneLight'
  import popular from './popular/popular'
  import popular_recommond from './popular_recommond/popular_recommond'
  import NewGoods from './NewGoods/NewGoods'
  import FlashSale from './FlashSale/FlashSale'
  import lastFoot from './lastFoot/lastFoot'
  import {mapState} from 'vuex'
  export default {
    name: 'firstView',
    mounted () {

      this.$store.dispatch('getHomeData')

    },
    watch:{
      homeData(){
        this.$nextTick(() => {
          new BScroll('.home_nav_wrap',{
            scrollX:true,
            click:true
          })
          for(let i=0; i<this.homeData.categoryModule.length;i++){
            new BScroll(".categoryModule_wrap_"+i, {click: true, scrollX: true})
          }
        })
      }
    },
    computed:{
      ...mapState(['homeData'])
    },
    components:{
      homeNav,
      swiper,
      policy,
      shopNav,
      sceneLight,
      popular,
      popular_recommond,
      NewGoods,
      FlashSale,
      lastFoot
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .first_view
    width 100%
    overflow hidden
    .categoryModule
       width 100%
       img
         width 100%
         height 400px
       .categoryModule_wrap
         display flex
         >ul
           display flex
           >li
             width 200px
             height 300px
             display inline-block
             margin-right 20px
             margin-top 20px
             /*background-color #f5f5f5*/
             font-size 24px
             img
               width 200px
               height 200px
               background-color #f5f5f5
             .good_info
               .good_price
                  color indianred


</style>
