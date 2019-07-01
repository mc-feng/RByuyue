//index.js
//获取应用实例
const app = getApp()
import http from '../../api/api'
Page({
  data: {
  },
  onLoad: function () {
    // wx.reLaunch({
    //   url: '/pages/loge/index/index',
    // })
    // var that = this;
    // that.checkOpenId();
  },
  onShow: function () { 
  },
  //防止网络延迟获取不到openid
  // checkOpenId() {
  //   setTimeout(res, 1000)
  //   function res() {
  //     if (app.globalData.openId) {

  //     } else {
  //       wx.login({
  //         success: res => {
  //           http.info({
  //             data: {
  //               code: res.code
  //             },
  //             success(res) {
  //               app.globalData.openId = res.data.openid
  //             },
  //             fail(err) {
  //               console.log(err)
  //             }
  //           })
  //           // 发送 res.code 到后台换取 openId, sessionKey, unionId
  //         }
  //       })
  //     }
  //   }
  // },
})
