<template>
  <div class="icons-nav">
    <van-grid :border="false" :column-num="5">
      <van-grid-item v-for="(item,index) in icons" :key="index" @click="onClick(item)">
        <van-image class="iconimg" :src="item.iconUrl"/>
        <span class="name">{{item.name}}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  data () {
    return {
      icons: [
        {
          name: '飞猫新品',
          iconUrl: 'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1'
        },
        {
          name: '今日爆款',
          iconUrl: 'https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1'
        },
        {
          name: '飞猫国际',
          iconUrl: 'https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1'
        },
        {
          name: '饿了吗',
          iconUrl: 'https://gw.alicdn.com/tfs/TB1DaMyVpzqK1RjSZFoXXbfcXXa-185-144.png?getAvatar=1'
        },
        {
          name: '飞猫超市',
          iconUrl: 'https://gw.alicdn.com/tfs/TB1FucwVwHqK1RjSZFgXXa7JXXa-183-144.png?getAvatar=1'
        },
        {
          name: '充值中心',
          iconUrl: 'https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1'
        },
        {
          name: '机票酒店',
          iconUrl: 'https://gw.alicdn.com/tfs/TB1O_AyVwHqK1RjSZFPXXcwapXa-183-144.png?getAvatar=1'
        },
        {
          name: '金币庄园',
          iconUrl: 'https://gw.alicdn.com/tfs/TB19yZJVBLoK1RjSZFuXXXn0XXa-183-144.png?getAvatar=1'
        },
        {
          name: '阿里拍卖',
          iconUrl: 'https://gw.alicdn.com/tfs/TB16ZYDk4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1'
        },
        {
          name: '某宝吃货',
          iconUrl: 'https://gw.alicdn.com/tfs/TB19dcwVyrpK1RjSZFhXXXSdXXa-183-144.png?getAvatar=1'
        }
      ]
    }
  },
  created () {
    // 请求Icons nav 数据
    // this.getIconsData()
  },
  methods: {
    // getIconsData () {
    //   this.$api.homeData.iconsNav().then(({ data: { iconnav } }) => {
    //     this.icons = iconnav
    //     console.log(iconnav)
    //   })
    // },
    onClick (item) {
      this.$toast(item.name)
    }
  }
}
</script>
<style lang="scss">
.icons-nav {
  position: relative;
  .van-grid {
      border-radius: 10px;
  }
  .van-grid-item__content {
    padding: 5px;
    .iconimg {
      width: 50px;
      height: 40px;
      margin-bottom: 5px;
    }

    span.name {
      font-size: 11px;
    }
  }
}
</style>
