<template>
  <!-- 我的资产 -->
  <div class="my-assets">
    <div class="assets-wrapper">
      <van-cell value="我的资产" />
      <van-row type="flex" justify="space-between" align="center" class="assets-list">
        <van-col class="item" v-for="(item,index) in Data" :key="index">
          <span @click="setTrue">
            <span>{{item.num}}</span>
            <span class="m-t-5">{{item.name}}</span>
          </span>
          <van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
            <van-coupon-list :coupons="coupons" :chosen-coupon="chosenCoupon" :disabled-coupons="disabledCoupons"
              @change="onChange" @exchange="onExchange" :show-close-button="showBtn" />
          </van-popup>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  const coupon = {
    available: 1,
    condition: '无使用门槛\n最多优惠999元',
    reason: '',
    value: 1500,
    name: '全品类无门槛优惠券',
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: '150',
    unitDesc: '元'
  }

  export default {
    data() {
      return {
        showBtn: false,
        showList: false,
        chosenCoupon: -1,
        coupons: [coupon],
        disabledCoupons: [coupon],
        Data: [{
            name: "优惠卷",
            num: "2"
          },
          {
            name: "积分",
            num: "7"
          },
          {
            name: "红包",
            num: "0"
          },
          {
            name: "礼品卡",
            num: "0"
          },
          {
            name: "津贴",
            num: "0"
          }
        ]
      }
    },
    methods: {
      onChange(index) {
        this.showList = false
        this.chosenCoupon = index
      },
      onExchange(code) {
        this.coupons.push(coupon)
      },
      setTrue() {
        this.showList = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-assets {
    padding: 0 10px;

    .assets-wrapper {
      border-radius: 5px;
      overflow: hidden;

      .assets-list {
        background-color: #fff;
        padding: 10px 20px;

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
</style>
