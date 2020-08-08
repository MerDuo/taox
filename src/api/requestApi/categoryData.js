import axios from "../http"

const categoryData = {
  // 分类内容
  async categoryContents(id) {
    return await axios
      .get(
        "api/v1/goods/?category_id=" + id
      )
  }
}
export default categoryData
