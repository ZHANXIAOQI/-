<template>
    <div class="welfare">
        <ToggleTabs/>
        <WelfareTheme/>
        <router-view></router-view>
        
    </div>
</template>

<script>
import ToggleTabs from '../components/welfareTab/ToggleTabs'
import WelfareTheme from '../components/welfareTab/WelfareTheme'
    export default {
        name:"welfare",
        components:{
            ToggleTabs,
            WelfareTheme,

        }
        
    }
</script>

<style lang="scss" scoped>
    
</style>