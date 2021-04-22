<template>
  <div>
    <!-- <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>Slide 21</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->

    <div>
      <!-- <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row> -->
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import 'swiper/swiper.min.css'
export default {
  // components: {

  //   Swiper, SwiperSlide
  // },
  data () {
    return {
      swiperOptions: {
        observeParents: true,
        observer: true,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: true
        },
        // autoplay: {
        //   delay: 3000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: true
        // }

        reverseDirection: true

      }

    }
  },
  methods: {
    handel () {
      console.log(2)
    }
  }

  // computed: {
  //   swiper () {
  //     return this.$refs.mySwiper.$swiper
  //   }
  // },
  // mounted () {
  //   console.log('Current Swiper instance object', this.swiper)
  //   this.swiper.slideTo(3, 2000, false)
  // }

}
</script>

<style>
div {
  width: 500px;
  height: 500px;
  background-color: red;
}
</style>
