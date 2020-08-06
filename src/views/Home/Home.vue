<template>
  <div class="home">
    <!-- 顶部导航 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 搜索 -->
      <search-nav></search-nav>
      <!-- 轮播图 -->
      <swipe></swipe>
      <!-- 图标列表 -->
      <icon-nav></icon-nav>
      <!-- 一个广告 -->
      <img src="../../assets/u=372752334,3809558051&fm=26&gp=0.jpg" style="height:80%;width:100%;">
      <!-- 限时抢购 -->
      <spike></spike>
      <!-- 猜你喜欢 -->
      <like-goods>
        <div slot="like" class="like">
          <br>
          <span>为你推荐</span>
        </div>
      </like-goods>
    </van-pull-refresh>
    <menuBar></menuBar>
  </div>
</template>

<script>
  import IconNav from "./base/IconNav"
  import Swipe from './base/swipe.vue'
  import menuBar from '../../components/MenuBar.vue'
  import searchNav from './base/searchNav'
  import spike from './base/spike.vue'
  import likeGoods from '../../components/likeGoods.vue'
  export default {
    name: 'home',
    components: {
      searchNav,
      menuBar,
      Swipe,
      IconNav,
      spike,
      likeGoods
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
    .like{
      background-color: #f4f4f4;
      span {
        font-size: 16px;
        font-weight: bold;
        margin-left: 8px;
        margin-top: 10px;
      }
    }
  }
</style>
