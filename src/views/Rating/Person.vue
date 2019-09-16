<template>
  <div class="personRatingPage">
    <div class="rank_bg_1">
      <p class="title">会员年终奖励</p>
      <p class="money">￥ 24010.21</p>
      <span class="message">重磅福利：个人排行榜的前一百名可瓜分奖金</span>
    </div>
    <PersonList :personRatingData="personRatingData"/>
   
  </div>
</template>

<script>
import PersonList from '../../components/rating-person/PersonList.vue'
export default {
  name: "personType0",
  data: () => ({
    personRatingData: null
  }),
  methods: {
    async getData(type) {
      let res = await this.$http(
        `http://112.74.60.113/cosmetic/api/order/pageSort?sessionId=2e40f29dbed24774a3326146af3212cb&type=${type}`
      );
      res = res.data;
      this.personRatingData = res.data.page.list;
    }
  },
  mounted() {
    this.getData(0);
  },
  components:{
      PersonList,
  }
};
</script>

<style lang="scss" scoped>
.personRatingPage {
  // padding:0 0.625rem;
  .rank_bg_1 {
    position: relative;
    width: 100%;
    height: 6.5rem;
    font-weight: blod;
    color: $c-white;
    @include bg-img("/images/rank_bg_1", 100% 6.5rem);
    .title {
      margin-top: 1.225rem;
      font-size: $fs-14;
    }
    .money {
      margin-top: 1rem;
      top: 2rem;
      font-family: DIN-Bold;
      font-size: 1.75rem;
      &::first-letter {
        font-size: $fs-12;
      }
    }
    .message {
      position: absolute;
      bottom: 0;
      padding-left: 0.875rem;
      width: 100%;
      height: 1rem;
      font-size: $fs-10;
      color: $c-orange;
      background: $c-lightOrange;
    }
    p {
      position: absolute;
      left: 6.2rem;
    }
  }
  
}
</style>