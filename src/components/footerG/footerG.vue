<template>
  <ul class="footerG border-1px">
    <li :class="{on:$route.path==='/firstView'}" @click="goto('/firstView')">
      <span class="item_icon">
        <i class="iconfont iconshouye-"></i>
      </span>
      <span>首页</span>
    </li>
    <li :class="{on:$route.path==='/catagory'}" @click="goto('/catagory')">
      <span class="item_icon">
        <i class="iconfont iconiconset0497"></i>
      </span>
      <span>分类</span>
    </li>
    <li :class="{on:$route.path==='/discover'||$route.path==='/discover/recommond'||$route.path==='/discover/commont'}"
        @click="goto('/discover/recommond')">
      <span class="item_icon">
        <i class="iconfont icontupian"></i>
      </span>
      <span>识物</span>
    </li>
    <li :class="{on:$route.path==='/shopCart'}" @click="goto('/shopCart')">
      <span class="item_icon">
        <i class="iconfont icongouwuche-"></i>
      </span>
      <span>购物车</span>
    </li>
    <li :class="{on:$route.path==='/personal'}" @click="goto('/personal')">
      <span class="item_icon">
        <i class="iconfont icongerenzhongxin"></i>
      </span>
      <span>个人</span>
    </li>

  </ul>
</template>

<script>
  export default {
    name: 'footer',
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footerG
    position fixed
    bottom 0px
    left 0
    width 100%
    height 100px
    font-size 24px
    display flex
    overflow hidden
    justify-content space-around
    background-color #fff
    margin-top -300px
    z-index 100
    li
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      .item_icon
        display block
        text-align center
        width 40px
        height 40px
        .iconfont
          display block
          font-size 40px
          width 100%
          height 100%
          margin-top 5px
      &.on
        color #b4282d





</style>
