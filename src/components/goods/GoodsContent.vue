
<template>
    <div class="goods-tabs" v-if="objData">
        <router-link :to="`list${index}/goods${index}`"  tag="div" class="items" v-for="(g , index) in nextList" :key="index">
            <!-- <div :class="`icon icon_${index+1}`" > -->
            <img class="icon" :src="`http://112.74.60.113/cosmetic${g.image}`" alt="" >
            <!-- </div> -->
         
            <div class="name">{{g.name}}</div>
        </router-link>

     
<!-- <router-view></router-view> -->
    </div>
</template>

<script>
    export default {
       
        name:'goodsTabs',
        data:()=>({
            objData:[],
            // goodsData:[],
            // goodsListTitle:[],
         
            nextList:[],
            
        }),
        mounted(){
            this.getGoodsData();
             this.$emit('getListTitle' , this.objData)

        },
        methods:{
            async getGoodsData() {
                          let res = await this.$http("http://112.74.60.113/cosmetic/api/goods/goodsLabel" );
                                   res = res.data;
                                
//  console.log(res);
 this.objData=res.data;
 console.log(this.objData);
 this.objData.forEach(item=>{
     let aaa=item.nextList;
     
    //  console.log(aaa.nextList)
     aaa.forEach(item=>{

        //  this.nextList.push(j.name);
         console.log(item);
         this.nextList.push(item)
     })

 })
//     this.objData.forEach((item , i)=>{
//  this.objData.push(item);
//  console.log(this.objData)
//     })
     
    //   console.log(this.objData[0].nextList);
    //   this.objData.forEach((item,i)=> {
    //                 this.goodsListTitle.push(item.name);
    //                 this.nextList.push(item[i].nextList);
                    
    //             });
                // console.log(this.goodsListTitle)


    // this.objData.forEach((item,i)=>{
    //     this.nextList.push(item[i].nextList)

    // })
    //   this.nextList = res.data[i].nextList;
      // this.goodsData.forEach(item=>{this.aaa.push(item.name)})
    
                // this.goodsData.forEach(item => {
                //     this.goodsListTitle.push(item.name);
                    
                    
                // });
                // console.log(this.goodsListTitle+"8888")
               
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