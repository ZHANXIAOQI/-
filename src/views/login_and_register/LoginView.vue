<template>
  <div class="login">
    <div class="back-arrow" @click="back">
      <div class="icon-back-arrow"></div>
    </div>
    <div class="logo"></div>
    <div class="user">
      <div class="user-item user-card border-1px-line">
        <span class="icon"></span>
        <span class="small-line"></span>
        <input type="text" class="number" placeholder="请输入账号" />
      </div>
      <div class="user-item user-password border-1px-line">
        <span class="icon login_icon_2"></span>
        <span class="small-line"></span>
        <input type="password" class="number password-box" placeholder="请输入密码" />
        <div class="forget-box">
          <span class="small-line"><i></i>忘记密码</span>
          
          <!-- <span class="forget-password"></span> -->
        </div>
      </div>
      <div class="login-btn">登录</div>
      <div class="login-type">
        <div class="code-logining">手机验证码登录</div>
        <div class="new-user-register">新用户注册</div>
      </div>
      <div class="another-login-type">
        <div class="title">
          <span class="short-line"></span>
          其他登录方式
          <span class="short-line"></span>
        </div>
        <div class="icon-content">
          <div class="icon-img"></div>
          <div class="icon-img"></div>
        </div>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "login",
   methods:{
            back(){
                this.$router.go(-1);
            }
        },
};
</script>

<style lang="scss" scoped>
.login {
  text-align: center;
  .back-arrow {
    margin-left: 0.5rem;
    width: 100%;
    height: 2.75rem;
    .icon-back-arrow {
      margin-top: 0.875rem;
      width: 5rem;
      height: 1.5rem;
      @include bg-img("/images/nav_icon_back", 1rem 1rem);
    }
    // border: 0.05rem solid red;
  }
  .logo {
    margin-top: 0.45rem;
    margin-left: 0.75rem;

    display: inline-block;
    width: 7.5rem;
    height: 4.5rem;
    @include bg-img("/images/login_logo", 7.5rem 4.5rem);
  }
}
.user {
  margin-top: 1.5rem;

  padding: 0 1.875rem;
  padding-bottom: 5.5rem;
  .user-item {
    position:relative;
    width: 100%;
    height: 3rem;
    text-align: left;
    // line-height:3rem;
    .forget-box{
        position: absolute;
        top:0.4rem;
        right: 0;
        z-index: 100;
         font-size: $fs-14;
      color: $c-password;
      i{
          display:inline-block;
          width:0.75rem;
      }
    }

    .icon {
      display: inline-block;
      width: 2rem;
      height: 1.2rem;
      line-height: 1.2rem;
      @include bg-img("/images/login_icon_1", 1.2rem 1.2rem);
      &.login_icon_2 {
        @include bg-img("/images/login_icon_2", 1.2rem 1.2rem);
      }
    }
    .number {
      height: 1.5rem;
      border: 0;
      vertical-align: middle;
      outline: none;
      &::-webkit-input-placeholder {
        /* WebKit, Blink, Edge */
        font-size: $fs-14;
        color: $c-password;
      }
      :-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        font-size: $fs-14;
        color: $c-password;
      }
      ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        font-size: $fs-14;
        color: $c-password;
      }
      :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        font-size: $fs-14;
        color: $c-password;
      }
    }
    .small-line {
      display: inline-block;
      margin-right: 0.75rem;
      height: 1rem;
      line-height: 1rem;
      border-left: 0.1rem solid $c-password;
    }
    // .forget-password {
    //   font-size: $fs-14;
    //   color: $c-password;
    // }
  }
  //btn
  .login-btn {
    width: 100%;
    height: 2.2rem;
    line-height: 2.2rem;
    font-size: $fs-15;
    color: $c-white;
    background: $c-login-btn;
  }
  .login-type {
    display: flex;
    margin-top: 1.1rem;
    margin-bottom: 6.15rem;
    width: 100%;
    font-size: $fs-12;
    color: $c-login-type;
    .code-logining {
      flex: 1;
      text-align: left;
    }
    .new-user-register {
      flex: 1;
      text-align: right;
    }
  }
  .another-login-type {
    font-size: $fs-10;
    color: $c-gray8;
    .title {
      .short-line {
        display: inline-block;
        margin: 0 0.25rem;
        width: 2rem;
        vertical-align: middle;
        border-bottom: 0.05rem solid $c-password;
      }
    }
    .icon-content {
      width: 100%;
      .icon-img {
        display: inline-block;
        margin-top: 1.5rem;
        width: 15%;
        height: 2.2rem;

        @include bg-img("/images/login_icon_wc", 2.2rem 2.2rem);
        &:last-child {
          margin-left: 3.25rem;
          @include bg-img("/images/login_icon_qq", 2.2rem 2.2rem);
        }
      }
    }
  }
}
</style>