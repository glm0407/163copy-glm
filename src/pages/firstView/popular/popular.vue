<template>
  <section class="popular_wrap">
    <p>类目热销榜</p>
    <div class="popular">
      <ul>
        <li>
          <span>热销榜</span>
          <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png" alt="热销榜">
        </li>
        <li>
          <span>好评榜</span>
          <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/1fa535e25330987297a27e63c27db2e6.png" alt="热销榜">
        </li>
      </ul>
    </div>
    <div class="general">
      <ul>
        <li>
            <span>
              居家生活榜
            </span>
          <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?" alt="热销榜">
        </li>
        <li>
            <span>
              服饰鞋包榜
            </span>
          <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/d84c728c164a77a8c5f0ca153d21fe69.png?" alt="热销榜">
        </li>
        <li>
            <span>
              美食酒水榜
            </span>
          <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/59eb7e52ab114c894a8179bc2991122b.png?" alt="热销榜">
        </li>
        <li>
            <span>
              数码家电榜
            </span>
          <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/cf86ce7b36cc90f5c9b1cbbc5eafd737.png?" alt="热销榜">
        </li>
        <li>
            <span>
              个护清洁榜
            </span>
          <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/ae7f88bdae80b15ac656b0c76f356179.jpg?" alt="热销榜">
        </li>
        <li>
            <span>
              母婴亲子榜
            </span>
          <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/873505d4b94744861ba243e321868530.png?" alt="热销榜">
        </li>
        <li>
            <span>
              运动旅行榜
            </span>
          <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/83e9f1b99b484885f88b5c5443f87cec.png?" alt="热销榜">
        </li>
        <li>
            <span>
              全球特色榜
            </span>
          <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/82de8fdea1c8bba21b26099612ff5605.png?" alt="热销榜">
        </li>
      </ul>
    </div>
    <Split></Split>
  </section>
</template>

<script>
  export default {
    name: 'popular'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .popular_wrap
    width 100%
    overflow hidden
    padding 5px auto
    p
      display block
      height 100px
      line-height 100px
      font-size 32px
      margin-left 30px
    .popular
      height 210px
      >ul
        height 100%
        display flex
        justify-content center
        >li
          position relative
          width 340px
          height 200px
          display flex
          justify-content space-around
          align-items center
          margin 0 10px 10px 0
          background #f9f3e4
          span
            position absolute
            left 0
            margin-left 20px
            font-size 24px
          img
            width 200px
            height 200px
            position absolute
            right 0
    .general
      height 380px
      >ul
        display flex
        justify-content center
        flex-wrap wrap
        >li
          width 165px
          height 180px
          margin 0 10px 10px 0
          background #f5f5f5
          text-align center
          font-size 24px
          span
            padding-top 10px
            display inline-block
          img
            width 120px
            height 120px
</style>
