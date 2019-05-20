<template>
  <div>
    <header class="header_box">
      <div class="search">
        <img data-v-c94ea186="" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="网易严选">
        <div class="search_box">
          <span>
            <img data-v-c94ea186="" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="放大镜">
          </span>
          <span>搜索商品，共219928件好物</span>
        </div>
        <div class="login_btn" @click="$router.push('/personal')">登录</div>
      </div>
      <div class="home_nav_wrap">
        <ul>
          <li class="on">推荐</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>个护清洁</li>
          <li>限时购</li>
          <li>母婴亲子</li>
          <li>运动旅行</li>
          <li>数码家电</li>
        </ul>
      </div>
      <div class="jiantou">
        <div class="img_nav">
          <img data-v-c94ea186="" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png" alt="展开" class="">
        </div>
      </div>
      <div class="mask">
        <p>全部频道</p>
        <div class="mask_detail">
          <ul>
            <li>推荐</li>
            <li>居家生活</li>
            <li>服饰鞋包</li>
            <li>美食酒水</li>
            <li>个护清洁</li>
            <li>限时购</li>
            <li>母婴亲子</li>
            <li>运动旅行</li>
            <li>数码家电</li>
          </ul>
        </div>
      </div>
    </header>
  </div>

</template>

<script>
  export default {
    name: 'homeNav'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .header_box
    width 100%
    height 146px
    position fixed
    left 0
    top 0
    display flex
    justify-content center
    align-items center
    z-index 10
    .search
      position absolute
      top 0
      width 100%
      height 72px
      display flex
      img
        width 138px
        height 40px
        display inline-block
        margin 20px 10px 10px 20px
      .search_box
        width 487px
        height 56px
        font-size 28px
        background-color #ededed
        display flex
        justify-content center
        align-items center
        margin-top 10px
        color #666
        img
          display inline-block
          width 28px
          height 28px
      .login_btn
        float right
        margin 15px 10px
        width 76px
        height 42px
        line-height 42px
        text-align center
        color #b4282d
        border 1px solid #b4282d
        border-radius 4px
        font-size 24px
        display flex
        justify-content center
        align-items center
    .home_nav_wrap
      position absolute
      top 30px
      height 66px
      overflow hidden
      display flex
      bottom-border-1px(#999)
      >ul
        display flex
        white-space nowrap
        height 100%
        justify-content space-around
        align-items center
        >li
          height 100%
          line-height 66px
          text-align center
          padding 0 30px
          &.on
            color #b4282d
            bottom-border-1px(#b4282d)
          &.on:after
            content: '';
            display: block;
            height: 5px;
            background: #b4282d;
    .jiantou
      .img_nav
        position absolute
        right 0
        top 72px
        width 100px
        height 60px
        line-height 60px
        text-align center
        background #fff
        z-index 10
        img
          width 28px
          height 28px
    .mask
      position absolute
      top 72px
      width 100%
      background #fff
      display none
      p
        font-size 28px
        height 60px
        padding-left 30px
        display flex
        align-items center
      .mask_detail
        width 100%
        >ul
          width 100%
          padding-left 15px
          display flex
          justify-content flex-start
          flex-wrap wrap
          >li
            width 165px
            font-size 28px
            height 60px
            line-height 60px
            color #333
            background-color #fafafa
            border-radius 8px
            display flex
            align-items center
            justify-content center
            border 2px solid #d9d9d9
            margin 5px


</style>
