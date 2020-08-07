import axios from "../http"

const cartData = {
  // 商品详细页数据请求
  getData() {
    // return axios.get(`http://api01.6bqb.com/pdd/detail?apikey=C3B20706341F6390F227115655C32AFE&itemid=${goodsId}`)
    return axios.get('/api/v1/cart/')
  },
  changeCount(goodsId, goodsCount) {
    // 返回成功/失败
    return axios.get(``)
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
      goods:data
    })
  }
}

export default cartData
