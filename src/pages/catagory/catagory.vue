<template>
  <div class="wrap">
    <div class="header">
      <div class="header_box">
        <div>
          <img data-v-70813d9b="" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt="search">
          <span>搜索商品，共19999件好物</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="nav_left">
        <ul>
          <li :class="{on:categoryData[curIndex] === category}"
              v-for="(category,index) in categoryData" :key="index"
              @click="handle(index)"
          >
            <span>{{category.name}}</span>
          </li>
        </ul>
      </div>
      <div class="content_right" v-if="categoryData[curIndex]">
        <div class="content_right_">
          <img v-lazy="categoryData[curIndex].wapBannerUrl">
          <ul>
            <li v-for="(sub,index) in categoryData[curIndex].subCateList" :key="index">
              <div>
                <img v-lazy="sub.wapBannerUrl" alt="logo">
                <div>{{sub.name}}</div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: 'firstView',
    data(){
      return{
        curIndex:0
      }
    },
    mounted(){
      this.$store.dispatch('getCategory')
    },
    watch:{
      categoryData(){
        new BScroll('.nav_left',{
          click:true
        })
        this.$nextTick(() => {
          new BScroll('.content_right',{
            click:true
          })
        })
      }
    },
    computed:{
      ...mapState(['categoryData'])
    },
    methods:{
      handle(index){
        this.curIndex = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .wrap
    position relative
    width 100%
    height 100%
    .header
      position fixed
      left 0
      top 0
      z-index 10
      width 100%
      height 88px
      border-bottom 1px solid #eee
      background-color #fff
      display flex
      align-items center
      justify-content center
      .header_box
        width 675px
        height 56px
        line-height 56px
        text-align center
        border-radius 8px
        background-color #ededed
        img
          width 28px
          height 28px
        span
          font-size 28px

    .content
      .nav_left
        position fixed
        top 88px
        left 0
        width 162px
        height 100%
        max-height 1144px
        border-right 1px solid #eee
        >ul
          >li
            width 100%
            height 50px
            line-height 50px
            text-align center
            margin-top 40px
            color #7e8c8d
            font-size 28px
            &.on
              color #777eee
              border-left 6px solid #777eee
      .content_right
        position fixed
        right 0
        top 88px
        width 588px
        height 100%
        display flex
        justify-content center
        div
          height 1700px
          img
            width 528px
            height 192px
            margin-top 20px
          >ul
            position absolute
            top 200px
            width 528px
            margin-top 20px
            display flex
            flex-wrap wrap
            >li
              width 144px
              height 216px
              margin-right 32px
              img
                width 144px
                height 144px
              div
                width 144px
                height 72px
                text-align center

</style>
