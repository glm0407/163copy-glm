<template>
  <div class="personal_container">
    <headerSlot>
      <span class="headerSlotTitle" slot="netease"></span>
    </headerSlot>
    <div class="main_body" v-if="$route.path==='/personal'">
      <div class="login_logo">
        <img class="img_logo" src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
      </div>
      <div class="login_method">
        <div class="login_phone" :class="{active:isActive}" @click="$router.replace('/personal/phoneLogin')">
          <i class="iconfont iconshouji"></i>
          <span>手机号登录</span>
        </div>
        <div class="login_qq" :class="{active:!isActive}" @click="$router.replace('/personal/emailLogin')">
          <i class="iconfont iconmessage"></i>
          <span>邮箱登录</span>
        </div>
        <div class="quick-login">
          <span>手机号快捷注册</span>
          <i class="iconfont iconjiantouyou"></i>
        </div>
      </div>
      <div class="login_type">
         <div class="login_wechat">
           <i class="iconfont iconiconfont"></i>
           <span>微信</span>
         </div>
          <div  class="login_qq">
            <i class="iconfont iconqq"></i>
            <span>QQ</span>
          </div>
          <div  class="login_weibo">
            <i class="iconfont iconweibo"></i>
            <span>微博</span>
          </div>
      </div>


    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'firstView',
    data(){
      return{
        isActive:true
      }

    },
   /* methods:{
      goToLogin(path){
        this.isActive=!isActive
        this.isShow = false
        this.$router.replace(path)
      },
      setIsShow(){
        this.isActive = true
        this.isShow = true
      },
      goToRegister(path){
        this.isActive=!isActive
        this.isShow = false
        this.$router.replace(path)
      }
    }*/
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .personal_container
    position relative
    height 100%
    .main_body
      position absolute
      top 88px
      height 1335px
      background #f2f5f4
      .login_logo
         width 100%
         height 410px
         line-height 410px
         text-align center
         .img_logo
           width 270px
           height 90px
      .login_method
        padding 0 40px 380px
        .login_phone,.login_qq
          display flex
          align-items center
          justify-content center
          width 670px
          height 100px
          font-size 28px
          color  #b4282d
          border 1px solid #b4282d
          margin-bottom 32px
          .iconfont
            font-size 60px
            margin-right 5px
        .active
          color #fff
          background-color #b4282d
        .quick-login
          display flex
          align-items center
          justify-content center
          font-size 28px
          .iconfont
            font-size 28px
      .login_type
        display flex
        justify-content center
        align-items baseline
        height 40px
        font-size 28px
        .login_wechat, .login_qq, .login_weibo
          float left
          display flex
          text-align center
          align-items center
          padding 0 40px
          color #7f7f7f
          border-left 1px solid #7f7f7f
        .login_wechat
          border none
        i
          font-size 40px
          margin-right 10px
    .headerSlotTitle
      display inline-block
      width 138px
      height 40px
      margin-top 20px
      background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
      background-repeat no-repeat
      background-size 138px 40px
      /*background-position center*/





</style>
