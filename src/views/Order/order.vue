<template>
  <div class="my-order">
    <!-- 顶部导航 -->
    <van-sticky>
      <van-nav-bar ref="navbar" title="我的订单" left-arrow @click-left="back" />
    </van-sticky>
    <!-- 订单tabs选项卡 -->
    <van-tabs v-model="active" animated :sticky="true" :offset-top="offsetTop" ellipsis swipeable lazy-render
      :swipe-threshold="6">
      <!-- 全部订单 -->
      <van-tab title="全部">
        <order-card-all></order-card-all>
      </van-tab>
      <!-- 待付款订单 -->
      <van-tab title="待付款">
        <order-card-no-pay></order-card-no-pay>
      </van-tab>
      <van-tab title="待发货">
        <order-card-payed></order-card-payed>
      </van-tab>
      <van-tab title="待收货">
        <order-card-sending></order-card-sending>
      </van-tab>
      <van-tab title="待评价">
        <order-card-wait></order-card-wait>
      </van-tab>
      <van-tab title="售后">
        <empty></empty>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import Empty from "../../components/empty.vue"
  import OrderCardWait from "./base/OrderCardWait"
  import OrderCardNoPay from "./base/OrderCardNoPay"
  import OrderCardPayed from "./base/OrderCardPayed"
  import OrderCardSending from "./base/OrderCardSending"
  import OrderCardAll from "./base/OrderCardAll.vue"

  export default {
    components: {
      OrderCardWait,
      Empty,
      OrderCardNoPay,
      OrderCardPayed,
      OrderCardSending,
      OrderCardAll
    },
    data() {
      return {
        active: 0,
        offsetTop: null
      }
    },
    mounted() {
      this.offsetTop = this.$refs.navbar.offsetHeight
    },
    methods: {
      // 路由返回
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-order {

    // 顶部导航左图标颜色
    .van-icon-arrow-left {
      color: #000;
    }
  }
</style>
