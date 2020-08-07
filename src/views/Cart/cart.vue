<template>
  <div class="home">
    <router-view />
    <!-- 顶部导航 -->
    <van-nav-bar title="购物车" right-text="管理" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-swipe-cell v-for="(cart,index) in cartList" :key="index">
        <van-card v-bind:num="cart.goods_count" v-bind:price="cart.selling_price" desc="描述信息" v-bind:title="cart.goods_name"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
          <template #tags>
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </template>
          <template #footer>
            <!-- <van-stepper v-model="goods_count" min="1" max="9999" integer/> -->
            <van-button size="mini" @click="reduce(cart.goods_id)">-1</van-button>&nbsp;
            <van-button size="mini" @click="add(cart.goods_id)">+1</van-button>
          </template>
        </van-card>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" @click="delOne(cart.goods_id)" />
        </template>
      </van-swipe-cell>
      <van-submit-bar :price="totleMoney" button-text="提交订单" @submit="onSubmit">
        <!-- <van-checkbox v-model="checked">全选</van-checkbox> -->
        <template #tip>
          你的收货地址不支持同城送, <span id="changeAdress" @click="onClickEditAddress">修改地址</span>
        </template>
      </van-submit-bar>
    </van-pull-refresh>
    <!-- <menu-bar></menu-bar> -->
  </div>
</template>

<script>
  // import menuBar from '../../components/MenuBar.vue'
  export default {
    components: {
      // menuBar
    },
    data() {
      return {
        isLoading: false,
        cartList: [],
        userId: 1,
        totleMoney: 0
      }
    },
    methods: {
      onSubmit() {
        this.$toast("提交")
      },
      onClickEditAddress() {
        this.$router.push('/addressList')
      },
      onClickLeft() {
        this.$router.push('/')
      },
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
          return item.goods_id != goodsId
        })
        this.totleMoney = 0
        for (var i = 0; i < this.cartList.length; i++) {
          this.totleMoney += parseInt(this.cartList[i].goods_count) * parseInt(this.cartList[i].selling_price) * 100
        }
      },
      // 购物车商品数量-1
      reduce(goodsId) {
        console.log(goodsId)
        var goodsCount = 1
        for (var i = 0; i < this.cartList.length; i++) {
          if (this.cartList[i].goods_id == goodsId) {
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
          this.totleMoney += parseInt(this.cartList[i].goods_count) * parseInt(this.cartList[i].selling_price) * 100
        }
        // 传userId给后台修改数据表
        this.$api.cartData.changeCount(this.userId, goodsId, goodsCount).then(({
          data
        }) => {
          // console.log(data)
        })
      },
      add(goodsId) {
        console.log(goodsId)
        var goodsCount = 1
        for (var i = 0; i < this.cartList.length; i++) {
          if (this.cartList[i].goods_id == goodsId) {
            this.cartList[i].goods_count += 1
            goodsCount = this.cartList[i].goods_count
          }
        }
        this.totleMoney = 0
        for (i = 0; i < this.cartList.length; i++) {
          this.totleMoney += parseInt(this.cartList[i].goods_count) * parseInt(this.cartList[i].selling_price) * 100
        }
        // 传userId给后台修改数据表
        this.$api.cartData.changeCount(this.userId, goodsId, goodsCount).then(({
          data
        }) => {
          // console.log(data)
        })
      }
    },
    created() {
      // this.$api.cartData.getData(this.userId).then(({
      //   data
      // }) => {
      //   console.log(data)
      //   this.cartList = data
      // })
      this.cartList = [{
          goods_id: 0,
          goods_count: 2,
          goods_name: "牙膏",
          selling_price: 315
        },
        {
          goods_id: 1,
          goods_count: 4,
          goods_name: "毛巾",
          selling_price: 21
        },
        {
          goods_id: 3,
          goods_count: 3,
          goods_name: "拖鞋",
          selling_price: 56
        },
        {
          goods_id: 4,
          goods_count: 3,
          goods_name: "拖鞋",
          selling_price: 56
        },
        {
          goods_id: 5,
          goods_count: 3,
          goods_name: "拖鞋",
          selling_price: 56
        },
        {
          goods_id: 6,
          goods_count: 3,
          goods_name: "拖鞋",
          selling_price: 56
        }
      ]
      for (var i = 0; i < this.cartList.length; i++) {
        this.totleMoney += parseInt(this.cartList[i].goods_count) * parseInt(this.cartList[i].selling_price) * 100
      }
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
