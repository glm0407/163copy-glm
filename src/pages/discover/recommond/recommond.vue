<template>
  <div>
    <div class="wrap" v-if="recommendData" v-for="(recommend,index) in recommendData" :key="index">
      <div class="discover_container"  v-for="(item,index) in recommend.topics" :key="index + Date.now()">
        <div class="discover_body_first" v-if="item.style===1">
          <ul>
            <li>
              <div class="user">
                <img v-lazy="item.avatar">
                <span>{{item.nickname}}</span>
              </div>
              <div class="title">
                {{item.title}}
              </div>
              <img v-lazy="item.picUrl">
              <div class="find_person">
                <span class="iconfont iconyanjing"></span>
                <span>{{item.readCount}}人看过</span>
              </div>
            </li>

          </ul>

        </div>

        <div class="discover_body_second" v-if="item.style===2">
          <ul>
            <li class="first_li">
              <div class="user">
            <span>
              <img v-lazy="item.avatar">
            </span>
                <span>
             {{item.nickname}}
            </span>
              </div>
              <div class="title">
            <span>
              {{item.title}}
            </span>
              </div>
              <div class="discount">
            <span>
              {{item.subTitle}}
            </span>
              </div>
              <div class="find_person">
                <span class="iconfont iconyanjing"></span>
                <span>{{item.readCount}}人看过</span>
              </div>
            </li>
            <li class="second_li">
              <img v-lazy="item.picUrl">

            </li>

          </ul>

        </div>
        <Split></Split>

      </div>
    </div>

  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: 'recommond',
    async mounted(){
      new BScroll('.discover_container',{
         click:true
      })
      await this.$store.dispatch("getRecommend")

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
      margin-top 5px
      display flex
      align-items center
      >ul
        width 100%
        height 100%
        padding 0 30px
        .user
          margin-top 20px
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
