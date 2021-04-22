<template>
  <div id="app">
    <!-- <my-swiper></my-swiper> -->
    <router-view class="page"></router-view>
  </div>
</template>

<script>

// import MySwiper from './components/MySwiper'
// import MySwiper from './components/MySwiper.vue'
export default {
  // components: { MySwiper }

}

</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
#app,
.page {
  width: 100%;
  height: 100%;
}
</style>
