<template>
  <div>
    <ul class="container">
      <li v-for="(policy,index) in homeData.policyDescList" :key="index">
        {{policy.desc}}
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'policy',
    computed:{
      ...mapState(['homeData'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .first_view
    width 100%
    overflow hidden
    .container
      width 100%
      height 72px
      line-height 72px
      display flex
      justify-content space-around
      text-align center
      padding 0 15px
      color #b4282d
</style>
