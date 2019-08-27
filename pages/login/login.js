// pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    last_time: '',
    is_show: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /*切换登录方式*/
  switchTab(event) {
    console.log(event.target.dataset.current)
    this.setData({
      currentTab: event.target.dataset.current,
    });
  },
  /*提交表单-密码登录*/
  pwFormSubmit(e){
    var phoneReg = /^1\d{10}$/;
    // var pwReg = /^[a-zA-Z0-9]{6,18}$/;
    console.log(e)
    if (e.detail.value.pw_phoneNum==''){
      app.error('请填写手机号码')
    } else if (!phoneReg.test(e.detail.value.pw_phoneNum)){
      app.error('手机号格式不正确')
    } else if (e.detail.value.pw_password==''){
      app.error('密码不能为空')
    }else{

    }
  },
  
  /*提交表单-验证码登录*/
  codeFormSubmit(e){
    console.log(e)
    var phoneReg = /^1\d{10}$/;
    // var pwReg = /^[a-zA-Z0-9]{6,18}$/;
    console.log(e)
    if (e.detail.value.code_phoneNum == '') {
      app.error('请填写手机号码')
    } else if (!phoneReg.test(e.detail.value.code_phoneNum)) {
      app.error('手机号格式不正确')
    } else {

    }
  },
  /*发送验证码*/
  sendCode: function () {
    var countdown = 60;
    var that = this;
    var settime = function (that) {
      if (countdown == 0) {
        that.setData({
          is_show: true
        })
        countdown = 60;
        return;
      } else {
        that.setData({
          is_show: false,
          last_time: countdown
        })

        countdown--;
      }
      setTimeout(function () {
        settime(that)
      }, 1000)
    }
    // 将获取验证码按钮隐藏60s，60s后再次显示
    that.setData({
      is_show: (!that.data.is_show)  //false
    })
    settime(that);
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})