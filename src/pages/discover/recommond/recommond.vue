<template>
  <div class="wrap">
    <div class="discover_container">
      <div class="discover_body_first">
        <ul>
          <li>
            <div class="user">
              <img data-v-b9fc18ce="" src="https://yanxuan.nosdn.127.net/90e5c3caa8890386424716150338b264.png" alt="" data-src="https://yanxuan.nosdn.127.net/90e5c3caa8890386424716150338b264.png" lazy="loaded">
              <span>选妹</span>
            </div>
            <div class="title">
              一口价！全部只要9.9、19.9……为了帮你省钱，选妹拼了！
            </div>
            <img data-v-b9fc18ce="" src="https://yanxuan.nosdn.127.net/0629916beb7e66d482d4ce305ce4b215.jpg" alt="" data-src="https://yanxuan.nosdn.127.net/0629916beb7e66d482d4ce305ce4b215.jpg" lazy="loaded">
            <div class="find_person">
              <span class="iconfont iconyanjing"></span>
              <span>8979人看过</span>
            </div>
          </li>

        </ul>

      </div>
      <Split/>
      <div class="discover_body_second">
        <ul>
          <li class="first_li">
            <div class="user">
            <span>
              <img src="https://yanxuan.nosdn.127.net/8250694e49e4352264c5b8198e0d9575.jpg?imageView&amp;quality=65&amp;thumbnail=56y56" alt="" width="100%" height="100%">
            </span>
              <span>
              网易未央.小周
            </span>
            </div>
            <div class="title">
            <span>
              烟台大樱桃熟了，只有这个季节能吃到
            </span>
            </div>
            <div class="discount">
            <span>
              烟台大樱桃限时7.1折
            </span>
            </div>
            <div class="find_person">
              <span class="iconfont iconyanjing"></span>
              <span>8979人看过</span>
            </div>
          </li>
          <li class="second_li">
            <img src="https://yanxuan.nosdn.127.net/0fc8c4646c9bf99eaccdf5c89815e00b.jpg?imageView&amp;quality=65&amp;thumbnail=272y272" alt="" width="100%" height="100%">

          </li>

        </ul>

      </div>
      <Split/>
    </div>

  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: 'recommond',
    mounted(){
      new BScroll('.discover_container',{
         click:true
      })
    },
    computed:{
      ...mapState(['recommendData'])
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .wrap
    //body部分1
    .discover_body_first
      position relative
      width 100%
      float top
      margin-top 85px
      display flex
      align-items center
      >ul
        width 100%
        height 100%
        padding 0 30px
        .user
          margin-top 50px
          font-size 28px
          padding-left 30px
          display flex
          align-items center
          img
            width 50px
            height 50px
            border-radius 50%
            margin-right 10px
        .title
          height 100px
          font-size 36px
          margin-top 20px
        img
          width 690px
          height 380px
        .find_person
          font-size 24px
          color #999
          display flex
          align-items center
          .iconfont
            font-size 48px
    //body部分2
    .discover_body_second
      width 100%
      float top
      top 70px
      >ul
        height 335px
        .first_li
          position absolute
          left 0
          width 400px
          margin-left 30px
          .user
            margin-top 20px
            font-size 28px
            display flex
            align-items center
            margin-bottom 15px
            img
              width 50px
              height 50px
              border-radius 50%
              margin-right 10px
          .title
            margin-bottom: 15px
            font-size: 36px
            color: #333
          .discount
            font-size: 28px;
            margin-bottom: 30px;
            color: #7f7f7f
          .find_person
            font-size 24px
            color #999
            display flex
            align-items center
        .second_li
          position absolute
          right 0
          img
            width 280px
            height 280px
            margin-right 30px




</style>
