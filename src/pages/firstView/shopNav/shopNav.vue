<template>
  <div>
    <div class="body_nav">
      <ul v-if="homeData.kingKongModule">
        <li v-for="(kingKong,index) in homeData.kingKongModule.kingKongList" :key="index">
          <a href="javascript:">
            <img v-lazy="kingKong.picUrl">
          </a>
          <p>{{kingKong.text}}</p>
        </li>

      </ul>
    </div>
    <div class="picture">
      <img data-v-3bf6d6bb="" v-lazy="imgUrl" alt="bossRecommen">
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'shopNav',
    data(){
      return{
        imgUrl:'https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png'
      }
    },
    computed:{
      ...mapState(['homeData'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

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

  .picture
    height 160px
    padding-top 40px
    margin-bottom 40px
    background-color #fff
    img
      height 160px

</style>
