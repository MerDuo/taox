import axios from "../http"

const order = {
  // 请求地址
  getOrder(status = 10) {
    if (status == 10) {
      return axios.get(`api/v1/order/`)
    }
    return axios.get(`api/v1/order/?status=${status}`)
  }
}

export default order
