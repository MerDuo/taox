<template>
  <div class="swiper-wrapper">
    <van-swipe :autoplay="3000" indicator-color="#f60">
      <van-swipe-item v-for="(image, index) in images" :key="index" @click="toDetail(index)">
        <img v-lazy="'http://119.3.208.63:8000' + image.carousel_url" width=100% height="125px"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  import { Toast } from 'vant'
  import axios from 'axios'
  export default {
    data() {
      return {
        images: []
      }
    },
    async created () {
      this.$api.homeData.banner().then(res => {
        this.images = [].concat(res.data.data)
        // console.log(this.images)
      })
      .catch(function (error) {
        console.log(error.response)
      })
    },
    methods: {
    toDetail (index) {
      Toast('这是第' + (index + 1) + '张图')
    }
  }
  }
</script>

<style lang="scss" scoped>
  .swiper-wrapper {
      width: 95%;
      margin: auto;
      margin-top: 10px;
      border-radius: 5px;
      overflow: hidden;
    img {
      width: 100%;
    }
  }
</style>
