<template>
  <div class="order-card">
    <van-panel title="订单号：T20191203" status="已完成" class="m-b-10 b-r-10" v-for="(item,index) in 1" :key="index">
      <div class="content" @click="jumoToDetial">
        <van-card class="bg-white" num="1" price="130.00" desc="400ml" title="无印良品 MUJI 平衡高保湿化妆水" thumb="http://119.3.208.63:8000/static/img/goods-img/16230038-bf86-4d4e-a11f-954b9ee4bab2.jpg"
          v-for="(item,index) in 1" :key="index" />
      </div>
      <div slot="footer" class="footer">
        <div class="info">
          <div class="total">共1件商品合计：￥130.00</div>
          <div class="btn">
            <van-button plain size="mini" round>查看发票</van-button>
            <van-button plain size="mini" round type="danger">评价晒单</van-button>
            <van-button plain size="mini" round type="danger">再次购买</van-button>
          </div>
        </div>
      </div>
    </van-panel>
  </div>
</template>

<script>
  export default {
    methods: {
      jumoToDetial() {
        this.$toast.loading({
          message: '加载中...',
          forbidClick: true,
          duration: 1000
        })
        setTimeout(() => {
          this.$router.push('/logistics')
        }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .order-card {
    padding: 10px;

    .content {
      background-color: #ffffff;
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .info {
        .total {
          margin-bottom: 10px;
          text-align: right;
        }
      }
    }
  }
</style>
