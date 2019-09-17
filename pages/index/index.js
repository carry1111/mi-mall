// pages/game/index.js
const api = require('../../api/api')
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabList: [
      { name: '推荐' },
      { name: '手机' },
      { name: '智能' },
      { name: '电视' },
      { name: '笔记本' },
      { name: '家电' },
      { name: '生活周边' },
    ],
    currentIndex: 0,
  },
  select: function (e) {
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    })
    console.log(this.data.currentIndex);
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