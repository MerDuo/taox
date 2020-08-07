import axios from "../http"

const cartData = {
  // 商品详细页数据请求
  getData(userId) {
    // console.log(axios.get(`./cart.json`))
    // return axios.get(`http://api01.6bqb.com/pdd/detail?apikey=C3B20706341F6390F227115655C32AFE&itemid=${goodsId}`)
    // return axios.get(`./cart.json`)
    return axios.get('http://localhost:8080/#/cart/api')
  },
  changeCount(userId,goodsId,goodsCount) {
    // 返回成功/失败
    return axios.get(``)
  }
}

export default cartData
