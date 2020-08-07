<template>
  <!-- 我的订单 -->
  <div class="my-order">
    <div class="order-wrapper">
      <van-cell value="全部订单" is-link @click="onMore">
        <template slot="title">
          <span class="custom-title">我的订单</span>
        </template>
      </van-cell>
      <van-row type="flex" justify="space-between" align="center" class="order-list">
        <van-col v-for="(item,index) in orderData" :key="index" class="item">
          <van-icon size="1.2rem" :name="item.icon" :info="item.info" />
          <span>{{item.name}}</span>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        orderData: [{
            name: "待付款",
            icon: "pending-payment",
            info: ""
          },
          {
            name: "待发货",
            icon: "sign",
            info: ""
          },
          {
            name: "待收货",
            icon: "logistics",
            info: "1"
          },
          {
            name: "评价",
            icon: "chat-o",
            info: ""
          },
          {
            name: "退款/售后",
            icon: "after-sale",
            info: ""
          }
        ]
      }
    },
    methods: {
      // 路由跳转
      onMore() {
        this.$router.push("/order")
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-order {
    padding: 10px;

    .order-wrapper {
      border-radius: 5px;
      overflow: hidden;

      .order-list {
        background-color: #fff;
        border-top: 1px solid #eee;
        padding: 15px;

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;

          span {
            margin-top: 5px;
          }
        }
      }
    }
  }
</style>
