<template>
    <div>
        <div class="home-view">
        <HearderTop/>
        <Search/>
        <AutoPlay :pics="pics"/>
        <GoodsTabs/>
        </div>
        <GraySpace class="border-1px-5"/>
        <div class="home-view-lr">
            <TodayDiscount/>
        </div>
        <GraySpace class="border-1px-9"/>
        <div class="hot-toggle home-view">
            <GoodsToggleTab/>
        </div>
  <router-view></router-view>
    </div>
</template>

<script>
    import HearderTop from '../components/HeaderTop'
    import Search from '../components/Search'
    import AutoPlay from '../components/AutoPlay'
    import GoodsTabs from '../components/GoodsTabs'
    import GraySpace from '../components/GraySpace'
    import TodayDiscount from '../components/TodayDiscount'
    import GoodsToggleTab from '../components/GoodsToggleTab'
    import TabView from '../components/goods/TabViewF.vue'


   

    export default {
        name:'homeView',
        data:()=>({
            autoPlayData:[],
            pics:[],

        }),
        mounted(){
            this.getPicsData();
        },
        methods:{
            async getPicsData(){
                let res=await this.$http('http://112.74.60.113/cosmetic/api/advert/list?position=1');
                res=res.data;
                // console.log(res.data);
                this.autoPlayData=res.data;
                console.log(this.pics);
                this.autoPlayData.forEach(item=>{
                    item.image=`http://112.74.60.113/cosmetic${item.image}`
                     this.pics.push(item.image);
                     console.log(this.pics)
                    });
               
            }
        },
        components:{
         HearderTop,
         Search,
         AutoPlay,
         GoodsTabs,
         GraySpace,
         TodayDiscount,
         GoodsToggleTab,
         TabView,
    

       }
        
    }
</script>

<style lang="scss" scoped>

    .home-view{
        padding:1.1rem 0.75rem  0;
    }
    .home-view-lr{
        padding: 0 0.75rem;
    }
   
    .border-1px-9{
        @include space-height(0.45rem);
    }
    .border-1px-5{
        @include space-height(0.25rem);
    }
</style>