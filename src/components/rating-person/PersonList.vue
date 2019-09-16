<template>
     <div class="person-banner">
      <ul class="person border-1px" v-for="(p,index) in personRatingData" :key="index">
        <!-- <li class="index">{{index+1}}</li> -->
        <li class="img">
            {{index+1}}
          <img :src="`http://112.74.60.113/cosmetic/${p.avatar}`" class="avatar" alt />
        </li>
        <li class="nick">{{p.nick}}</li>
         <li class="index"></li>
        <li class="address">{{p.address}}</li>
        <li class="index"></li>
        <li class="total">{{p.total}}</li>
      </ul>
    
      </div>
</template>

<script>
    export default {

        props:['personRatingData'],
        
    }
</script>

<style lang="scss" scoped>
     .person-banner {
    //    background:green;
    margin: 0 1.125rem;
  }
  ul.person {
    // background:black;
    display: flex;
    height: 3.45rem;
    // vertical-align: middle;
    line-height: 3.45rem;
    width: 100%;
    // border:1px solid #F0F0F0;
      border-bottom:0.05rem solid #F0F0F0;
    // border-bottom: 0.05rem solid rgb(252, 20, 20);
    li {
      flex: 1;
      width: 2rem;
      font-size: $fs-14;
      font-weight: blod;
      color:$c-orange;
      overflow: hidden;
     text-overflow: ellipsis;
      white-space: nowrap;
    //   height: 0.675rem;
      &.nick{
          padding-left:1rem;
    // width:2rem;
     overflow: hidden;
     text-overflow: ellipsis;
      white-space: nowrap;
      font-size: $fs-14;
       color:$c-black3;
         font-weight: bold;
      }
    //   &.index{
    //       font-size: $fs-18;
    //   }
         &.address{
            font-size: $fs-12;
        }
       
      &.img {
    //   flex:0 0 5rem;
          font-size: $fs-18;
          color:$c-black3;
          font-weight: bold;
            overflow: hidden;
     text-overflow: ellipsis;
      white-space: nowrap;

        img {
            margin-left:0.2rem;
          width: 1rem;
          height: 1rem;
          vertical-align: middle;
          border-radius: 50%;
        }
     
      }
    }
  }
</style>