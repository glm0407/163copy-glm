<template>
   <div>
     <div class="sceneLight">
       <ul>
         <li v-for="(sceneLight,index) in homeData.sceneLightShoppingGuideModule" :key="index">
           <p class="title">{{sceneLight.styleItem.title}}</p>
           <p class="desc">{{sceneLight.styleItem.desc}}</p>
           <div>
             <img :src="sceneLight.styleItem.picUrlList[0]" v-lazy="sceneLight.styleItem.picUrlList[0]">
             <img :src="sceneLight.styleItem.picUrlList[1]" v-lazy="sceneLight.styleItem.picUrlList[1]">
           </div>
         </li>
       </ul>

     </div>
     <Split></Split>
   </div>

</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'sceneLight',
    computed:{
      ...mapState(['homeData'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .sceneLight
    width 100%
    display flex
    justify-content center
    align-items center
    >ul
      display flex
      flex-wrap wrap
      justify-content center
      >li
        display inline-block
        height 260px
        margin 4px 0 0 4px
        padding 20px 0 0 20px
        border-radius 4px
        background-color #f5f5f5
        .title
          padding-left 10px
          color #333
          font-size 32px
        .desc
          margin-top 20px
          margin-bottom 10px
          padding-left 10px
          color #7f7f7f
          font-size 24px
        div
          display flex
          justify-content center
          img
            width 150px
            height 150px
            margin-right 4px
            padding-top 20px


</style>
