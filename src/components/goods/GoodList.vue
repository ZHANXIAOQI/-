<template>
    <div>
        <!-- <router-link to="name:'goods' , {params:{ id:'yyy'}}"  tag="div"> -->
        yyyyyyyyyyyyyyyyyyyyyy
        <!-- </router-link> -->
        yyyyyyyyy
       
    </div>
    
</template>

<script>
    export default {
      mounted() {
    this.getGoodsPageData();
 
  },
  methods: {
    // 获取page的数据
    async getGoodsPageData() {
      let res = await this.$http(
        "http://112.74.60.113/cosmetic/api/goods/page"
      );
      res = res.data;
      this.data= res.data
      this.goodsWrapper = res.data.list;
      console.log(this.goodsWrapper);
    },
  
    }
    }
</script>

<style lang="scss" scoped>

</style>