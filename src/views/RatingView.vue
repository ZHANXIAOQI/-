<template>
    <div class="rating-view">
            <div class="title">排行榜</div>
             <RatingTab/>
             <!-- <Person/>     -->
             <!-- <router-view></router-view>  -->
             
    </div>
</template>

<script>
  import RatingTab from '../components/rankTab/RatingTab.vue'
  import Person from './Rating/Person.vue'
    export default {
        name:'ratingview',
        components:{
               RatingTab,
                Person,
        }

    }
</script>

<style lang="scss" scoped>
.rating-view{
   .title{
       @include title();
   }

}
</style>