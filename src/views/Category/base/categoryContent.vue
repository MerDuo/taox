<template>
  <div class="category-content">
    <!-- grid card -->
    <div class="content-item">
      <GridCart :Data="contentList" :title="cname"/>
    </div>
  </div>
</template>

<script>
import GridCart from "../../../components/GridCart"
export default {
  components: {
    GridCart
  },
  props:['ccategory_id','cname'],
  created () {
    // console.log(this.ccategory_id)
    this.$api.categoryData.categoryContents(this.ccategory_id).then(res => {
      this.contentList = [].concat(res.data.data.results)
      // console.log(res)
    })
  },
  data() {
    return {
      contentList: []
    }
  },
  watch: {
    cname(oldval, newval) {
      this.$api.categoryData.categoryContents(this.ccategory_id).then(res => {
        this.contentList = [].concat(res.data.data.results)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.category-content {
  padding: 10px;
  background-color: #f0efef;
}
</style>
