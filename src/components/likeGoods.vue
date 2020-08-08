<template>
  <div class="like-goods">
    <!-- 猜你喜欢 -->
    <slot name="like">
      <van-divider :style="{ color: '#333', borderColor: '#ccc', 'padding-top': '20px' }">
      <span>为你推荐</span>
    </van-divider>
    </slot>
    <!-- 商品列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="————  我是有底线的 ————" @load="onLoad">
      <van-grid class="goods-list" :column-num="2">
        <van-grid-item
          v-for="(item,index) in goodsData"
          :key="index"
          @click="goDetail(index)"
          class="goods-wrapper"
        >
          <div class="goods-item">
            <div class="goods-pic">
              <img :src="'http://119.3.208.63:8000' + item.goods_cover_image" />
            </div>
            <div class="goods-info">
              <div class="goods-title">{{item.goods_name}}</div>
              <div class="goods-num">{{item.goods_intro}}</div>
              <div class="goods-price">
                <span>￥{{item.selling_price}}</span>
                <s>￥{{item.original_price}}</s>
              </div>
              <!-- 下单图标 -->
              <div class="buy-icon">
                <van-icon name="cart-o" color="#fff" size=".5rem"/>
              </div>
            </div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-list>
  </div>
</template>

<script>
import Vue from 'vue'
import { List, Divider } from 'vant'

Vue.use(List).use(Divider)
export default {
  data() {
    return {
      loading: false,
      finished: false,
      goodsData: [],
      nextPage: 2,
      nextGoods: []
    }
  },
  created() {
    this.$api.homeData.likeGoods('api/v1/goods/').then(res => {
      // console.log(res)
      this.goodsData = [].concat(res.data.data.results)
    })
  },
  methods: {
    // 商品上拉刷新
    onLoad() {
        this.loading = false
        if (this.goodsData.length > 9 * (this.nextPage - 1)){
          this.$api.homeData.likeGoods('api/v1/goods/?page=' + this.nextPage.toString()).then(res => {
            this.nextGoods = [].concat(res.data.data.results)
            for (var i = 0; i < 10; i++){
              this.goodsData.push(this.nextGoods[i])
            }
            this.nextPage += 1
            this.nextGoods = []
          })
        }
    },
    // 跳转到商品详细页
    goDetail(index) {
      // console.log(index)
      // console.log(this.goodsData[index])
      this.$router.push({
        name: 'detail',
        params: {
          goodid: index,
          goodsInfo: this.goodsData[index],
          isFlash: false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.like-goods {
  background-color: #f4f4f4;
  margin-top: 10px;
  .van-divider {
    font-size: 16px;
  }
  .goods-list {
    padding: 5px;
    .goods-wrapper {
      padding: 5px;
      overflow: hidden;
      .goods-item {
        background-color: #fff;
        // box-shadow: 3px 3px 3px rgba($color: #000000, $alpha: 0.1);
        border-radius: 3px;
        .goods-pic {
          img {
            width: 100%;
            border-radius: 3px 3px 0 0;
          }
        }
        .goods-info {
          position: relative;
          padding: 5px;
          // 购买图标
          .buy-icon{
            position: absolute;
            right: 0;
            bottom: 5px;
            width: 26px;
            height: 26px;
            background: linear-gradient(to bottom, #FF5000 0%, #FF5000 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
          }
          .goods-title {
            font-size: 13px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .goods-price {
            padding: 5px 0;
            span {
              color:#FF5000;
              font-size: 13px;
              font-weight: bold;
              margin-left: -5px;
            }
            s {
              color: #bbb;
              font-size: 11px;
              margin-left: 1px;
            }
          }
          .goods-num {
            font-size: 11px;
            margin-top: 5px;
            color: #bbb;
          }
        }
      }
    }
  }
}
</style>
