<template>
  <div class="grid-card">
    <van-row class="title">
      <van-col>{{title}}</van-col>
    </van-row>
    <van-grid :column-num="2" class="border-r-5"  clickable :gutter="4">
      <van-grid-item v-for="(item,index) in Data" :key="index" :text="item.goods_name" @click="itemClick(index)">
          <div slot="icon">
              <img class="icon-img" :src="'http://119.3.208.63:8000' + item.goods_cover_image" alt="item.title">
          </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
 import { Toast } from 'vant'
export default {
    props: {
        title: {
            type: String,
            default: "标题"
        },
        Data: Array
    },
    methods: {
        itemClick (index) {
            this.$router.push({
                name: 'detail',
                params: {
                goodid: index,
                goodsInfo: this.Data[index],
                isFlash: false
                }
            })
        }
    },
    created () {
        // console.log(this.Data)
    }
}
</script>

<style lang="scss" scoped>
.grid-card{
    margin-top: 10px;
    .title{
        padding: 0 0 5px 5px;
    }
    .border-r-5{
        border-radius: 5px;
        overflow: hidden;
        .icon-img{
            width: 40px;
            height: 40px;
            margin-top: 5px;
        }
    }
    .van-grid-item__content {
        padding: 12px 5px;
    }
    .van-grid-item__text {
        font-size: 10px;
    }
}
</style>
