<template>
  <div class="home">
    <!-- 顶部导航 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <p>这是首页</p>
      <!-- 搜索 -->
      <search-nav></search-nav>
      <!-- 跑马灯 -->
      <Swipe></Swipe>
      <IconNav></IconNav>
    </van-pull-refresh>
    <menuBar></menuBar>
  </div>
</template>

<script>
  import IconNav from "./base/IconNav"
  import Swipe from './base/swipe.vue'
  import menuBar from '../../components/MenuBar.vue'
  import searchNav from './base/searchNav'
  export default {
    name: 'home',
    components: {
      searchNav,
      menuBar,
      Swipe,
      IconNav
    },
    data() {
      return {
        isLoading: false
      }
    },
    methods: {
      // 下拉刷新
      onRefresh() {
        setTimeout(() => {
          this.isLoading = false
          this.$toast.success('刷新成功')
        }, 1000)
      }
    }
  }
</script>
<style lang='scss' scoped>
  .home {
    padding-bottom: 50px;

    .swiper-wrapper-w {
      width: 95%;
      margin: auto;
      height: 140px;
      margin-bottom: 5px;
      margin-top: 10px;
      border-radius: 5px;
      overflow: hidden;
    }
  }
</style>
