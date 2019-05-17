<template>
  <div class="email_login_box">
    <div class="top_logo">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="netease"/>
    </div>

    <label class="input_email">
      <input
        type="text" placeholder="请输入邮箱"
        v-model="email" name="email"
        v-validate="'required|email'"
      />
      <span style="color: red;font-size: 30px;" v-show="errors.has('email')">{{ errors.first('email') }}</span>
    </label>

    <label class="input_code">
      <input
        type="text" placeholder="请输入密码"
        v-model="pwd"
        name="密码" v-validate="'required'"
      />
      <span style="color: red;font-size: 30px">{{errors.first('密码')}}</span>
      <div class="get_password">获取验证码</div>
    </label>
    <div class="login_help">
      <span>遇到问题? </span>
      <span>使用密码验证登录</span>
    </div>
    <div class="login_btn" :class="{active:isActive}">登录</div>
    <div class="back_btn" @click="$router.replace('/personal')">其他登录方式</div>
    <div class="register_btn">注册账号 &gt;</div>
  </div>
</template>

<script>
  export default {
    name: 'emailLogin',
    data(){
      return{
        isActive:true,
        email:'',
        pwd:''
      }

    }

  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .email_login_box
    background-color: #fff
    .top_logo
      width 100%
      height 133px
      text-align center
      margin-top 40px
      img
        width 192px
        height 64px
        margin 0 auto
    .input_email,
    .input_code
      display block
      width 675px
      height 90px
      margin 70px auto
      input
        display block
        width 100%
        height 100%
        outline none
        border 0 none
        border-bottom 1px solid #bdbdbd
        font-size 30px
        line-height 45px
    .input_code
      position relative
      .get_password
        position absolute
        right 0
        bottom 0
        width 173px
        height 56px
        line-height 56px
        text-align center
        font-size 28px
        border 1px solid #333
        border-radius  10px
    .login_help
      font-size 28px
      line-height 45px
      margin 30px 30px
      display flex
      justify-content space-between
      align-items center
    .login_btn,
    .back_btn
      width 677px
      height 96px
      margin 32px auto
      color #b4282d
      font-size 28px
      display flex
      justify-content center
      align-items center
      border 1px solid #b4282d
    .active
        color #fff
        background-color #b4282d
    .register_btn
      margin-top 32px
      font-size 28px
      line-height 40px
      color #333
      text-align center
</style>
