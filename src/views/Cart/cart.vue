<template>
  <div class="home">
    <router-view />
    <!-- 顶部导航 -->
    <van-nav-bar title="购物车" right-text="管理" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div v-if="cartNull == true">
        <empty></empty>
      </div>
      <van-swipe-cell v-for="(cart,index) in cartList" :key="index">
        <van-card v-bind:num="cart.goods_count" v-bind:price="cart.goods.selling_price" :desc="cart.goods.goods_detail_content" v-bind:title="cart.goods.goods_name"
          :thumb="cart.goods.goods_cover_image" lazy-load>
          <template #tags>
            <van-tag plain type="danger">{{cart.goods.goods_intro}}</van-tag><br />
            <van-tag plain type="danger">原价：{{cart.goods.original_price}}</van-tag>
          </template>
          <template #footer>
            <!-- <van-stepper v-model="goods_count" min="1" max="9999" integer/> -->
            <van-button size="mini" @click="reduce(cart.goods.goods_id)">-1</van-button>&nbsp;
            <van-button size="mini" @click="add(cart.goods.goods_id)">+1</van-button>
          </template>
        </van-card>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" @click="delOne(cart.goods.goods_id)" />
        </template>
      </van-swipe-cell>
      <van-submit-bar :price="totleMoney" button-text="提交订单" @submit="onSubmit">
        <!-- <van-checkbox v-model="checked">全选</van-checkbox> -->
        <template #tip>
          点击这里修改送货地址, <span id="changeAdress" @click="onClickEditAddress">修改地址</span>
        </template>
      </van-submit-bar>
    </van-pull-refresh>
    <!-- <menu-bar></menu-bar> -->
  </div>
</template>

<script>
  import Empty from "../../components/empty.vue"
  // import menuBar from '../../components/MenuBar.vue'
  export default {
    components: {
      // menuBar
      Empty
    },
    data() {
      return {
        isLoading: false,
        cartList: [],
        userId: 1,
        totleMoney: 0,
        cartNull: false
      }
    },
    methods: {
      // 提交购物车，创建订单
      onSubmit() {
        this.$api.cartData.createOrder(this.cartList).then(({
          data
        }) => {
          console.log(data)
          // var list = []
          // list[]
          // this.cartList = data
          console.log(data.data.total_price)
          const param = {
            id: data.data.order_id,
            price: data.data.total_price
          }
          this.$store.commit('changeOrderId', param)
        })
        this.$router.push('/orderpay')
      },
      // 编辑地址
      onClickEditAddress() {
        this.$router.push('/addressList')
      },
      // 返回
      onClickLeft() {
        this.$store.commit('onChange', 0)
        this.$router.push('/')
      },
      // 提示窗
      onClickRight() {
        this.$toast({
          message: '左滑删除商品',
          icon: 'like-o'
        })
      },
      // 下拉刷新
      onRefresh() {
        setTimeout(() => {
          this.isLoading = false
          this.$toast.success('刷新成功')
        }, 100)
      },
      // 删除购物车商品
      delOne(goodsId) {
        this.cartList = this.cartList.filter(function(item) {
          return item.goods.goods_id != goodsId
        })
        this.totleMoney = 0
        for (var i = 0; i < this.cartList.length; i++) {
          this.totleMoney += parseInt(this.cartList[i].goods_count) * parseInt(this.cartList[i].goods.selling_price) *
            100
        }
        this.$api.cartData.delOne(goodsId, 0).then(({
          data
        }) => {
          console.log(data)
        })
      },
      // 购物车商品数量-1
      reduce(goodsId) {
        console.log(goodsId)
        var goodsCount = 1
        for (var i = 0; i < this.cartList.length; i++) {
          if (this.cartList[i].goods.goods_id == goodsId) {
            if (this.cartList[i].goods_count == 1) {
              this.$toast.fail('再减就没有了')
              break
            }
            this.cartList[i].goods_count -= 1
            goodsCount = this.cartList[i].goods_count
          }
        }
        this.totleMoney = 0
        for (i = 0; i < this.cartList.length; i++) {
          this.totleMoney += parseInt(this.cartList[i].goods_count) * parseInt(this.cartList[i].goods.selling_price) *
            100
        }
        // 传userId给后台修改数据表
        this.$api.cartData.changeCount(goodsId, -1).then(({
          data
        }) => {
          console.log(data)
        })
      },
      add(goodsId) {
        console.log(goodsId)
        var goodsCount = 1
        for (var i = 0; i < this.cartList.length; i++) {
          if (this.cartList[i].goods.goods_id == goodsId) {
            this.cartList[i].goods_count += 1
            goodsCount = this.cartList[i].goods_count
          }
        }
        this.totleMoney = 0
        for (i = 0; i < this.cartList.length; i++) {
          this.totleMoney += parseInt(this.cartList[i].goods_count) * parseInt(this.cartList[i].goods.selling_price) *
            100
        }
        // 传userId给后台修改数据表
        this.$api.cartData.changeCount(goodsId, 1).then(({
          data
        }) => {
          // console.log(data)
        })
      }
    },
    created() {
      // this.$api.cartData.addCart()
      this.$api.cartData.getData().then(({
        data
      }) => {
        if (data.code == 202) {
          this.cartList = data.data.cart_items
          console.log(this.cartList)
          // console.log(data.data.cart_items[0].goods.goods_cover_image)
          if (this.cartList.length == 0) {
            this.cartNull = true
          }
          for (var i = 0; i < this.cartList.length; i++) {
            this.totleMoney += parseInt(this.cartList[i].goods_count) * parseInt(this.cartList[i].goods.selling_price) *
              100
            this.cartList[i].goods.goods_cover_image = 'http://119.3.208.63:8000' + this.cartList[i].goods.goods_cover_image
          }
          console.log(this.cartNull)
        }
      })
      this.$store.commit('onChange', 3)
    }
    // watch: {
    //   goods_count:function(val){

    //   }
    // }
  }
</script>
<style lang='scss' scoped>
  .home {
    padding-bottom: 50px;
  }

  .goods-card {
    margin: 0;
    background-color: white;
  }

  .delete-button {
    height: 100%;
  }

  #changeAdress {
    color: blue;
  }
</style>
