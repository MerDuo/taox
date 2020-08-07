/**
 * 这里是统一接口的管理
 */

// 首页数据请求接口
import homeData from "./requestApi/homeData"

// 商品详情页请求接口
import detailData from "./requestApi/detailData"

// 购物车数据请求
import cartData from "./requestApi/cartData"

export default {
  homeData,
  detailData,
  cartData
}
