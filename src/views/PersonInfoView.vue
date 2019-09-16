<template>
  <div class="personalInfo">
    <div class="container">
      <div class="header-wrapper banner">
        <div class="avatar">
          <div class="pic"></div>
        </div>
        <router-link to="/loginView" class="info" tag="div">登录 / 注册</router-link>
      </div>
    </div>
    <div class="mybooking-wrapper">
      <div class="top border-1px-line">
        <span class="booking">我的订单</span>
        <div class="see-more banner">
          查看全部订单
          <span class="icon-arrow"></span>
        </div>
      </div>
      <div class="tab">
        <ul class="tab-box">
          <li v-for="(b,index) in bookingTabTitle" :key="b.title">
            <img :src="`${b.img}${index+1}.png`" alt class="img-2x" />
            <img :src="`${b.img}${index+1}@2x.png`" alt class="img-3x" />
            <p>{{b.title}}</p>
          </li>
        </ul>
      </div>
    </div>
    <GraySpace class="space" />
    <div class="banner">
      <div class="item border-1px-line">
        <div class="img-icon-left">
          <span class="img-icon user_icon_11"></span>
          <span>我的评价</span>
        </div>
         <div class="icon-arrow-right">
            <span class="icon-arrow"></span>
        </div>
      </div>
      <div class="item">
          <div class="img-icon-left">
            <span class="img-icon user_icon_7"></span>
            <span>我的收藏</span>
          </div>
        <div class="icon-arrow-right">
            <span class="icon-arrow"></span>
        </div>
      </div>
    </div>
    <GraySpace class="space" />
    <!-- 2 -->
    <div class="banner">
      <div class="item border-1px-line">
        <div class="img-icon-left">
          <span class="img-icon user_icon_12"></span>
          <span>我的钱包</span>
        </div>
         <div class="icon-arrow-right">
            <span class="icon-arrow"></span>
        </div>
      </div>
       <div class="item border-1px-line">
        <div class="img-icon-left">
          <span class="img-icon user_icon_13"></span>
          <span>我的团队</span>
        </div>
         <div class="icon-arrow-right">
            <span class="icon-arrow"></span>
        </div>
      </div>
      <div class="item">
          <div class="img-icon-left">
            <span class="img-icon user_icon_14"></span>
            <span>股东基金池</span>
          </div>
        <div class="icon-arrow-right">
            <span class="icon-arrow"></span>
        </div>
      </div>
    </div>
    <GraySpace class="space" />
    <!-- 3 -->
    <div class="banner">
      <div class="item border-1px-line">
        <div class="img-icon-left">
          <span class="img-icon user_icon_8"></span>
          <span>地址管理</span>
        </div>
         <div class="icon-arrow-right">
            <span class="icon-arrow"></span>
        </div>
      </div>
       <div class="item border-1px-line">
        <div class="img-icon-left">
          <span class="img-icon user_icon_9"></span>
          <span>帮助中心</span>
        </div>
         <div class="icon-arrow-right">
            <span class="icon-arrow"></span>
        </div>
      </div>
      <div class="item">
          <div class="img-icon-left">
            <span class="img-icon user_icon_10"></span>
            <span>设置</span>
          </div>
        <div class="icon-arrow-right">
            <span class="icon-arrow"></span>
        </div>
      </div>
    </div>
    <GraySpace class="space-last" />
  </div>
</template>

<script>
import GraySpace from "../components/GraySpace.vue";
const publicPath = process.env.BASE_URL;
export default {
  name: "personalInfo",
  data: () => ({
    bookingTabTitle: [
      { title: "待支付", img: `${publicPath}images/user_icon_` },
      { title: "待发货", img: `${publicPath}images/user_icon_` },
      { title: "待收货", img: `${publicPath}images/user_icon_` },
      { title: "待评价", img: `${publicPath}images/user_icon_` },
      { title: "退货/款", img: `${publicPath}images/user_icon_` }
    ]
  }),
  components: {
    GraySpace
  }
};
</script>

<style lang="scss" scoped>
.personalInfo{
    padding-bottom:2rem;
}
.banner {
  padding: 0 0.75rem;
  //   background:black;
}
.header-wrapper {
  display: flex;
  width: 100%;
  height: 6.375rem;
  line-height: 6.375rem;

  @include bg-img("/images/user_bg", 100% 6.375rem);
  .avatar {
    flex: 0 0 2.5rem;
    height: 100%;

    .pic {
      display: inline-block;
      width: 2.5rem;
      height: 2.5rem;
      vertical-align: middle;
      @include bg-img("/images/user_icon_head", 2.5rem 2.5rem);
    }
  }
  .info {
    flex: 1;
    padding-left: 2rem;
    font-size: $fs-14;
    color: $c-orange;
    font-weight: 700;
  }
}
//heder-wrapper===>end
.mybooking-wrapper {
  // margin-bottom:1rem;
  //  margin: 0 0.75rem;
  .top {
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    // overflow: hidden;
    font-size: $fs-15;
    font-weight: 700;
    color: $c-black3;
    .booking {
      display: inline-block;
      margin-left: 0.75rem;
    }
    .see-more {
      float: right;
      font-size: $fs-12;
      font-weight: 400;
    }

  
  }
}
  .icon-arrow {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      @include bg-img("/images/user_icon_more", 0.5rem 0.5rem);
    }
.tab {
  margin-top: 1rem;
}
.tab-box {
  margin-bottom: 1rem;
  display: flex;
  width: 100%;
  // background:rgb(253, 149, 149);
  li {
    width: 100%;
    font-size: $fs-12;
    color: $c-black4;
    text-align: center;

    .img-2x {
      @include img-type2();
    }
    .img-3x {
      @include img-type3();
    }
  }
}
//other space
.space {
 
  @include space-height(0.5rem);
}
//other item
.item {
  width:100%;
  height:3rem;
  line-height:3rem;
  font-size: $fs-13;
  color: $c-black0;

  .img-icon {
    display: inline-block;
    margin-right:0.5rem;
    width: 1.2rem;
    height: 1.2rem;
    vertical-align: middle;
    &.user_icon_11{
            @include bg-img("/images/user_icon_11", 1.2rem 1.2rem);
    }
    &.user_icon_7{
            @include bg-img("/images/user_icon_7", 1.2rem 1.2rem);
    }
     &.user_icon_8{
            @include bg-img("/images/user_icon_8", 1.2rem 1.2rem);
    }
     &.user_icon_9{
            @include bg-img("/images/user_icon_9", 1.2rem 1.2rem);
    }
     &.user_icon_10{
            @include bg-img("/images/user_icon_10", 1.2rem 1.2rem);
    }
    &.user_icon_12{
            @include bg-img("/images/user_icon_12", 1.2rem 1.2rem);
    }
    &.user_icon_13{
            @include bg-img("/images/user_icon_13", 1.2rem 1.2rem);
    }
    &.user_icon_14{
            @include bg-img("/images/user_icon_14", 1.2rem 1.2rem);
    }




  }
  .img-icon-left{
      display: inline-block;

  }
  .icon-arrow-right{
      float:right;
  }
}
.space-last{
    @include space-height(1rem);
}
</style>