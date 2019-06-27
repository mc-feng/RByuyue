//app.js
import http from './api/api'
App({
  onLaunch: function () {
    //定位到登录页
    // wx.reLaunch({
    //   url: '/pages/loge/index/index',
    // })
    //登录获取openid并保存全局变量
    // this.loge()
  },
  // loge(){
  //   // 登录
  //   var that = this
  //   wx.login({
  //     success: res => {
  //       http.info({
  //         data: {
  //           code: res.code
  //         },
  //         success(res) {
  //           console.log(res)
  //           that.globalData.openId = res.data.openid
  //         },
  //         fail(err){
  //           console.log(err)
  //         }
  //       })
  //       console.log(res)
  //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
  //     }
  //   })
  // },
  globalData: {
    openId:null
  }
})
