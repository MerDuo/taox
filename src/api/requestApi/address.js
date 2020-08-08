import axios from "../http"

const address = {
  // 请求地址
  getAddress() {
    return axios.get('api/v1/address/')
  },
  addAddress(content) {
    return axios.post('api/v1/address/', {
      user_name: content.name,
      user_phone: content.tel,
      province_name: content.province,
      city_name: content.city,
      region_name: content.county,
      detail_address: content.addressDetail,
      area_code: content.areaCode,
      default_flag: content.isDefault
    })
  },
  editAddress(content, id) {
    return axios.put('api/v1/address/' + id + '/', {
      user_name: content.name,
      user_phone: content.tel,
      province_name: content.province,
      city_name: content.city,
      region_name: content.county,
      detail_address: content.addressDetail,
      area_code: content.areaCode,
      default_flag: content.isDefault
    })
  },
  changeOrderAddress(orderId, addrId) {
    return axios.post('api/v1/order/set_addr/', {
      order_id: orderId,
      addr_id: addrId
    })
  }
}

export default address
