<template>
  <div class="appTabs">
    <GraySpace class="border-1px"/>
    <div class="tabs">
      <router-link to="/" tag="div" class="tab-item">
        <div class="icon-pic home"></div>
        <div class="name">首页</div>
      </router-link>
      <router-link to="/public" tag="div" class="tab-item">
        <div class="icon-pic gy"></div>
        <div class="name">公益</div>
      </router-link>
      <router-link to="/rating/person" tag="div" class="tab-item">
        <div class="icon-pic tank"></div>
        <div class="name">排行榜</div>
      </router-link>
      <router-link to="/shopCart" tag="div" class="tab-item">
        <div class="icon-pic cart"></div>
        <div class="name">购物车</div>
      </router-link>
      <router-link to="/personInfo" tag="div" class="tab-item">
        <div class="icon-pic user"></div>
        <div class="name">我的</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import GraySpace from "./GraySpace";
export default {
  components: {
    GraySpace,
  }
};
</script>

<style lang="scss" scoped>
.appTabs{
    position: fixed;
    // bottom: 0.325rem;
    bottom: 0;
   
    width: 100%;
    z-index: 100;
    background: $c-white;
}
.border-1px{
    margin-bottom: 0.125rem;
     @include space-height(0.05rem);
    //  background:$c-black3;
}
div .tabs {
  display: flex;
  padding:0 1.25rem;
  font-size: $fs-10;
  color: $c-black3;

  .tab-item {
    flex: 0 0 3.7rem;
    width:1.5rem;
   
    &:last-child{
        flex:1;
        .name{
          padding-bottom:0.2rem;
        }
    }
    
  }
  .icon-pic {
    margin: 0.125rem 0;
    width: 1.2rem;
    height: 1.2rem;
    
    

    &.home {
      @include bg-img("/images/tab_home_pre", 1.2rem 1.2rem);
    }
    &.gy {
      @include bg-img("/images/tab_gy", 1.2rem 1.2rem);
    }
    &.tank {
      @include bg-img("/images/tab_tank", 1.2rem 1.2rem);
    }
    &.cart {
      @include bg-img("/images/tab_cart", 1.2rem 1.2rem);
    }
    &.user {
      @include bg-img("/images/tab_user", 1.2rem 1.2rem);
    }
  }
}
</style>