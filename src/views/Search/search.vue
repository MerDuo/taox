<template>
  <div class="search">
    <!-- 顶部导航 -->
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="back">
      <template #title>
        <form>
          <van-search v-model="keywords" placeholder="请输入搜索关键词" shape="round" @search="clickSearch"/>
        </form>
      </template>
      <template #right>
        <van-button round type="info" color="#FF8400" style="height:80%;" @click="clickSearch">搜索</van-button>
      </template>
    </van-nav-bar>
    <!-- 搜索历史 -->
    <div class="search-history">
      <van-cell title="历史搜索" size="large">
        <van-icon
          slot="right-icon"
          color="#ccc"
          @click="clear"
          style="line-height: inherit;"
          name="delete"
          size="1.2rem"
        />
      </van-cell>
      <!--搜索历史内容 -->
      <ul class="history-content" v-for="(item, index) in historyList" :key="index">
        <li>{{item}}</li>
      </ul>
    </div>
    <!-- 全网热搜 -->
    <div class="hot-search">
      <van-cell title="全网热搜" size="large">
        <van-icon
          size="20px"
          slot="right-icon"
          color="#f60"
          name="fire"
          style="line-height: inherit;"
        />
      </van-cell>
      <!-- 全网热搜内容 -->
      <ul class="hot-search-content" v-for="(item, index) in hotList" :key="index">
        <li @click="goHot(index)">{{item.title}}</li>
      </ul>
      <br><br>
    </div>
    <!-- 为你推荐 -->
    <br>
    <like-goods></like-goods>
  </div>
</template>

<script>
import likeGoods from '../../components/likeGoods.vue'
import { Toast } from 'vant'
export default {
  components: {
    likeGoods
  },
  data () {
    return {
      keywords: '',
      historyList: [],
      hotList: [
        {
          title: '好吃的五花肉',
          url: ''
        },
        {
          title: '好吃的丸圆',
          url: ''
        }
      ]
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    clickSearch () {
      Toast('搜索未研发')
      this.historyList.push(this.keywords)
      this.keywords = ''
    },
    // 清除历史搜索
    clear () {
      this.historyList.splice(0,this.historyList.length)
    },
    goHot (i) {
      this.$router.push(this.hotList[i].url)
    }
  }
}
</script>

<style lang='scss' scoped>
.search {
  background-color: #fff;
  .van-search__content {
    background-color: #eeeeee;
  }
  .search-history,
  .hot-search {
    .history-content,
    .hot-search-content {
      li {
        background-color: #eeeeee;
        padding: 7px;
        margin-top: 10px;
        margin-left: 10px;
        height: 120%;
        display: block;
        float: left;
        border-radius: 12px;
        margin-bottom: 10px;
        color: #333;
      }
    }
  }
}
</style>
