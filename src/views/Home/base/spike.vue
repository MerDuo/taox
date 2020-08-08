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
          :src="'http://119.3.208.63:8000' + item.goods_cover_image"
        />
        <div class="van-multi-ellipsis--l2">{{item.goods_name}}</div>
        <div class="price">
          <span>￥{{item.selling_price}}</span>
          <s>￥{{item.original_price}}</s>
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { Toast } from 'vant'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      time: 2 * 60 * 60 * 1000,
      spikeGoods: []
    }
  },
  created () {
    this.$api.homeData.spikeGoods().then(res => {
      this.spikeGoods = [].concat(res.data.data)
    })
  },
  methods: {
    ...mapMutations(['changeGoodsInfo']),
    goDetail (index) {
      // console.log(index)
      // console.log(this.spikeGoods[index])
      this.$store.commit('changeGoodsInfo', this.spikeGoods[index])
       this.$router.push({
         name: 'detail',
          params: {
          goodid: index,
          isFlash: true
        }
       })
    },
    moreClick () {
      Toast('滑动商品查看更多')
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
      .van-image {
        height: 100px;
        width: 100px;
      }
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
          margin-top: 2px;
        }
      }
      .van-multi-ellipsis--l2 {
        font-size: 12px;
      }
    }
  }
}
</style>
