<template>
    <div class="header-search">
        <div class="icon-search"></div>
        <input type="text" placeholder="请输入商品关键词">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.header-search{
    display: flex;
    margin-top: 0.65rem;
    width:100%;
    height: 1.5rem;
    
    background: $c-search-gray;

    .icon-search{
        flex: 0 0 1rem;
        margin: 0.25rem  0.25rem 0.25rem 0.68rem;
        width:1rem;
        @include bg-img('/images/icon_search' , 1rem 1rem);
    }
    input{
        outline: none;
        border:0;
        flex:1;
        background: $c-search-gray;
        font-size: $fs-12;
        
        &::-webkit-input-placeholder{
            color:$c-gray9;
            font-weight:400;
        }
    }
}

</style>