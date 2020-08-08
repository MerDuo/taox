<template>
  <div class="order-card">
    <div v-if="isNull">
      <empty></empty>
    </div>
    <div v-if="notNull">
      <van-panel title="订单号：T20191203" status="已完成" class="m-b-10 b-r-10" v-for="(item,index) in 1" :key="index">
        <div class="content" @click="jumoToDetial">
          <div v-for="(item,index) in list" :key="index">
            <div>
              <van-card v-for="(goods,index) in item.order_items" class="bg-white" :num="goods.goods_count" :price="goods.goods.selling_price"
                :desc="goods.goods.goods_intro" :title="goods.goods.goods_name" :thumb="goods.goods.goods_cover_image"
                :key="index" />
            </div>
          </div>
        </div>
        <div slot="footer" class="footer">
          <div class="info">
            <div class="total">共{{item.goods_total_count}}件商品合计：￥{{item.total_price}}</div>
            <div class="btn">
              <van-button plain size="mini" round>查看发票</van-button>
              <van-button plain size="mini" round type="danger">评价晒单</van-button>
              <van-button plain size="mini" round type="danger">再次购买</van-button>
            </div>
          </div>
        </div>
      </van-panel>
    </div>
  </div>
</template>

<script>
  import Empty from "../../../components/empty.vue"
  export default {
    components: {
      // menuBar
      Empty
    },
    data() {
      return {
        list: [],
        isNull: true,
        notNull: false
      }
    },
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
    },
    created() {
      this.$api.order.getOrder().then(({
        data
      }) => {
        console.log(data)
        this.list = data.data.results
        if (this.list.length == 0) {
            this.isNull = true
            this.notNull = false
        } else {
          this.isNull = false
          this.notNull = true
        }
        for (var i = 0; i < this.list.length; i++) {
          for (var j = 0; j < this.list[i].order_items.length; j++) {
            this.list[i].order_items[j].goods.goods_cover_image = 'http://119.3.208.63:8000' + this.list[i].order_items[
              j].goods.goods_cover_image
          }
        }
        console.log(this.list)
      })
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
