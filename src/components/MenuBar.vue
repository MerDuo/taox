<template>
  <van-tabbar v-model="active" router @change="onChange">
    <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/category" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item replace to="/find" icon="hot-o">发现</van-tabbar-item>
    <van-tabbar-item replace to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        active: 0
      }
    },
    computed: {
    ...mapState(['active2'])
    },
    methods: {
      onChange(index) {
        this.$store.commit('onChange',index)
      }
    },
    created() {
      this.active = this.active2
    }
  }
</script>

<style>
</style>
