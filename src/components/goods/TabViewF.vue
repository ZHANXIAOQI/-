<template>
  <div>
    <div class="title-box" @click="back">
      <span class="icon"></span>
      <span class="title">面部保养</span>
        </div>
      <!-- goods -->
     <div class="goodsList">
          <div class="goods">
        <ul class="items">
          <li class="item" v-for="(g,index) in goodsData" :key="index">
            <div class="goodsPic">
              <img :src="`http://112.74.60.113/cosmetic${g.image}`" alt />
            </div>
            <span class="content">{{g.name}}</span>
            <div class="pirce-box">
              <span class="price">￥{{g.id}}</span>
              <span class="selling">销量{{g.id}}</span>
            </div>
          </li>
        </ul>
      </div>
     </div>
  

    <!-- <div v-for="(g,index) in goodsData">{{g.name}}</div> -->
    <router-view />
  </div>
</template>

<script>
export default {};
</script>



<script>
import GoodsTabs from "../../components/GoodsTabs";
export default {
  // props:['goodsData'],
  data: () => ({
    goodsData: []
    // goods:null,
    // aaa:[],
  }),
  methods: {
    back() {
      this.$router.go(-1);
    },
    async getGoodsListData() {
      let res = await this.$http(
        "http://112.74.60.113/cosmetic/api/goods/goodsLabel"
      );
      res = res.data;
      this.goodsData = res.data[0].nextList;
      // this.goodsData.forEach(item=>{this.aaa.push(item.name)})
    }
  },
  mounted() {
    this.getGoodsListData();
  },
  components: {
    GoodsTabs
  }
};
</script>

<style lang="scss" scoped>
.title-box {
  width: 100%;
  height: 2.75rem;
  font-size: $fs-18;
  color: $c-black3;
  line-height: 2.75rem;
  span {
    display: inline-block;
    line-height: 2.75rem;
  }
  .icon {
    margin-left: 0.75rem;
    width: 0.4rem;
    height: 0.4rem;
    border-top: 1px solid $c-black3;
    border-left: 1px solid $c-black3;
    transform: rotateZ(-45deg);
  }
  .title {
    margin-left: 6.45rem;
  }
}

// ==================
.goodsList{
    .goods {
  width: 100%;
  padding: 0 0.75rem;
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
    //   line-height: 3.05rem;
      font-size: $fs-18;
      color: $c-orange;
    }
    .selling {
      font-size: $fs-12;
      line-height: $fs-18;
    }
  }
}
}

</style>