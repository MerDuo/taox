<template>
  <!-- 商品规格 -->
  <div class="goods-sku">
    <van-sku v-model="showSku" :sku="sku" :goods="goods" :goods-id="goodsId" :quota="quota" :hide-stock="sku.hide_stock"
      safe-area-inset-bottom show-add-cart-btn reset-stepper-on-hide @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked"
      ref="getSku"></van-sku>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ['goodsId', 'goods'],
    data() {
      return {
        showSku: false, // 下单sku的弹出
        quota: 0, // 限购数，0表示不限购
        sku: {
          // 规格数据
          hide_stock: false, // 是否显示商品库存
          tree: [{
            k: "种类", // skuKeyName：规格类目名称
            k_id: 1,
            v: [{
              id: "1214", // skuValueId：规格值 id
              name: this.goods.goods_name, // skuValueName：规格值名称
              imgUrl: 'http://119.3.208.63:8000' + this.goods.goods_cover_image, // 规格类目图片，只有第一个规格类目可以定义图片
              previewImgUrl: 'http://119.3.208.63:8000' + this.goods.goods_cover_image // 用于预览显示的规格类目图片
            }],
            // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            k_s: "s1"
          }],
          // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
          list: [{
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1214", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1194", // 规格类目 k_s 为 s2 的对应规格值 id
            // s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }],
          price: this.goods.original_price, // 默认价格（单位元）
          stock_num: this.goods.stock_num, // 商品总库存
          none_sku: true // 是否无规格商品
        }
      }
    },
    methods: {
      // 立即购买
      onBuyClicked() {
        this.$router.push('/orderpay')
      },
      // 添加购物车
      onAddCartClicked() {
        var goodsNum = this.$refs.getSku.getSkuData().selectedNum
        // console.log(goodsNum)
        this.$api.cartData.addGoods(this.goods.goods_id, goodsNum).then(res => {
          // console.log(res)
          this.$toast('加入购物车成功')
          this.showSku = false
        }).catch(e => {
          console.log(e)
        })
      }

    }
  }
</script>

<style lang="scss" scoped>
</style>
