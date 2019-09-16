<template>
  <div id="app">
 
       <NavTab/>
    
    <router-view/>
    
  </div>
</template>
<script>
    
    import NavTab from './components/NavTab'
    
    export default {
       name:"app",
       data:()=>({

       }) ,
       mounted(){

       },
       methods:{

       },
       components:{ 
        
         NavTab,
        
       }
    }
</script>


<style lang="scss">
#app {
  width:100%;
  font-family: PingFang-SC-Regular;
}
@media screen and (max-width: 375px) {
    html {
        /* background-color:lightblue; */
        font-size: 20px;

    }
}


</style>
