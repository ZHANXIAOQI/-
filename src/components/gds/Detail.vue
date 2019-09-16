<template>
  <div>
    {{$route.params.goods}}
    <!-- <router-link  :to="{name:'detailShow', params:{dkdk:'detailShow'}}">ddd</router-link> -->
    <router-link to="/goodsDetail">ddd</router-link>this is the detail page!
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "moveIdDetail",
  data: () => ({
    goodsDetailData: []
  }),
  methods: {
    async getGoodsPageData(goodsId) {
      let res = await this.$http(
        `http://112.74.60.113/cosmetic/api/goods/detail?goodsId=${goodsId}`
      );
      res = res.data;
      this.goodsDetailData = res.data;
    },


  },
  watch: {
    '$route' (to, from) {
   console.log(this.$route.params.goodsId)
  },
  mouted() {
     this. getGoodsId();
//    this. getGoodsPageData(this.goodsId);
  },
  }
}


</script>

<style lang="scss" scoped>
</style>