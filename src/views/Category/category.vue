<template>
  <div class="category">
    <!-- 搜索框 -->
      <van-search
        @focus="goSearch"
        input-align="center"
        shape="round"
        placeholder="请输入搜索关键词"
        v-model="Searchvalue"
      />
    <!-- 分类 -->
    <van-row type="flex">
      <!-- 分类导航 -->
      <van-col span="6">
        <div ref="menu" class="menu-wrapper">
          <van-sidebar v-model="activeKey" @change="change">
            <van-sidebar-item :title="item.name" v-for="(item,index) in menu" :key="index"/>
          </van-sidebar>
        </div>
      </van-col>
      <!-- 分类内容 -->
      <van-col span="18">
        <div ref="content" class="content-wrapper">
          <!-- 分类内容部分 -->
          <category-content :ccategory_id="menu[contentActive].category_id" :cname="menu[contentActive].name"></category-content>
        </div>
      </van-col>
    </van-row>
    <menu-bar></menu-bar>
  </div>
</template>
<script>
import BScroll from "better-scroll"
import menuBar from "../../components/MenuBar.vue"
import CategoryContent from "./base/categoryContent"
import { Toast } from 'vant'

export default {
  components: {
    CategoryContent,
    menuBar
  },
  data() {
    return {
      Searchvalue: "",
      activeKey: 0,
      contentActive: 0,
      menu: [
        { name: "默认分类", category_id: "0" },
        { name: "生活电器", category_id: "20" },
        { name: "荣耀手机", category_id: "45" },
        { name: "华为手机", category_id: "46" },
        { name: "iphone", category_id: "47" },
        { name: "小米手机", category_id: "51" },
        { name: "口红", category_id: "86" }
      ]
    }
  },
  created () {
    this.$nextTick(() => {
      this.initScroll()
    })
    this.$store.commit('onChange', 1)
  },
  methods: {
    // 初始化better-scroll
    initScroll () {
      this.menuScroll = new BScroll(this.$refs.menu, {
        scrollY: true,
        click: true,
        probeType: 3
      })
      this.contentScroll = new BScroll(this.$refs.content, {
        scrollY: true,
        click: true,
        probeType: 3
      })
    },
    goSearch () {
      this.$router.push("/search")
    },
    change (index) {
      this.contentActive = index
      // Toast(this.menu[index].name)
    }
  },
  beforeDestroy () {
    this.menuScroll.destroy()
    this.contentScroll.destroy()
  }
}
</script>
<style lang="scss" scoped>
.category {
  .van-sidebar-item {
    padding: 15px 12px;
  }
  .van-search {
    border-bottom: 1px solid #dddddd;
    .van-search__content {
      background-color: #eeeeee;
    }
  }
  .menu-wrapper {
    position: absolute;
    top: 55px;
    bottom: 50px;
    left: 0;
    overflow: hidden;
    background-color: #f7f8fa;
  }
  .content-wrapper {
    position: fixed;
    top: 55px;
    bottom: 50px;
    overflow: hidden;
    left: 85px;
    right: 0;
    background-color: #f0efef;
  }
}
</style>
