<template>
  <div class="icons-nav">
    <van-grid :border="false" :column-num="5">
      <van-grid-item v-for="(item,index) in icons" :key="index" @click="onClick">
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
          name: '精品男装',
          iconUrl: 'http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50'
        },
        {
          name: '精品男装',
          iconUrl: 'http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50'
        },
        {
          name: '精品男装',
          iconUrl: 'http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50'
        },
        {
          name: '精品男装',
          iconUrl: 'http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50'
        },
        {
          name: '精品男装',
          iconUrl: 'http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50'
        },
        {
          name: '精品男装',
          iconUrl: 'http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50'
        },
        {
          name: '精品男装',
          iconUrl: 'http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50'
        },
        {
          name: '精品男装',
          iconUrl: 'http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50'
        },
        {
          name: '精品男装',
          iconUrl: 'http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50'
        },
        {
          name: '精品男装',
          iconUrl: 'http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50'
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
    onClick () {
      this.$toast("功能未开发")
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
      width: 26px;
      height: 26px;
      margin-bottom: 5px;
    }

    span.name {
      font-size: 11px;
    }
  }
}
</style>
