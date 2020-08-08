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
      <br><br> <br><br><br>
    </div>
    <!-- 为你推荐 -->
    <br>
    <like-goods></like-goods>
  </div>
</template>

<script>
import likeGoods from '../../components/likeGoods.vue'
import { Toast } from 'vant'
import { mapMutations } from 'vuex'
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
          goods_id: 10029,
          title: '巨好用的化妆水',
          goods_name: "无印良品 MUJI 基础润肤化妆水",
          goods_carousel: "/static/img/goods-img/71d1f469-b77b-473a-a31a-78fc97859b3a.png",
          goods_cover_image: "/static/img/goods-img/71d1f469-b77b-473a-a31a-78fc97859b3a.png",
          goods_intro: "清爽型 200ml",
          goods_category: 0,
          goods_detail_content: "商品介绍加载中...",
          original_price: "70.00",
          selling_price: "70.00",
          stock_num: 999,
          tag: "",
          goods_sell_status: "0"
        },
        {
          goods_id: 10031,
          title: '巨好用的洁面',
          goods_name: "无印良品 MUJI 基础润肤洁面泡沫",
          goods_carousel: "/static/img/goods-img/679eb5a8-7689-4620-b072-63daeb8eb73a.jpg",
          goods_cover_image: "/static/img/goods-img/679eb5a8-7689-4620-b072-63daeb8eb73a.jpg",
          goods_intro: "200ml",
          goods_category: 0,
          goods_detail_content: "商品介绍加载中...",
          original_price: "83.00",
          selling_price: "83.00",
          stock_num: 1000,
          tag: "",
          goods_sell_status: "0"
        },
        {
          goods_id: 10030,
          title: '巨好穿的睡衣',
          goods_name: "无印良品 MUJI 男式睡衣",
          goods_carousel: "/static/img/goods-img/68bfbfd9-bc28-429a-ab2c-7fa62205ed7e.jpg",
          goods_cover_image: "/static/img/goods-img/68bfbfd9-bc28-429a-ab2c-7fa62205ed7e.jpg",
          goods_intro: "无侧缝法兰绒 睡衣 海军蓝 L",
          goods_category: 0,
          goods_detail_content: "商品介绍加载中...",
          original_price: "398.00",
          selling_price: "199.00",
          stock_num: 1000,
          tag: "",
          goods_sell_status: "0"
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['changeGoodsInfo']),
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
    goHot (index) {
      this.$store.commit('changeGoodsInfo', this.hotList[index])
      this.$router.push({
         name: 'detail',
          params: {
          goodid: index
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.search {
  background-color: #fff;
  .van-button--normal {
    padding: 0 10px;
  }
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
