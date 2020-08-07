import axios from "../http"

const address = {
  // 请求地址
  getAddress(goodsId) {
    return axios.get('api/v1/address/').then(({
      data
    }) => {
      console.log(data)
      // var list = []
      // list[]
      // this.cartList = data
    })
  }
}

export default address
