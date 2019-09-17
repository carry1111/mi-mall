const product = require('../../static/data/product.js')
Page({
  data: {
    duration: 500,
    detail: {},
    typeId: 0,
    goodsId: 0,
  },
  onLoad: function (option) {
    console.log(option)
    this.setData({
      typeId: option.typeId,
      goodsId: option.goodsId,
    })
    product.forEach((value, index) => {
      if (value.typeId == option.typeId) {
        let arr = value.goodsList;
        arr.forEach((val, ind) => {
          if (val.goodsId == option.goodsId) {
            this.setData({
              detail: val
            })
          }
        })
      }
    })
  },
  buy: function () {
    const cartItem = {
      typeId: this.data.typeId,
      goodsId: this.data.goodsId,
      num: 1
    }
    wx.getStorage({
      key: 'cartList',
      success: function(res) {
        let arr = res.data
        arr.push(cartItem)
        wx.setStorage({
          key: 'cartList',
          data: arr,
        })
      },
      fail: function(err) {
        const cartList = [];
        cartList.push(cartItem)
        wx.setStorage({
          key: 'cartList',
          data: cartList,
        })
      },
    })
    wx.getStorage({
      key: 'cartList',
      success: function(res) {
        console.log(res)
      },
    })
  }
})