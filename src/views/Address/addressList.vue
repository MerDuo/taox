<template>
  <div>
    <van-nav-bar title="地址列表" left-arrow @click-left="onClickLeft" />
    <van-address-list v-model="chosenAddressId" :list="list" :disabled-list="disabledList" disabled-text="以下地址超出配送范围"
      default-tag-text="默认" @add="onAdd" @edit="onEdit" />
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant'

  export default {
    data() {
      return {
        chosenAddressId: '1',
        list: [{
            id: '1',
            name: '李华',
            tel: '13542361256',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
            isDefault: true
          },
          {
            id: '2',
            name: '刘丽',
            tel: '13021544425',
            address: '浙江省杭州市拱墅区莫干山路 50 号'
          }
        ],
        disabledList: [{
          id: '3',
          name: '赵乾',
          tel: '13652555545',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }]
      }
    },
    methods: {
      onClickLeft(){
        this.$router.push('/cart')
      },
      onAdd() {
        this.$router.push('/addressEdit')
      },
      onEdit(item, index) {
        // Toast('编辑地址:' + index)
        console.log(item)
      }
    }
  }
</script>

<style>
</style>
