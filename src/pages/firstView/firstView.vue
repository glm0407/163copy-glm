<template>
  <div class="first_view">
    <homeNav></homeNav> <!--//头部导航-->
    <swiper></swiper>   <!--轮播图-->
    <policy></policy>   <!--30天无忧退款-->
    <div class="body_nav">
      <ul>
        <li v-for="(kingKong,index) in homeData.kingKongModule.kingKongList" :key="index">
          <a href="##">
            <img :src="kingKong.picUrl">
          </a>
          <p>{{kingKong.text}}</p>
        </li>

      </ul>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import homeNav from './homeNav/homeNav'
  import swiper from './Swiper/swiper'
  import policy from './policy/policy'
  import {mapState} from 'vuex'
  export default {
    name: 'firstView',
    mounted () {
      new BScroll('.home_nav_wrap',{
        scrollX:true,
        click:true
      })
      this.$store.dispatch('getHomeData')

    },
    computed:{
      ...mapState(['homeData'])
    },
    components:{
      homeNav,
      swiper,
      policy
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .first_view
    width 100%
    overflow hidden
    .body_nav
       width 100%
       >ul
         width 100%
         display flex
         justify-content space-around
         align-items center
         flex-wrap wrap
         >li
           width 110px
           height 156px
           text-align center
           margin 10px 20px 0
           img
             width 110px
             height 110px
             border-radius 20%

</style>
