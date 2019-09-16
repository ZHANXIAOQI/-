
<template>
    <div class="goods-tabs" v-if="goodsData" >
         <!-- <router-link :to="{name:'goods' , params:{id:'uuu'}}" class="items" tag="div">
            <img class="icon" src="" alt="">  
            <div class="name"> 更多</div>
         </router-link> -->
              <!-- <router-link to="/" tag="div" class="tab-item"> -->
<!-- <router-link :to="{name:xxx,params:{key:value}}">valueString</router-link> -->
        <!-- <router-link to="{name:'goodsLabelItem1' , params:{goods:888}}" > -->
            <!-- <router-link to="/list"> -->
        <!-- <router-link :to="{name:'aaa' , params:{goods:`${index}`}}"  tag="div" class="items" v-for="(g,index) in goodsData" :key="g.id"> -->

        <!-- <router-link :to="`list${index}/goods${index}`"  tag="div" class="items" v-for="(g,index) in goodsData" :key="g.id"> -->
        <router-link :to="{name:'list',params:{goods:g.id}}"  tag="div" class="items" v-for="g in goodsData" :key="g.id">
        <!-- <router-link to="/list"  tag="div" class="items" v-for="(g,index) in goodsData" :key="g.id"> -->
        <!-- <div class="items" v-for="(g,index) in goodsData" :key="g.id"> -->

            <img class="icon" :src="'http://112.74.60.113/cosmetic'+g.image" alt="">
            <!-- <div :class="`icon icon_${index+1}`" ></div> -->
            <div class="name">{{g.name}}</div>
        </router-link>

        <div class="items" >
            <img class="icon" src="" alt="">  
            <div class="name"> 更多</div>
        </div>
<!-- <router-view></router-view> -->
    </div>
</template>

<script>
    export default {
       
        name:'goodsTabs',
        data:()=>({
            goodsData:null,
            goods:null,
            goodsListTitle:[],
        }),
        mounted(){
            this.getGoodsListData();
            //  this.$emit('getListTitle' , this.goodsListTitle)

        },
        methods:{
            async getGoodsListData(){
                let res=await this.$http('http://112.74.60.113/cosmetic/api/goods/goodsLabel');
                res=res.data;
                this.goods=res;
                this.goods=JSON.stringify(res);
                this.goodsData=res.data;
                console.log(this.goodsData);
                console.log(this.goods);
                // this.autoPlayData.forEach(item=>{
                //     item.image=`http://112.74.60.113/cosmetic${item.image}`
                //      this.pics.push(item.image);
                //      //console.log(this.pics)
                //     });
                this.goodsData.forEach(item => {
                    this.goodsListTitle.push(item.name);
                    
                    
                });
                console.log(this.goodsListTitle+"8888")
               
            }
        
    }
    }
</script>

<style lang="scss" scoped>
.goods-tabs{
    margin: 1rem 0.5rem 0;
    width:100%;
    font-size: $fs-12;
    color:$c-gray6;
     & > a{
            color:inherit;
        }
}
    .items{
        display: inline-block;
        margin-bottom: 1rem;
        width:25%;
        &:last-child{
            // @include bg-img('/images/home_icon_9' , 2rem 2rem);
            @include bg-img-list('9' , 2rem 2rem);
            .name{
                padding-left:0.5rem;
            }

        }
       
       
       .icon{
           display: inline-block;
           margin-bottom: 0.5rem;
           width:2rem;
           height:2rem;
        //    &.icon_1{
        //         @include bg-img-list('5' , 2rem 2rem);
        //    }
        //    &.icon_2{
        //         @include bg-img-list('6' , 2rem 2rem);
        //    }
        //    &.icon_3{
        //         @include bg-img-list('7' , 2rem 2rem);
        //    }
        //    &.icon_4{
        //         @include bg-img-list('7' , 2rem 2rem);
        //    }
        //    &.icon_5{
        //         @include bg-img-list('5' , 2rem 2rem);
        //    }
        //    &.icon_6{
        //         @include bg-img-list('4' , 2rem 2rem);
        //    }
        //    &.icon_7{
        //         @include bg-img-list('8' , 2rem 2rem);
        //    }
        //    &.icon_8{
        //         @include bg-img-list('3' , 2rem 2rem);
        //    }
        //    &.icon_9{
        //         @include bg-img-list('2' , 2rem 2rem);
        //    }
         

       }
        
        
    }

</style>