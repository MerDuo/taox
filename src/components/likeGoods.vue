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
      <van-row class="goods-list">
        <van-col
          span="12"
          v-for="(item,index) in goodsData"
          :key="index"
          @click="goDetail(index)"
          class="goods-wrapper"
        >
          <div class="goods-item">
            <div class="goods-pic">
              <img :src="item.url" />
            </div>
            <div class="goods-info">
              <div class="goods-title">{{item.goods_name}}</div>
              <div class="goods-num">{{item.description}}</div>
              <div class="goods-price">
                <span>￥{{item.nowPrice}}</span>
                <s>￥{{item.formerPrice}}</s>
              </div>
              <!-- 下单图标 -->
              <div class="buy-icon">
                <van-icon name="cart-o" color="#fff" size=".5rem" />
              </div>
            </div>
          </div>
        </van-col>
      </van-row>
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
      goodsData: [
        {
          id: 1,
          url: 'https://img.ddimg.mobi/product/4513b9fc5935f1548406258985.jpg!deliver.product.list',
          goods_name: '五花肉',
          description: '好吃的五花肉',
          nowPrice: 100,
          formerPrice: 120,
          total_sales: 100
        },
        {
          id: 2,
          url: 'https://img.ddimg.mobi/product/4513b9fc5935f1548406258985.jpg!deliver.product.list',
          goods_name: '五花肉',
          description: '好吃的五花肉',
          nowPrice: 100,
          formerPrice: 120,
          total_sales: 100
        },
        {
          id: 3,
          url: 'https://img.ddimg.mobi/product/4513b9fc5935f1548406258985.jpg!deliver.product.list',
          goods_name: '五花肉',
          description: '好吃的五花肉',
          nowPrice: 100,
          formerPrice: 120,
          total_sales: 100
        },
        {
          id: 4,
          url: 'https://img.ddimg.mobi/product/4513b9fc5935f1548406258985.jpg!deliver.product.list',
          goods_name: '五花肉',
          description: '好吃的五花肉',
          nowPrice: 100,
          formerPrice: 120,
          total_sales: 100
        },
        {
          id: 5,
          url: require('../assets/QQ图片20200326191252.jpg'),
          goods_name: '丸圆',
          description: '好吃的丸圆',
          nowPrice: 100,
          formerPrice: 120,
          total_sales: 100
        },
        {
          id: 6,
          url: require('../assets/QQ图片20200326191252.jpg'),
          goods_name: '丸圆',
          description: '好吃的丸圆',
          nowPrice: 100,
          formerPrice: 120,
          total_sales: 100
        },
        {
          id: 7,
          url: require('../assets/QQ图片20200326191252.jpg'),
          goods_name: '丸圆',
          description: '好吃的丸圆',
          nowPrice: 100,
          formerPrice: 120,
          total_sales: 100
        },
        {
          id: 8,
          url: require('../assets/QQ图片20200326191252.jpg'),
          goods_name: '丸圆',
          description: '好吃的丸圆',
          nowPrice: 100,
          formerPrice: 120,
          total_sales: 100
        },
        {
          id: 9,
          url: require('../assets/QQ图片20200326191252.jpg'),
          goods_name: '丸圆',
          description: '好吃的丸圆',
          nowPrice: 100,
          formerPrice: 120,
          total_sales: 100
        },
        {
          id: 10,
          url: require('../assets/QQ图片20200326191252.jpg'),
          goods_name: '丸圆',
          description: '好吃的丸圆',
          nowPrice: 100,
          formerPrice: 120,
          total_sales: 100
        }
      ]
    }
  },
  created() {
    // this.getLikeGoodsData()
  },
  methods: {
    // 商品上拉刷新
    onLoad() {
        if (this.goodsData.length > 9) {
          this.finished = true
          this.loading = false
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
        box-shadow: 3px 3px 3px rgba($color: #000000, $alpha: 0.1);
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
            right: 5px;
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
            font-size: 15px;
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
              font-size: 16px;
              font-weight: bold;
              margin-right: 5px;
            }
            s {
              color: #bbb;
              font-size: 10px;
            }
          }
          .goods-num {
            font-size: 13px;
            color: #bbb;
          }
        }
      }
    }
  }
}
</style>
