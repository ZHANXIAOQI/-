<template>
  <div class="auto-play-picture">
    <ul class="pictures" ref="slider">
      
      <li class="picture false-pic"></li>
      <li class="picture" v-for="(pic , index) in pics" :key="index">
        <img :src="pic" alt />
      </li>
      <li class="picture false-pic"></li>
      <!-- <li class="picture">
        <img src="http://112.74.60.113/cosmetic/upload/image/image_1562671645643.jpg" alt />
      </li> -->
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "carousel",
  props: ["pics"],
  data: () => ({
    index: 0,
    picWidth: 17.25,
    timer: null
  }),
  methods: {
    nextPic() {
      this.index++;
      let offsetX = -this.index * this.picWidth;
      let count=this.pics.length+2;
      this.$refs.slider.style.width=`${this.picWidth*count}rem`;
      // console.log(this.$refs.slider.width);
      console.log(this.index)

      this.$refs.slider.style.transition = "all .5s linear";
      this.$refs.slider.style.transform = `translateX(${offsetX}rem)`;
    },

    resetPic() {
      if (this.index >= this.pics.length+1) {
        this.index = 0;
        let offsetX = -this.index * this.picWidth;
        this.$refs.slider.style.transition = "none";
        this.$refs.slider.style.transform = `translateX(${offsetX}rem)`;
      }
    }
  },

  mounted() {
    // this.timer = setInterval(this.nextPic, 3000);
    this.$refs.slider.addEventListener("transitionend", this.resetPic);
  },

  beforeDestroy() {
    // 清除mounted中创建的计时器
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.auto-play-picture {
  margin-top: 0.75rem;
  width: 100%;
  overflow: hidden;
}
.pictures {
  display: flex;
  width: 138rem;

  .picture {
    flex: 1;

    &:nth-child(5) img {
      display: block;
      background: pink;
      background-image: url("http://112.74.60.113/cosmetic/upload/image/image_1563179722142.jpg");
    }
  }
  img {
    width: 100%;
    height: 8.75rem;
  }
  .false-pic{
    
      @include bg-img('/images/banner_pic' , 17.25rem 8.75rem)
  }
}
</style>