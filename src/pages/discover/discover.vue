<template>
  <div class="discover_container">
    <headerSlot class="headerSlot">
      <div slot="fond">
        <span :class="{active:isActive}" @click="isActive=true;$router.push('/discover/recommond')">发现</span>
      </div>
      <div slot="specia_choice">
        <span :class="{active:!isActive}" @click="isActive=false;$router.push('/discover/commont')">甄选家</span>
      </div>
    </headerSlot>
    <div class="main_discover_nav">
       <ul>
         <li v-for="(tab,index) in tabs" :key="index"
             :class="{on:indexId===tab.tabId}"
             @click="handChange(tab.tabId)"
         >
           {{tab.tabName}}
         </li>
         <div class="split"></div>
       </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: 'discover',
    data(){
      return{
        indexId:9,
        isActive:true
      }
    },
    async mounted () {
      new BScroll('.main_discover_nav',{
        scrollX:true,
        click:true
      })
      await this.$store.dispatch("getTabs")
      await this.$store.dispatch("getRecommend")
    },
    methods:{
      handChange(tabId){
        this.indexId =tabId
        switch (tabId) {
          case 9: {    // 推荐
            this.$router.replace("/discover/recommond");
            break
          }
          case 10: {    // 收纳秘诀
            // this.$router.replace("/things/collectionsecret");
            this.$router.replace("/discover/recommond");
            break
          }
          case 12: {    // 20元好物
            break
          }
          case 7: {    // 晒单
            this.$router.replace("/discover/commont");
            break
          }
          case 4: {    // 达人
            // this.$router.replace("/things/superbuyer");
            this.$router.replace("/discover/recommond");
            break
          }
          case 6: {    // HOME
            // this.$router.replace("/things/thingshome");
            this.$router.replace("/discover/recommond");
            break
          }
          default: {
            console.log("Router Switch Error.")
            this.$router.replace("/discover/commont");
          }
        }
      },
    },
    computed:{
      ...mapState(['tabs'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .discover_container
    width 100%
    position relative
    height 100%
    overflow hidden
    .headerSlot
      div
        &.active
          font-weight 700
          font-size 36px
          color #b4282d
    //头部导航
    .main_discover_nav
      position fixed
      top 88px
      left 0
      height 75px
      font-size 28px
      color #333
      margin-bottom 80px
      bottom-border-1px(#999)
      display flex
      z-index 10
      >ul
        height 100%
        white-space nowrap
        display flex
        justify-content space-around
        >li
          height 100%
          padding 0 10px
          margin 0 10px
          line-height 74.5px
          &.on
            color #b4282d
          &.on:after
            content: '';
            display: block;
            height: 5px;
            background: red;

</style>
