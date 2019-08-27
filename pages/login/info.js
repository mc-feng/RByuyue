// pages/login/info.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex:'',
    date:'',
    choose_sex: '',
    choose_date:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  parsingId(e){
    console.log(e.detail.value)
    // var date = e.detail.value;
    var idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    if (idcardReg.test(e.detail.value)){
      var year = e.detail.value.substring(6,10);
      var month = e.detail.value.substring(10, 12);
      var day = e.detail.value.substring(12, 14);
      console.log(e.detail.value.substring(16, 17))
      if (Number(e.detail.value.substring(16,17))%2==0){
        this.setData({
          sex: '女'
        })
      }else{
        this.setData({
          sex: '男'
        })
      }
      var date = year + '-' + month + '-'+ day;
      console.log(date)
      this.setData({
        date: date,
      })
    }else{
      app.error('请填写正确身份证号')
    }
    
  },
  formSubmit(e){
    console.log(e)
    var that = this;
    var idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    if (e.detail.value.name==''){
      app.error('姓名不能为空')
    } else if (e.detail.value.Idcard == ''){
      app.error('身份证号不能为空')
    } else if (!idcardReg.test(e.detail.value.Idcard)){
      app.error('请填写正确身份证号')
    } else if (e.detail.value.sex==''){
      app.error('性别不能为空')
    } else if (that.data.date==''){
      app.error('生日不能为空')
    } else{

    }
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
  // bindDateChange: function (e) {
  //   console.log('picker发送选择改变，携带值为', e.detail.value)
  //   this.setData({
  //     choose_date: e.detail.value
  //   })
  // },
  radioChange(e){
    console.log(e)
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