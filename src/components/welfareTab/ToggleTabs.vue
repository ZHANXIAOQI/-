<template>
    <div class="tabs">
        <h2 class="top">美恩思公益</h2>
       <div class="tab_box">
           <div class="member_tab">会员关怀</div>
           <div class="icon"></div>
       </div>
        <div class="tab_box">
           <div class="member_tab">社会关怀</div>
           <div class="icon"></div>
       </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .tabs{
        font-size: $fs-14;
        color: $c-gray9;
          .top{
            margin:0;
            height:2.5rem;
            text-align: center;
            line-height:2.5rem;
            font-size: $fs-18;
            font-weight: blod;
            color: $c-black3;
            // background:$c-search-gray;
        }
     
    }
       .tab_box{
            display: inline-block;
            width:50%;
            // height:2rem;
            text-align: center;
            .member_tab{
                margin-top: 0.3rem;
                margin-bottom:0.5rem;
            }
            .icon {
                width:1.5rem;
                height:0.15rem;
                @include bg-img('/images/gy_icon_1' , 1.5rem 0.15rem);
                margin-left: 3.95rem;
                margin-bottom: 0.35rem;
            }
        }
</style>