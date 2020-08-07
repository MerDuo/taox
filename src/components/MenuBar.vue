<template>
  <van-tabbar v-model="active" router>
    <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/home" icon="apps-o" dot>分类</van-tabbar-item>
    <van-tabbar-item replace to="/find" icon="hot-o" badge="20">发现</van-tabbar-item>
    <van-tabbar-item replace to="/cart" icon="shopping-cart-o" badge="5">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/home" icon="user-o" badge="20">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    data() {
      return {
        active: 0
      }
    }
  }
</script>

<style>
</style>
