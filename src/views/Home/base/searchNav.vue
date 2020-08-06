<template>
  <div class="navbar">
    <van-row type="flex" justify="space-between" align="center" span="40">
      <!-- 搜索框 -->
      <!-- <van-col span="40"> -->
          <van-search @focus="goSearch" input-align="center" shape="round" background="#FF8400" placeholder="请输入搜索关键词" v-model="searchValue" style="width:90%;"/>
      <!-- </van-col> -->
      <!-- 信息 -->
      <!-- <van-col span="2">
          <van-icon @click="goNews" name="bell" color="#fff" size="1.3rem"></van-icon>
      </van-col> -->
    </van-row>
  </div>
</template>
<script>

export default {
  components: {
  },
  data () {
    return {
      searchValue: ''
    }
  },
  methods: {
    goSearch () {
      this.$router.push('/search')
    },
    goNews () {
      // this.$router.push("/news")
      this.$toast('功能未开发')
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  .van-row{
      width: 100%;
      background: linear-gradient(to bottom, #FF8400 0%, #FF8400 100%);
      .van-cell{
        line-height: 19px;
      }
      .van-search {
        margin: 0 auto;
      }
      .van-icon {
        margin-left: -10px;
      }
  }
  .text-right{
    text-align: right;
  }
}
</style>
