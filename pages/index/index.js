//index.js
//获取应用实例
const app = getApp()
import http from '../../api/api'
Page({
  data: {
  },
  onLoad: function () {
    var that = this;
    // that.checkOpenId();
    that.getProject();
  },
  onShow: function () { 

  },
  /*获取项目*/
  getProject(){
    http.getProject({
      success(res){
        console.log(res)
      },fail(){

      }
    })
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
