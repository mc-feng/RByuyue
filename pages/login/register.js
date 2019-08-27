// pages/login/register.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    last_time: '',
    is_show: true,
    privacy:true
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /*注册*/
  formSubmit(e){
    console.log(e)
    var phoneReg = /^1\d{10}$/;
    if(e.detail.value.phoneNum==''){
      app.error('请填写手机号码')
    } else if (!phoneReg.test(e.detail.value.phoneNum)){
      app.error('手机号格式不正确')
    } else if (e.detail.value.code == ''){
      app.error('请填写短信验证码')
    } else if (e.detail.value.password == ''){
      app.error('设置密码不能为空')
    } else if (e.detail.value.password.length < 6 || e.detail.value.password.length>12){
      app.error('请输入符合规则的密码')
    } else if (e.detail.value.confirm_password == '') {
      app.error('确认密码不能为空')
    }else if (e.detail.value.confirm_password != e.detail.value.password) {
      app.error('密码与确认密码不符，请重新输入')
    }else{}
  },
  /*不同意隐私政策*/
  disagree(){
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },
  /*同意隐私政策*/
  agree(){

  },
  /*滑动展示*/
  scroll(e){
    console.log(e)
  },
  /*不显示弹窗*/
  close(){
    console.log('aaa')
    var that = this;
    that.setData({
      privacy:false
    })
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