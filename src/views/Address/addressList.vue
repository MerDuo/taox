<template>
  <div>
    <van-nav-bar title="地址列表" left-arrow @click-left="onClickLeft" />
    <van-address-list v-model="chosenAddressId" :list="list" :disabled-list="disabledList" disabled-text="以下地址超出配送范围"
      default-tag-text="默认" @add="onAdd" @edit="onEdit" @select="setAddress" />
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant'
  import {
    mapState
  } from 'vuex'
  export default {
    computed: {
      ...mapState(['orderId'])
    },
    data() {
      return {
        chosenAddressId: '1',
        list: [],
        disabledList: [],
        regionList: []
      }
    },
    methods: {
      setAddress(item, index) {
        this.$api.address.changeOrderAddress(this.orderId,item.id).then(({
          data
        }) => {
          console.log(data)
          Toast("当前地址" + data.msg)
        })
        this.$router.push('/cart')
      },
      onClickLeft() {
        this.$router.push('/cart')
      },
      onAdd() {
        this.$router.push('/addressEdit')
      },
      onEdit(item, index) {
        // Toast('编辑地址:' + index)
        console.log(item, index)
        var list = []
        for (var i = 0; i < this.regionList.length; i++) {
          if (this.regionList[i].address_id == item.id) {
            list.push(this.regionList[i])
          }
        }
        console.log(list)
        const param = {
          id: item.id,
          list: list
        }
        this.$store.commit("changeAddressId", param)
        this.$router.push('/addressEdit')
      }
    },
    created() {
      const param = {
        id: 0,
        list: []
      }
      this.$store.commit("changeAddressId", param)
      this.$api.address.getAddress().then(({
        data
      }) => {
        console.log(data)
        this.regionList = data.data
        for (var i = 0; i < data.data.length; i++) {
          this.list.push({
            id: data.data[i].address_id,
            name: data.data[i].user_name,
            tel: data.data[i].user_phone,
            address: data.data[i].province_name + data.data[i].city_name + data.data[i].region_name + data.data[
              i].detail_address
          })
        }
      })
    }
  }
</script>

<style>
</style>
