<template>
  <div id="goodsDetail">
    <van-nav-bar title="商品详情" :fixed="true" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="goodsDetailWrapper">
      <!-- 商品图 -->
      <div class="goodsImage">
        <img :src="'http://119.3.208.63:8000' + goodsInfo.goods_cover_image" alt>
      </div>
      <!-- 限时抢购  -->
        <div class="flash" v-show="isFlash">
          <div class="flashLeft">
            <span>限时抢购</span>
          </div>
          <div class="flashRight">
            <span>距离结束还有</span>
            <!-- 倒计时 -->
            <van-count-down :time="time" class="countStyle" format="HH mm ss">
              <template v-slot="timeData">
                <span class="item">{{ timeData.hours }}</span>
                <i>:</i>
                <span class="item">{{ timeData.minutes }}</span>
                <i>:</i>
                <span class="item">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
        </div>
      <!-- 商品名称 -->
      <div class="productInfo">
        <div class="title">{{goodsInfo.goods_name}}</div>
        <div class="subTitle">{{goodsInfo.goods_intro}}</div>
        <span class="originPrice">￥{{goodsInfo.original_price}}</span>
        <span class="price">￥{{goodsInfo.selling_price}}</span>
        <van-divider/>
        <div class="shippingInfo">
          运费：免运费
        </div>
        <van-divider/>
        <div class="shippingInfo">
          商家保证：最迟15天内发货
        </div>
      </div>
      <!-- 规格 -->
      <div class="specifications">
        <div class="specificationsTitle">商品信息</div>
        <van-divider dashed/>
        <div class="conditions">
          <span>商品简介</span>
          <span class="conditionsOne">{{goodsInfo.goods_intro}}</span>
        </div>
        <van-divider dashed/>
        <div class="conditions">
          <span>商品详情</span>
          <span class="conditionsTwo">{{goodsInfo.goods_detail_content}}</span>
        </div>
        <van-divider dashed/>
      </div>
      <div class="showGoods">
        <img :src="'http://119.3.208.63:8000' + goodsInfo.goods_cover_image" alt>
        <img src="../../assets/detailImage.jpg">
        <br><br><br>
      </div>

      <!-- 底部商品导航    -->
      <van-goods-action :safe-area-inset-bottom="true" style="">
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickChat"/>
        <van-goods-action-icon icon="star" :color="starColor" :text="starText" @click="onClickStar"/>
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickAddToCar"/>
        <van-goods-action-button type="danger" text="立即购买" @click="onClickBuy"/>
      </van-goods-action>

      <!-- 商品sku -->
      <good-sku ref="sku" :goodsId="goodsInfo.goods_id" :goods="goodsInfo"></good-sku>
    </div>
  </div>
</template>

<script type="text/javascript">
// import { mapState, mapMutations } from "vuex";
import { Toast, NavBar } from "vant"
import Vue from "vue"
import goodSku from './base/goodSku'

Vue.use(NavBar)

export default {
  data() {
    return {
      // 倒计时时间设置
      time: 30 * 60 * 1000 * 100,
      // 是否是限时抢购
      isFlash: false,
      goodsInfo: {},
      starText: '收藏',
      starColor: '',
      isStar: false,
      isShowSku: true // 商品的sku显隐
    }
  },
  components: {
    goodSku
  },
  computed: {
    // ...mapState(["shopCart"])
    // 购物车商品数量
    // goodsNum () {
    //   let num = 0
    //   Object.values(this.shopCart).forEach((goods, index) => {
    //     num += goods.num
    //   })
    //   if (num > 0) {
    //     return num
    //   }
    // }
  },
  created () {
    this.goodsInfo = this.$route.params.goodsInfo
    this.isFlash = this.$route.params.isFlash
    // console.log(this.goodsInfo)
  },
  methods: {
    // ...mapMutations(["ADD_TO_CART"]),
    // 返回
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickAddToCar () {
      // this.ADD_TO_CART(this.goodsInfo);
      this.$refs.sku._data.showSku = true
    },
    onClickBuy () {
      this.$refs.sku._data.showSku = true
    },
    onClickChat () {
      Toast('功能未研发')
    },
    onClickStar () {
      // console.log('aaa')
      if (this.isStar){
        this.isStar = false
        this.starColor = ''
        this.starText = '收藏'
        Toast('取消收藏成功')
      } else {
        this.isStar = true
        this.starColor = '#FF5000'
        this.starText = '已收藏'
        Toast('收藏成功')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#goodsDetail {
  background-color: #f5f5f5;
  .goodsDetailWrapper {
    overflow: hidden;
    margin-top: 2.7rem;
    .goodsImage {
      width: 100%;
      img {
        width: 100%;
        height: 80%;
      }
    }
    .flash {
      display: flex;
      flex: 1;
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      .flashLeft {
        width: 35%;
        background-color: #FF5000;
        span {
          font-size: 0.8rem;
          color: #ffffff;
          padding-left: 1rem;
        }
        i {
          padding-left: 0.6rem;
          font-size: 0.5rem;
          color: #ffffff;
        }
      }
      .flashRight {
        width: 70%;
        background-color: #fcefe9;
        height: 2rem;
        line-height: 2rem;
        padding-left: 0.5rem;
        font-size: 0.5rem;
        color: #FF5000;
        .countStyle {
          display: inline;
          margin-left: 0.3rem;
          .item {
            display: inline-block;
            width: 22px;
            margin-right: 5px;
            color: #fff;
            font-size: 12px;
            text-align: center;
            background-color: #FF5000;
          }
          i {
            color: #FF5000;
            padding-right: 0.2rem;
          }
        }
      }
    }
    .productInfo {
      background-color: white;
      padding: 0.5rem;
      .title {
        color: black;
        font-size: 0.8rem;
      }
      .subTitle {
        padding: 0.5rem 0;
        color: grey;
        font-size: 0.6rem;
      }
      .originPrice {
        color: #FF5000;
        padding-right: 0.5rem;
        font-size: 0.8rem;
      }
      .price {
        color: grey;
        font-size: 0.5rem;
        text-decoration: line-through;
      }
      .totalSales {
        float: right;
        color: #FF5000;
        font-size: 0.8rem;
      }
      .shippingInfo {
        font-size: 0.6rem;
        height: 0.8rem;
        color: grey;
        margin-bottom: 7px;
        margin-left: 5px;
      }
    }
    .specifications {
      width: 100%;
      background-color: white;
      margin-top: 1rem;
      padding-left: 0.5rem;
      .specificationsTitle {
        padding-top: 1rem;
        font-size: 1rem;
        color: black;
      }
      .conditions {
        font-size: 0.6rem;
        height: 1rem;
        color: grey;
        .conditionsOne {
          padding-left: 2rem;
        }
        .conditionsTwo {
          padding-left: 2rem;
        }
      }
    }
    .showGoods {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>
