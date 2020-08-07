import axios from "../http"

const cartData = {
  // 商品详细页数据请求
  getData() {
    // return axios.get(`http://api01.6bqb.com/pdd/detail?apikey=C3B20706341F6390F227115655C32AFE&itemid=${goodsId}`)
    return axios.get('api/v1/cart/').then(({
      data
    }) => {
      console.log(data)
      // var list = []
      // list[]
      // this.cartList = data
    })
  },
  changeCount(goodsId, count) {
    // 返回成功/失败
    if (count == 1) {
      axios.post(`api/v1/cart/inc_dec_item/1`, {
        goods_id: goodsId
      })
    } else {
      axios.post(`api/v1/cart/inc_dec_item/-1`, {
        goods_id: goodsId
      })
    }
  },
  createOrder(cartList) {
    var data = []
    for (var i = 0; i < cartList.length; i++) {
      data.push({
        goods_id: cartList[i].goods_id,
        goods_count: cartList[i].goods_count
      })
    }
    return axios.post('/api/v1/cart', {
      goods: data
    }).then(({
      data
    }) => {
      console.log(data)
      // var list = []
      // list[]
      // this.cartList = data
    })
  },
  payOrder(orderId){
    return axios.get(`/api/v1/pay_order?order_id=${orderId}`).then(({
      data
    }) => {
      console.log(data)
      // var list = []
      // list[]
      // this.cartList = data
    })
  }
}

export default cartData
