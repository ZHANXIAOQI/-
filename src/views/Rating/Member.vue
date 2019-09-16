<template>
  <div>
     <div class="header-bar">从2019年9月11日开始</div>
    <PersonList :personRatingData="personRatingData"/>
  </div>
</template>

<script>
import PersonList from "../../components/rating-person/PersonList.vue";
export default {
  name: "personType1",
  props: [" personRatingData"],
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
    this.getData(1);
  },
  components: {
    PersonList,
  }
};
</script>

<style lang="scss" scoped>
    .header-bar{
        padding-left:1.125rem;
        width:100%;
        height:1rem;
        line-height:1rem;
        font-size: $fs-10;
        color:$c-orange;
        // background: $c-light-orange;
    }
</style>