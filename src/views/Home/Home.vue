<template>
  <div class="home">
    <!-- 顶部导航 -->
    <search-nav></search-nav>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <p>这是首页</p>
    </van-pull-refresh>
  </div>
</template>

<script>
import searchNav from './base/searchNav'
export default {
  name: 'home',
  components: {
    searchNav
  },
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    // 下拉刷新
    onRefresh () {
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
  .swiper-wrapper-w{
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
