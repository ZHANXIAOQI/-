<template>
    <div class="goods-page">
      {{$route.params.goods}}vxxc
        <!-- path:/page/:id 
        id是从http://112.74.60.113/cosmetic/api/goods/page
        中请求的data.id,这个id是用作
        http://112.74.60.113/cosmetic/api/goods/detail?goodsId=39
        来获取详情页面的，所以可以写一个路由跳转方法。
         -->
        <div class="page" v-for="p in goodsWrapper" :key="p.id">
        <!--children里 {
          path:'detail/:id',
          name:'detail',
          component:()=>import('./components/gds/Detail.vue')
        } -->
           <router-link :to="{name:'detail', params:{id:p.id}}">
         
           </router-link>
               <Detail/>

            {{p.id}}
        </div>
        <router-view/>
        <!-- 这里写router-view的作用是使得datail.vue 里的内容在这个页面上展示 -->
      <!-- <router-view/> 一级路由本身有了映射，不需要再写router-->
    </div>
</template>

<script>
import Detail from './Detail.vue'
    export default {
        name:'goodsPage',
        data:()=>({
            goodsWrapper:[]
        }),
        mounted(){this.getGoodsPageData()},
        methods:{
          async getGoodsPageData(){
             let res= await this.$http('http://112.74.60.113/cosmetic/api/goods/page');
             res=res.data;
             this. goodsWrapper=res.data.list;
             console.log(this.goodsWrapper)

            },
            beforeRouteUpdate (to, from, next) {

  this.name = to.params.name
  next()
}
        },
        components:{
          Detail,
        }
    }
</script>

<style lang="scss" scoped>

</style>