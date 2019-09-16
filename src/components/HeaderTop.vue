<template>
  <div class="header-top">
    <div class="home-logo"></div>
    <!-- <RegisterMessage class="message-icon"/> -->
    <!-- <router-link to="{name:'register , params:'register'}" tag="div"></router-link>
    <img src="/images/message_icon.png" alt />
    <router-view /> -->
    <router-link to="/loginView" class="message-btn" tag="div"></router-link>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "headerTop",

};
</script>

<style lang="scss" scoped>
.header-top {
  display: flex;
  padding-top: 0.75rem;
  width: 100%;
  height: 2.5rem;
//   background: indianred;
  .home-logo {
    flex: 1;
    width: 7rem;
    height: 1rem;
    @include bg-img("/images/home_logo", 7rem 1rem);
    //    background-image:url("/images/home_logo.png");
  }
  .message-btn {
    flex: 0 0 1rem;
    width: 1rem;
    height: 1rem;
    @include bg-img("/images/icon_message", 1rem 1rem);
  }
}
</style>