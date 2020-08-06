module.exports = {
  devServer: {
    open: true, // 是否自动弹出浏览器页面
    host: "localhost",
    port: '8080',
    proxy: {
      '/api': {
        target: 'http://119.3.208.63:8000', // 请求服务器根路径
        changeOrigin: true, // 是否跨域
        ws: true, // websocket
        pathRewrite: { // 重写路径: 当检测到请求地址里包含 /v1 时,将此路径进行跨域代理操作
          '^/api': '/api'
        }
      }
    }
  }
}