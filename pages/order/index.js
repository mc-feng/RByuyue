// pages/order/index.js
import time from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:[],
    dateTimestamp:[],
    dateActive:'0',
    show:true,
    success:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDate();
  },
  getDate(){
    var that = this;
    var now = new Date();
    var timestamp = (new Date().getTime());
    for(var i=0;i<7;i++){
      timestamp = timestamp + 60*60*24*1000;
      that.data.dateTimestamp.push(timestamp);
    }
    for (var i = 0; i < that.data.dateTimestamp.length;i++){
      var dates = time.formatTimeTwo(that.data.dateTimestamp[i], 'Y-M-D-w-h-m-s');
      var arr = dates.split('-');
      if (arr[3]=='00'){
        arr[3] = '日';
      } else if (arr[3] == '01'){
        arr[3] = '一';
      } else if (arr[3] == '02'){
        arr[3] = '二';
      } else if (arr[3] == '03'){
        arr[3] = '三';
      } else if (arr[3] == '04') {
        arr[3] = '四';
      } else if (arr[3] == '05') {
        arr[3] = '五';
      } else if (arr[3] == '06') {
        arr[3] = '六';
      }else{}
      that.data.date.push({ year: arr[0], month: arr[1], day: arr[2],week:arr[3]});
    }
    that.setData({
      date:that.data.date
    })
  },
  confirm(){
    this.animate();
    this.success();
  },
  /*切换日期*/
  chooseDate(e){
    var that = this;
    that.setData({
      dateActive: e.currentTarget.dataset.index
    })
  },
  /*预约成功弹窗弹出*/
  success() {
    this.setData({
      success: !this.data.success
    })
  },
  /* 动画弹出 */
  animate(){
    var animation = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })
    this.animation = animation.translateY(-219).step();
    this.setData({
      animation: animation.export()
    })
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