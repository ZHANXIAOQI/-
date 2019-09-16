<template>
    <div class="discount">
        <span class="today-list">今日必抢清单</span>
    </div>
</template>

<script>
    export default {
        name:'discount'
    }
</script>

<style lang="scss" scoped>
.discount{
    position: relative;
    margin: 0.75rem 0;
    width: 100%;
    height:6.25rem;
    @include bg-img('/images/home_banner_1' , 100% 6.25rem);
    .today-list{
        position: absolute;
        left:0.75rem;
        bottom:0.6rem;
        font-size: $fs-14;
        color:$c-white;
        font-weight: bold;

    }
}

</style>