<template>
    <div class="container">
        <div class="pic"></div>
        <div class='details-box'>
				<div class="top">
					<i>疯抢价</i>
					<span>¥1280</span>
					<s>¥1280</s>
				</div>
				<div class="time">
					<p>距结束 &nbsp; &nbsp;<i>20</i> : <i>05</i> : <i>38</i></p>
					<p><span>240</span>人已成功分享</p>
				</div>
				<div class="title">SK-II护肤面膜 （前男友面膜）SK-II SKIN MASK多方位修护面膜</div>
				<div class="postage">
					<!--        <span>包邮</span>
        <span>7天退货</span> -->
				</div>
				<div class="freight">
					<span>销量：<span>170</span>件</span>
				</div>
	</div>

    <div class="skulist pageto">
				<div class="items">
					<p>已选<span>金色，41码</span></p>
					<i></i>
				</div>
				<div class="items">
					<p>参数<span>产地、品牌</span></p>
					<i></i>
				</div>
			</div>
			<div class="evaluate">
				<p class="evaluate-title">
					<span>宝贝评价</span>
					<span class="evaluate-all pageto">查看全部 <i></i></span>
				</p>
				<p class="evaluate-head">
					<img src="http://img.52z.com/upload/news/image/20180912/20180912124602_94176.jpg">
					<span>张小帅</span>
				</p>
				<p class="evaluate-content">等发售等了好久了！！抢到了第一批货！！真的太好看了！！金色的真的超级酷！</p>
	</div>
    <div class="richText-box">
				<div class="richText--title"> — 商品详情 — </div>
				<div class="richText-body">
					123 one
				</div>
			</div>
			<div class="touch-bottom"><span></span> <i>已经到底了</i> <span></span></div>

			<div class="position">
				<span class="pageto">加入购物车</span>
				<span class="pageto">立即购买</span>
			</div>
    </div>

    
</template>

<script>
    export default {
        name:'detailShowing'
    }
</script>

<style lang="scss" scoped>
    .container {
  padding-bottom: 2.5rem;
  .pic{
      width:100%;
      height:10rem;
      background:#999999;
  }
   }
 
  .container .details-box {
    padding: 2.5rem 5.16rem 5.15rem;
    background-color: #fff;
    position: relative; }
    .container .details-box .top {
      display: flex;
      align-items: center;
      position: absolute;
      left: 0;
      top: 5.15rem; }
      .container .details-box .top i {
        width: 5rem;
        
        height: 8rem;
        line-height:8rem;
        text-align: center;
        display: inline-block;
        background:#FDF6EE;
        
        
        color: red;
        font-style: normal; }
      .container .details-box .top span {
        font-size: 1.24rem;
        font-family: Arial-BoldMT;
        font-weight: bold;
        color: #E9A45A;
        margin-left: 1.16rem; }
      .container .details-box .top s {
        color: #999999;
        font-size: 1.14rem;
        margin-left: 1.11rem; }
    .container .details-box .time {
      background-color: #FDF6EE;
      width:17.25rem;
      height: 8rem;
    //   display: flex;
    //   align-items: center;
    //   justify-content: space-between;
    //   padding: 0 1.15rem;
      margin: 2.5rem 0; }
      .container .details-box .time p {
          margin-top: 14px;
          margin-bottom:13px;
        font-size: 1.12rem;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: #E9A45A; }
        .container .details-box .time p:first-child {
            padding-top:14px;
          font-size: 1.14rem;
          color: #333333; }
          .container .details-box .time p:first-child i {

            display: inline-block;
            background-color: #333333;
            width: 1.24rem;
            height: .24rem;
            line-height: 1.24rem;
            text-align: center;
            font-style: normal;
            border-radius: .25rem;
            color: rgb(199, 90, 90);
            font-weight: 400; }
    .container .details-box .title {
      font-size: .55rem;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: #333333; }
    .container .details-box .postage {
      display: flex;
      align-items: center;
      margin-top: .5rem; }
      .container .details-box .postage span {
        padding: 0 2.25rem;
        border: 1px solid #999999;
        font-size: .5rem;
        border-radius: 1.23rem;
        color: #999999;
        margin-right: 1.37rem; }
        .container .details-box .postage span:last-child {
          border-color: #E9A45A;
          color: #E9A45A; }
    .container .details-box .freight {
      margin-top: 2.5rem;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      font-size: .52rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: #888888; }
  .container .skulist {
    margin-top: .1rem;
    background-color: #fff;
    padding: 0 .53rem; }
    .container .skulist .items {
      border-bottom: .05rem solid #EAEAEA;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 2.43rem; }
      .container .skulist .items:last-child {
        border-bottom: 0; }
      .container .skulist .items p {
        font-size: .54rem;
        color: #888888; }
        .container .skulist .items p span {
          margin-left: 1.2rem;
          color: #444444; }
      .container .skulist .items i {
        width: .55rem;
        height: .55rem;
        background: red;
        
        background-size: cover; }
  .container .evaluate {
    margin-top: .5rem;
    background-color: #fff;
    padding: 0 .53rem .55rem; }
    .container .evaluate .evaluate-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 2.45rem; }
      .container .evaluate .evaluate-title span {
        font-size: .54rem;
        font-weight: 500;
        color: #444444;
        display: flex;
        align-items: center; }
        .container .evaluate .evaluate-title span.evaluate-all {
          color: #E9A45A; }
          .container .evaluate .evaluate-title span.evaluate-all i {
            width: .55rem;
            height: .55rem;
            background:red;
            background-size: cover;
            margin-top: .52rem;
            margin-left: .25rem; }
    .container .evaluate .evaluate-head {
      display: flex;
      align-items: center; }
      .container .evaluate .evaluate-head img {
        width: 1.3rem;
        height:1.3rem;
        border-radius: 50%; }
      .container .evaluate .evaluate-head span {
        font-size: .53rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: #888888;
        margin-left: .5rem; }
    .container .evaluate .evaluate-content {
      margin-top: .5rem;
      font-size: .53rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: #000000;
      text-align: justify; }
  .container .richText-box {
    margin-top: .5rem;
    padding: 0 .55rem .51rem;
    background-color: #fff; }
    .container .richText-box .richText--title {
      height: 2.43rem;
      line-height: 2.43rem;
      text-align: center;
      font-size: .54rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: #444444; }
    .container .richText-box .richText-body {
      overflow: hidden; }
      .container .richText-box .richText-body p {
        white-space: pre-wrap; }
  .container .touch-bottom {
    display: flex;
    align-items: center;
    height: 2.46rem;
    padding: 0 .55rem; }
    .container .touch-bottom span {
      flex: 1;
      background-color: #EAEAEA;
      height: .05rem; }
    .container .touch-bottom i {
      font-size: .52rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: #888888;
      margin: 0 .5rem;
      font-style: normal; }
  .container .position {
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: 2.5rem;
    background-color: #fff;
    justify-content: space-between;
    padding: 0 .55rem;
    border-top: .51rem solid #EAEAEA; }
    .container .position span {
      width: 5.65rem;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
      font-size: .53rem;
      flex-shrink: 0;
      border: .51rem solid #E9A45A;
      border-radius: 0.25rem;
      font-weight: bold;
      color: #E9A45A; }
      .container .position span:last-child {
        background-color: #E9A45A;
        color: #fff; }

</style>