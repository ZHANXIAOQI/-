<template>
  <div class="hot-toggle">
    <div class="banner">
      <div class="tabs" v-for="t in tabName">
        <div class="tab">{{t.name}}</div>
        <div class="icon active"></div>
      </div>
    </div>
    <div class="goods">
      <ul class="items">
        <li class="item" v-for="(g , index) in tabGoods " :key="index">
          <div class="goodsPic">
            <img :src="g.image" alt />
          </div>
          <span class="content">{{g.content}}</span>
          <div class="pirce-box">
            <span class="price">{{g.price}}</span>
            <span class="selling">{{g.selling}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const publicPath = process.env.BASE_URL;
export default {
  name: "hot-toggle",
  data: () => ({
    tabName: [{ name: "推荐" }, { name: "热门" }, { name: "最新" }],
    tabGoods: [
      {
        image: `${publicPath}images/home_pic_1 .png`,
        content: "罗意威001男款香水",
        price: "￥670",
        selling: "销量240"
      },
      {
        image: `${publicPath}images/home_pic_2.png`,
        content: "馥蕾诗明星面膜体验礼收收收收收收收收收",
        price: "￥240",
        selling: "销量240"
      },
      {
        image: `${publicPath}images/home_pic_3.png`,
        content: "罗意威001男款香水",
        price: "￥970",
        selling: "销量240"
      },
      {
        image: `${publicPath}images/home_pic_4.png`,
        content: "罗意威001男款香水",
        price: "￥870",
        selling: "销量240"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.hot-toggle {
  font-size: $fs-16;
  color: $c-gray6;
  padding-bottom: 5rem;
  .banner {
    display: flex;
    width: 50%;
    .tabs {
      flex: 1;
      width: 3.05rem;
    }
  }
}
.goods {
  width: 100%;
  .items {
    .goodsPic {
      width: 8.25rem;
      height: 8.25rem;
      //@include bg-img ('/images/home_pic_1 ' , 8.25rem 8.25rem);
      img {
        width: 8.25rem;
        height: 8.25rem;
      }
    }
    .content {
      display: inline-block;
      margin-bottom: 0.6rem;
      width: 6.95rem;
      padding-left: 0.8rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: $fs-12;
      color: $c-black3;
      overflow: hidden;
    }
    li {
      display: inline-block;
      width: 50%;
      // width:20rem;
    }
  }

  .pirce-box {
    // padding:0.625rem;
    display: flex;
    padding: 0.625rem 0.8rem;
    height: 3.05rem;

    .price {
      flex: 1;
      font-size: $fs-18;
      color: $c-orange;
    }
    .selling {
      font-size: $fs-12;
      line-height: $fs-18;
    }
  }
}
</style>