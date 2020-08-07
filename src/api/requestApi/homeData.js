import axios from "../http"

const homeData = {
  // 首页banner
  async banner() {
    return await axios
      .get(
        "api/v1/banners/"
      )
  },
  // 猜你喜欢
  async likeGoods(url) {
    return await axios.get(
      url
    )
  },
  // 限时抢购
  async spikeGoods() {
    return await axios.get('api/v1/goods/?is_flash_sale=true')
  }
}
export default homeData
