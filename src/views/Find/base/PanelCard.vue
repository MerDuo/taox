<template>
  <div class="panel-card">
    <!-- 用户信息 -->
    <div class="container">
      <van-row type="flex" justify="space-between" align="center">
        <van-col class="user-info">
          <div class="user-avatar">
            <van-image width="40" height="40" lazy-load src="https://img.xiaohongshu.com/avatar/5e7ce0c487b18e0001a99d6f.jpg@240w_240h_90q_1e_1c_1x.jpg"
              type="contain" />
          </div>
          <div class="user-name-time">
            <div class="name">养猪人家</div>
            <div class="time">9:14</div>
          </div>
        </van-col>
        <van-col class="scan">423阅读</van-col>
      </van-row>
      <!-- 标题 -->
      <div class="van-multi-ellipsis--l2">最近好多小宝贝来问我英文名，所以今天随手搞了个小测试，上面都是我个人超喜欢的一些英文名。听说有种喜欢就是一见钟情😋</div>
      <!-- 图片 -->
      <van-row class="img-wrapper">
        <van-col :span="8">
          <van-image lazy-load src="http://ci.xiaohongshu.com/9ba1c56c-ae50-595a-bcab-86914a22e308?imageView2/2/w/1080/format/jpg"
            type="contain" />
        </van-col>
        <van-col :span="8">
          <van-image lazy-load src="https://ci.xiaohongshu.com/5a207881-6a46-53d4-9fa7-9044b1f04c77?imageView2/2/w/1080/format/jpg"
            type="contain" />
        </van-col>
        <van-col :span="8">
          <van-image lazy-load src="https://ci.xiaohongshu.com/df5b06e3-ef41-5d3a-97bd-d68852b346f1?imageView2/2/w/1080/format/jpg"
            type="contain" />
        </van-col>
      </van-row>
      <!-- 收藏,转发,采购 -->
      <van-row class="favorite-share" type="flex" justify="space-between" align="center">
        <van-col>
          <van-icon size=".5rem" name="star-o" />
          <span>收藏</span>
        </van-col>
        <van-col>
          <van-icon size=".5rem" name="share" />
          <span @click="showShare = true">转发</span>
          <van-share-sheet v-model="showShare" title="分享给好友" :options="options" @select="onSelect" />
        </van-col>
        <van-col>
          <van-button size="mini" round color="#FF5000" @click="jump">去购买</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showShare: false,
        options: [{
            name: '微信',
            icon: 'wechat'
          },
          {
            name: '微博',
            icon: 'weibo'
          },
          {
            name: '复制链接',
            icon: 'link'
          },
          {
            name: '分享海报',
            icon: 'poster'
          },
          {
            name: '二维码',
            icon: 'qrcode'
          }
        ]
      }
    },
    methods: {
      onSelect(option) {
        this.$toast(option.name)
        this.showShare = false
      },
      jump(){
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .panel-card {
    padding: 10px;
    padding-bottom: 0;

    .container {
      background-color: #fff;
      border-radius: 5px;
      padding: 10px;

      // 用户信息
      .user-info {
        display: flex;

        .user-avatar {
          margin-right: 5px;
        }

        .user-name-time {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 3px;

          .name {
            color: #000;
            font-weight: bold;
          }
        }
      }

      .scan {
        color: #bbb;
      }

      // 标题
      .title {
        margin-top: 5px;
        font-size: 14px;
      }

      .img-wrapper {
        margin-top: 10px;

        .van-col {
          padding: 0 3px;
        }
      }

      .favorite-share {
        margin-top: 5px;

        .van-col {
          display: flex;
          align-items: center;
          color: #aaa;

          span {
            margin-left: 3px;
          }
        }
      }
    }
  }
</style>
