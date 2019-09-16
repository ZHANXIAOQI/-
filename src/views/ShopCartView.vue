<template>
    <div class="shopCartView1">
        <div class="header">购物车（{{count}}）<span>编辑</span></div>
        <div class="goods"></div>
        <div class="empty">
           <div class="img"></div>
            <p>你的购物车内还没有商品哦！</p>
        </div>


        <!-- ============================================================== -->
        <!-- <Login/> -->
    </div>
</template>

<script>
// import Login from './login_and_register/LoginView.vue'
    export default {
        name:"shopcartEmpty",
        components:{
            // Login,
        }

        
    }
</script>

<style lang="scss" scoped>
.shopCartView{
    position: relative;
    padding:0 0.75rem;
    width:100%;



}
.header{
    // height:2.75rem;
    // text-align: center;
    // font-size: $fs-18;
    // color:$c-black3;
    // font-weight:700;
    @include title();
    span{
       position: absolute;
       right:0.75rem;
        font-size: $fs-15;
        color:$c-orange;
        
    }
}
.empty{
    margin-top: 2.2rem;
    font-size: $fs-14;
    color:$c-black4;
    text-align: center;
   .img{
       display: inline-block;
        width:7.5rem;
        height:7.5rem;
        @include bg-img('/images/pjcg_icon' , 7.5rem 7.5rem);

        
    }

}

</style>