<template>
    <div class="wrapper">
       
        <div class="first-part">
            <div class="bg"></div>
            <p>会员重疾帮助金</p>
            <span>￥24010.21</span>
        </div>
        <div class="second-part">
            <div class="box">
                <div class="pic-warm"></div>
                <p>寒冬送温暖——会员暖冬福利放送</p>
                <div class="content">
                   <div class="left_money">
                        <p>关怀金额</p>
                        <p>24100元</p>
                   </div>
                   <p class="right_time">2019.09.11</p>
                </div>
            </div>
        </div>
       <div class="last-part">
           <div class="bg"></div>
           <div class="connect">
               <p>如您需要帮助， 请联系我们： 020-8721021</p>
               <div class="warm-btn">关怀申请</div>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        
        
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        width:100%;
      
    }
    .first-part{
           position:relative;
        .bg{
         
            width:100%;
             height:5.5rem;
             @include bg-img('/images/gy_bg_1' , 100% 5.5rem);
            }
               p{
                position: absolute;
                 left:6.9rem;
                 top:1.25rem;
                 font-size:$fs-14;
                font-weight: bold;
                 color:$c-white;
             }
             span{
                 position: absolute;
                 left:5.43rem;
                 top:3.5rem;
                 display: inline-block;
                 font-size: 1.75rem;
                  font-weight: bold;
                     color:$c-white;
                 &::first-letter{
                    font-size:$fs-20;
                 }
              
             }
           
    }
    .second-part{
        padding: 0.4rem 0.75rem;
    }
    .box{
         position: relative;
         .pic-warm{
            width:100%;
            height:8rem;
            @include bg-img('/images/gy_bg_3',100% 8rem);
        }
         &>p{
                position: absolute;
                top:6.58rem;
                left:0.75rem;
                font-size: $fs-14;
                font-weight:bold;
                color: $c-white;

               
            }
            .content{
                display: flex;
                padding: 0.75rem;
                width:100%;
                height: 3.65rem;
                
                .left_money{
                 flex:1;
                 p{
                     font-size: $fs-12;
                     color:$c-black3;
                     &:last-child{
                         margin-top: 0.38rem;
                         font-size: 0.85rem;
                         color:$c-orange;
                     }
                 }

                }
                .right_time{
                    font-size: $fs-12;
                    color:$c-gray9;
                }

            }
    }

    .last-part{
        padding-top: 0.6rem;
        padding:0.6rem 0.75rem 0;
        width:100%;
        height:8rem;
   
        .bg{
            width:100%;
            height:4.4rem;
            @include bg-img('/images/gy_pic_2' , 100%  4.4rem);
                // @include bg-img('/images/gy_bg_3',100% 8rem);
        }
        .connect{
             margin-top: 0.5rem;
            display: flex;
            height:2.5rem;
             text-align: center;
            line-height: 1.5rem;
            p{
                flex:1;
                font-size: $fs-12;
                color:$c-orange;
            }
            .warm-btn{
                flex: 0 0 4rem;
               
                width:4rem;
                height:1.5rem;
               
                font-size:$fs-14;
                color:$c-white;
                background:$c-orange;
                
            }

          
        }
    }

</style>