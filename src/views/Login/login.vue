<template>
  <div class="login">
    <!-- 登录页logo -->
    <div class="logo">
      <img src="../../assets/loginHead.png"/>
    </div>
    <!-- 用户名+密码登录 -->
    <div v-if="isLogin">
    <div class="user-form">
      <van-field clearable type="text" v-model="username" placeholder="请输入用户名"/>
      <van-field
        type="password"
        clearable
        v-model="password"
        @keyup.enter="onLogin"
        placeholder="请输入密码"
      />
    </div>
    <div class="login-btn">
      <van-button
        @click="onLogin"
        color="#FF8400"
        round
        block
        :disabled="isDisabled"
        type="default"
      >登录</van-button>
    </div>
    <div class="login-tips">
      <span @click="isLogin=false">注册账号</span>
      <span @click="forgetPwd">忘记密码</span>
    </div>
    </div>
    <div v-else>
      <div class="user-form2">
      <van-field clearable type="text" v-model="username" placeholder="请输入用户名"/>
      <van-field clearable type="text" v-model="nickname" placeholder="请输入昵称"/>
      <van-field
        type="password"
        clearable
        v-model="password"
        @keyup.enter="onRegister"
        placeholder="请输入密码"
      />
      <van-field
        type="password"
        clearable
        v-model="password2"
        @keyup.enter="onRegister"
        placeholder="请再次输入密码"
      />
    </div>
    <div class="login-btn">
      <van-button
        @click="onRegister"
        color="#FF8400"
        round
        block
        :disabled="isDisabled"
        type="default"
      >注册</van-button>
    </div>
    </div>
    <!-- 退出登录页面 -->
    <div class="cross-login" @click="handleBack">
      <van-icon size="16px" name="cross" color="#fff"></van-icon>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      password: "", // 密码
      password2: '',
      username: "", // 用户名
      nickname: '', // 昵称
      isDisabled: true,
      isLogin: true
    }
  },
  created() {
  },
  methods: {
    ...mapMutations(['changeLogin']),
    // 返回上一页
    handleBack() {
      this.$router.go(-1)
    },
    onLogin() {
      localStorage.removeItem('Authorization')
      const _this = this
      axios({
          method: 'post',
          url: '/api/v1/login/',
          data: {
          username: this.username,
          password: this.password
          }
        }).then(res => {
          // console.log(res.data)
          _this.userToken = res.data.data.token
          // console.log(_this.userToken)
          // 将用户token保存到vuex中
          _this.changeLogin({ Authorization: _this.userToken })
          _this.$router.push('/home')
          Toast('登陆成功')
        }).catch(error => {
          Toast('账号或密码错误')
          console.log(error)
        })
    },
    onRegister () {
      const This = this
      if (this.password !== this.password2) {
        Toast('两次密码输入不一致')
      } else {
        axios.post('api/v1/register/',{
          login_name: this.username,
          nickname: this.nickname,
          user_pwd: this.password,
          password2: this.password2
        }).then(res => {
          // console.log(res)
          Toast('注册成功')
          This.$router.go(0)
        })
      }
    },
    forgetPwd () {
      Toast('功能未研发')
    }
  },
  watch: {
    password (val, oldVal) {
      this.isDisabled = (!this.password || !this.username)
    }
  }
}
</script>

<style lang="scss">
.login {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 10%;
  background: linear-gradient(to bottom, #fff 0%, #fff 100%);
  .cross-login {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #FF8400;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    display: flex;
    justify-content: center;
    margin-top: 75px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
  .van-divider {
    color: #fff;
  }
  .user-form {
    padding-top: 15px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .van-field {
      // border-radius: 50px;
      border-bottom: 1px solid #FF8400;
      width: 90%;
    }
    .van-field__control {
      font-size: 15px;
    }
  }
  .user-form2 {
    margin-left: 20px;
    margin-top: 10px;
    .van-field {
      border-bottom: 1px solid #FF8400;
      width: 90%;
    }
    .van-field__control {
      font-size: 15px;
    }
  }
  .login-btn {
    margin-top: 30px;
    .van-button__text {
      color: #fff;
      font-size: 16px;
    }
  }
  .login-tips {
    padding: 10px;
    color: #000;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
