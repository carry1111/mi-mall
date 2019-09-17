// pages/classify/index.js
const productList = require('../../static/data/categoryProductList.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    categoryList: [
      '新品', '众筹', '手机', '电视', '电脑', '智能', '家用电器', '厨房电器', '穿戴酷玩',
      '家居家装', '电源插座', '出行车载', '耳机音箱', '路由器', '个护健康', '日用百货',
      '床品家具', '配件线材', '办公用品', '鞋服箱包', '儿童用品', '家装', '礼品', '服务',
      '会员卡', '米粉卡', '零售店'
    ],
    categoryId: [
      'xinpin', 'zhongchou', 'shouji', 'dianshi', 'zhineng', 'jiayong', 'chufang', 'chuandai',
      'jiaju', 'dianyuan', 'chuxing', 'erji', 'luyou', 'gehu', 'riyong', 'chuangpin', 'peijian',
      'bangong', 'xiefu', 'ertong', 'jiazhuang', 'lipin', 'fuwu', 'huiyuan', 'mifen', 'lingshou',
    ],
    scrollId: '',
    currentCategoryIndex: 0,
    product: productList,
    listHeight: [],
  },
  clickHandle: function (e) {
    let index = e.currentTarget.dataset.index;
    let arr = this.data.categoryId;
    this.setData({
      scrollId: arr[index],
      currentCategoryIndex: index
    })
  },
  scrollHandle: function (event) {
    let top = event.detail.scrollTop;
    let list = this.data.listHeight;
    let len = list.length;
    let arr = this.data.categoryId;
    for (let i = 0; i < len; i++) {
      if (top > list[i] && top < list[i + 1]) {
        this.setData({
          currentCategoryIndex: i,
          scrollId: arr[i]
        })
      }
    }
  },
  _calculateHeight() {
    var obj = wx.createSelectorQuery();
    let self = this;
    obj.selectAll('.list').boundingClientRect(function (rect) {
      let arr = rect;
      let height = 0;
      let array = self.data.listHeight;
      array.push(0)
      arr.forEach((value) => {
        height += value.height;
        array.push(height)
      })
      self.setData({
        listHeight: array
      })
    })
    obj.exec();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._calculateHeight()
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