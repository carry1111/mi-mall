const product = require('../../../static/data/product')
Component({
  data: {
    duration: 1000,
    navImgSrc: [
      "//i8.mifile.cn/v1/a1/290976f3-acac-8a62-7e5c-a19985a6414b.webp",
      "//i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e!144x152.webp",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/48f29752fed79e0ae7dece9c38ca60b7.gif",
      "//i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fc8c791e7df386798f49876b1714323f.png?thumb=1&w=144&h=152",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b14da225c4156d5ce9a78e42a3a5a8e7.jpg?thumb=1&w=144&h=152",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ff6d920e80a63e80edb21febdb266448.png?thumb=1&w=144&h=152",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1510a665adba1d56e1a5045be77fe546.png?thumb=1&w=144&h=152",
      "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bc1c677a6e10e42d00fb0a063662fbf9.png?thumb=1&w=144&h=152"
    ],
    phone: product[0],
  },
  methods: {
    toDetail: function (e) {
      let typeId = e.currentTarget.dataset.typeid;
      let goodsId = e.currentTarget.dataset.goodsid;
      wx.navigateTo({
        url: `../../pages/detail/index?typeId=${typeId}&goodsId=${goodsId}`,
      })
    }
  }
})