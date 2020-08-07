<template>
  <div>
    <van-nav-bar title="新增地址" left-arrow @click-left="onClickLeft" />
    <van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete" @change-detail="onChangeDetail" ref="AddressEdit" />
  </div>
</template>

<script>
  import areaList from "../../assets/area.js"
  export default {
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
        this.$toast('save')
        this.$router.push('/addressList')
      },
      onDelete() {
        this.$toast('delete')
      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }]
        } else {
          this.searchResult = []
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
