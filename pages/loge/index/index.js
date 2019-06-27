// pages/loge/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yuangong:true
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
  // 切换登录
  change(){
    this.setData({
      yuangong: !this.data.yuangong
    })
  },
  submit(){
    // wx.showToast({
    //   title: '登录失败,请在picc健康商城购买体检项目',
    //   icon:"none"
    // })
    wx.showModal({
      title: '登录失败',
      content: '请在picc健康商城购买体检项目',
    })
  }
})