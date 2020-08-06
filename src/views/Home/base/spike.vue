<template>
  <div class="spike">
    <!-- 秒杀倒计时 -->
    <van-row type="flex" justify="space-between">
      <van-col class="title">
        <span>限时抢购</span>
        <van-count-down :time="time">
          <template v-slot="timeData">
            <span class="time-item">{{ timeData.hours }}</span>:
            <span class="time-item">{{ timeData.minutes }}</span>:
            <span class="time-item">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </van-col>
      <van-col class="more" @click="moreClick">
        <span>更多</span>
        <van-icon name="arrow" />
      </van-col>
    </van-row>
    <!-- 秒杀商品 -->
    <van-row class="spike-goods" type="flex" justify="space-between">
      <van-col class="spike-goods-item" @click="goDetail(index)" v-for="(item, index) in spikeGoods" :key="index">
        <van-image
          fit="contain"
          lazy-load
          radius="5px"
          :src="item.url"
        />
        <div class="van-multi-ellipsis--l2">{{item.title}}</div>
        <div class="price">
          <span>￥{{item.nowPrice}}</span>
          <s>￥{{item.formerPrice}}</s>
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
  data () {
    return {
      time: 2 * 60 * 60 * 1000,
      spikeGoods: [
        {
          id: 1,
          title: '精品五花肉',
          url: 'https://img.ddimg.mobi/product/4513b9fc5935f1548406258985.jpg!deliver.product.list',
          nowPrice: 110,
          formerPrice: 118,
          total_sales: 100
        },
        {
          id: 2,
          title: '宝宝花生酱',
          url: 'https://ddimg.ddxq.mobi/abf3023fb51611526109391551.jpg!maicai.product.list',
          nowPrice: 110,
          formerPrice: 118,
          total_sales: 100
        },
        {
          id: 3,
          title: '丸圆',
          url: require('../../../assets/QQ图片20200326191252.jpg'),
          nowPrice: 110,
          formerPrice: 118,
          total_sales: 100
        }
      ]
    }
  },
  methods: {
    goDetail (index) {
      // console.log(index)
      // console.log(this.spikeGoods[index])
       this.$router.push({
         name: 'detail',
          params: {
          goodid: index,
          goodsInfo: this.spikeGoods[index],
          isFlash: true
        }
       })
    },
    moreClick () {
      Toast('没有更多了')
    }
  }
}
</script>
<style lang="scss" scoped>
.spike {
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-miaosha {
      font-size: 20px;
      color: #FF5000;
      margin-right: 5px;
    }
    span {
      font-size: 16px;
      font-weight: bold;
      margin-right: 5px;
    }
    .time-item {
      display: inline-block;
      width: 20px;
      border-radius: 3px;
      margin-right: 3px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background-color: #FF5000;
    }
  }
  .more {
    color: #FF5000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
  }
  .spike-goods {
    overflow-x: auto;
    .spike-goods-item {
      padding: 10px 0;
      margin-right: 7px;
      width: 100%;
      img {
        border-radius: 5px;
      }
      .price {
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        span {
          font-size: 14px;
          color: #FF5000;
        }
        s {
          color: #bbb;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
