import axios from "../http"

const cartData = {
  // 商品详细页数据请求
  getData() {
    // return axios.get(`http://api01.6bqb.com/pdd/detail?apikey=C3B20706341F6390F227115655C32AFE&itemid=${goodsId}`)
    return axios.get('api/v1/cart/')
  },
  changeCount(goodsId, count) {
    if (count == 1) {
      return axios.post(`api/v1/cart/inc_dec_item/1/`, {
        goods_id: goodsId
      })
    } else {
      return axios.post(`api/v1/cart/inc_dec_item/2/`, {
        goods_id: goodsId
      })
    }
  },
  createOrder(cartList) {
    var data = []
    for (var i = 0; i < cartList.length; i++) {
      data.push({
        goods_id: cartList[i].goods.goods_id,
        goods_count: cartList[i].goods_count
      })
    }
    console.log(data)
    return axios.post('/api/v1/order/',
      // JSON.stringify(data)
      data
    )
  },
  payOrder(orderId) {
    return axios.get(`/api/v1/pay_order?order_id=${orderId}`)
  },
  addCart() {
    return axios.get(`/api/v1/cart?goods_id=10005&goods_count=1`).then(({
      data
    }) => {
      console.log(data)
      // var list = []
      // list[]
      // this.cartList = data
    })
  },
  // sku增加购物车
  addGoods(goodsId, goodsNum) {
    return axios.get('/api/v1/cart', {
      params: {
        goods_id: goodsId.toString(),
        goods_count: goodsNum.toString()
      }
    })
  }

}

export default cartData
