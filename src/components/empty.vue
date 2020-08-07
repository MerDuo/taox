<template>
  <van-empty description="这里什么都没有...">
    <van-button color="#FF5000" class="bottom-button" round @click="jumpToHome" >
      去逛逛
    </van-button>
  </van-empty>
</template>

<script>
  export default {
    methods: {
      jumpToHome(){
        this.$router.push('/')
      }
    }
  }
</script>

<style>
   .bottom-button {
      width: 160px;
      height: 40px;
    }
</style>
