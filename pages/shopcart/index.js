const product = require('../../static/data/product.js')
Page({
  data: {
    cartList: [],
    shopCartList: [],
    checkeds: [],
    totalPrice: 0,
    totalNum: 0,
  },
  onLoad: function () {
    this.getShopCartList()
    // wx.hideTabBar({})
    // this.initChecks()
    // this.calTotalPrice()
    // this.calTotalNum()
  },
  initChecks() {
    let arr = [];
    let array = this.data.cartList;
    array.forEach((value, index) => {
      arr.push(false);
    })
    this.setData({
      checkeds: arr,
    })
  },
  getShopCartList() {
    this.setData({
      shopCartList: [],
    })
    const that = this;
    wx.getStorage({
      key: 'cartList',
      success: function(res) {
        that.setData({
          cartList: res.data
        })
        let cartList = that.data.cartList;
        let newArray = [];
        cartList.forEach((item, i) => {
          product.forEach((value, index) => {
            if (value.typeId == item.typeId) {
              let arr = value.goodsList;
              arr.forEach((val, ind) => {
                if (val.goodsId == item.goodsId) {
                  val.num = item.num;
                  newArray.push(val);
                }
              })
            }
          })
        })
        that.setData({
          shopCartList: newArray,
        })
        that.initChecks()
        that.calTotalPrice()
        that.calTotalNum()
      },
    });
  },
  change(e) {
    let index = e.currentTarget.dataset.index;
    let arr = this.data.checkeds;
    arr[index] = !arr[index];
    this.setData({
      checkeds: arr
    })
    this.calTotalPrice()
    this.calTotalNum()
  },
  calTotalPrice() {
    this.setData({
      totalPrice: 0,
    })
    let array = this.data.shopCartList;
    array.forEach((value, index) => {
      if (this.data.checkeds[index]) {
        let total = this.data.totalPrice;
        total += value.price * value.num;
        this.setData({
          totalPrice: total
        })
      }
    })
  },
  calTotalNum() {
    this.setData({
      totalNum: 0,
    })
    let arr = this.data.cartList;
    arr.forEach((value, index) => {
      if (this.data.checkeds[index]) {
        let num = this.data.totalNum;
        num += value.num;
        this.setData({
          totalNum: num
        })
      }
    })
  },
  addNum(e) {
    let index = e.currentTarget.dataset.index;
    const that = this;
    wx.getStorage({
      key: 'cartList',
      success: function(res) {
        let cartList = res.data;
        cartList[index]['num'] ++;
        wx.setStorage({
          key: 'cartList',
          data: cartList,
        })
        that.getShopCartList()
      },
    })
  },
  reduceNum(e) {
    let index = e.currentTarget.dataset.index;
    const that = this;
    wx.getStorage({
      key: 'cartList',
      success: function (res) {
        let cartList = res.data;
        cartList[index]['num']--;
        wx.setStorage({
          key: 'cartList',
          data: cartList,
        })
        that.getShopCartList()
      },
    })
  },
  delProduct(e) {
    let index = e.currentTarget.dataset.index;
    const that = this;
    wx.getStorage({
      key: 'cartList',
      success: function (res) {
        let cartList = res.data;
        cartList.splice(index, 1);
        wx.setStorage({
          key: 'cartList',
          data: cartList,
        })
        that.getShopCartList()
      },
    })
  }
})