<template>
  <div>
    <div class="lastFoot">
      <div class="download">
        <a href="javascript:">下载app</a>
        <a href="javascript:">电脑版</a>
      </div>
      <p class="explain">
        <span>网易公司版权所有  952452046@qq.com</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lastFoot'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .lastFoot
    width 100%
    height 274px
    background-color #414141
    display flex
    flex-direction column
    align-items center
    font-size 24px
    padding-bottom 100px
    .download
      width 100%
      height 65px
      margin 20px 0
      display flex
      justify-content center
      align-items center
      a
        display inline-block
        margin-right 20px
        padding 18px 20px
        color #fff
        border 1px soild #fff
    .explain
      width 320px
      display flex
      text-align center
      justify-content center
      color #999


</style>
