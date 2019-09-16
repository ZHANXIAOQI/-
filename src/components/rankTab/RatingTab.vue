<template>
    <div class="rankTabs">
        <div class="tabs">
            <!-- {name:'login',params:{to:to.path}} -->
            <router-link to="/rating/person" tag="div" class="item">
                <div class="name">个人</div>
                <div class="icon"></div>
                </router-link>
           
            <router-link to="/rating/member" tag="div" class="item">
                <div class="name">团队</div>
                <div class="icon"></div>
            </router-link>
            <router-link to="/rating/area" tag="div" class="item">
                <div class="name">区代</div>
                <div class="icon"></div>
            </router-link>
            <router-link to="/rating/city" tag="div" class="item">
                <div class="name">市代</div>
                <div class="icon"></div>
            </router-link>
            <router-link to="/rating/province" tag="div" class="item">
                <div class="name">省代</div>
                <div class="icon"></div>
            </router-link>
        </div>
        <router-view>

            wowowoowowowo
        </router-view>
    </div>
</template>

<script>
    export default {
        name:'ratingRouter'

    }
</script>

<style lang="scss" scoped>
   .rankTabs{
      .tabs{
           width:100%;
           height:2rem;
           &>div{
               padding-left:1.2rem;
               display: inline-block;
               width:20%;

           }
      }
      .item{
          font-size:$fs-14;
        //   color:$c-orange;
        color:$c-gray9;
          .icon{
              margin-top:.5rem;
              margin-bottom: 0.65rem;
              width:1.5rem;
              height:0.15rem;
              @include bg-img('/images/gy_icon_1' , 1.5rem 0.15rem)
          }
      }

   }
</style>