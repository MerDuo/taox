<template>
  <div>
    <van-nav-bar title="新增地址" left-arrow @click-left="onClickLeft" />
    <van-address-edit :area-list="areaList" :address-info="addressInfo" show-postal show-delete show-set-default
      show-search-result :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave"
      @delete="onDelete" @change-detail="onChangeDetail" ref="AddressEdit" />
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import areaList from "../../assets/area.js"
  export default {
    computed: {
      ...mapState(['addressId', 'addressChangeList'])
    },
    data() {
      return {
        areaList,
        searchResult: []
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push('/cart')
      },
      onSave(content) {
        console.log(content)
        // addressDetail: "杭州市西湖区 黄龙万科中心"
        // areaCode: "110106"
        // city: "北京市"
        // country: ""
        // county: "丰台区"
        // isDefault: false
        // name: "af"
        // postalCode: "147258"
        // province: "北京市"
        // tel: "13368130592"
        if (this.addressId != 0) {
          this.$api.address.editAddress(content, this.addressId)
          // this.$router.push('/addressList')
        } else {
          this.$api.address.addAddress(content)
          // this.$router.push('/addressList')
        }
        this.$router.push('/cart')
      },
      onDelete() {
        this.$toast('delete')
      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [{
            name: '二仙桥街道',
            address: '成都理工大学'
          }]
        } else {
          this.searchResult = []
        }
      }
    },
    created() {
      if (this.addressId != 0) {
        this.addressInfo = {
          name: this.addressChangeList[0].user_name,
          tel: this.addressChangeList[0].user_phone,
          province: this.addressChangeList[0].province_name,
          city: this.addressChangeList[0].city_name,
          county: this.addressChangeList[0].region_name,
          postalCode: this.addressChangeList[0].area_code,
          addressDetail: this.addressChangeList[0].detail_address,
          isDefault: this.addressChangeList[0].default_flag,
          areaCode: this.addressChangeList[0].area_code
        }
      }
    }
    // mounted() {
    //     this.$refs.AddressEdit.setAddressDetail();
    //   },
  }
</script>

<style>
</style>
