<template>
  <div class="swiper-wrapper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width=100% height="125px"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        images: [
          'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/114396/20/13999/253571/5f27ea6fEa13c90c2/f4df746250c39255.jpg!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/114550/12/7437/102254/5ec3971fE78db18f4/438d4775f9d653ee.jpg!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/84967/34/13830/84213/5e5e09c2Ebc49da2c/19d0faa469b891cc.jpg!cr_1125x445_0_171!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/130651/30/5710/271288/5f24ceaaE97c1a612/598826fb7e0e0f3b.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        ]
      }
    }
  }
</script>

<style>
  .swiper-wrapper img {
    width: 100%;
  }
</style>
