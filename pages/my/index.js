// pages/my/index.js
Page({
  toRegister: function () {
    wx.navigateTo({
      url: '../register/index',
    })
  },
  toLogin: function () {
    wx.navigateTo({
      url: '../login/index',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        console.log(res.data);
        self.setData({
          isLogin: true,
          userInfo: res.data
        })
      },
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