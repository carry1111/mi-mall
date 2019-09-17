//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    result: 0,
    guessNum: 0,
    resultInfo: '等待开奖',
    money: 100,
    bettingMoney: 0,
    time: 10,
  },
  start: function () {
    this.setData({
      result: Math.ceil(Math.random() * 6),
    })
    console.log(this.data.result);
    if(this.data.result === this.data.guessNum){
      console.log('猜对了');
      this.setData({
        resultInfo: '猜对了',
        money: this.data.money + 5 * this.data.bettingMoney,
      })
    }else{
      console.log('猜错了');
      this.setData({
        resultInfo: '猜错了',
        money: this.data.money - this.data.bettingMoney,
      })
    }
  },
  betting: function (event) {
    console.log(event.currentTarget.dataset.num);
    this.setData({
      bettingMoney: event.currentTarget.dataset.num,
    })
  },
  choose: function (event) {
    console.log(event.currentTarget.dataset.num);
    this.setData({
      guessNum: event.currentTarget.dataset.num,
    })
  },
  check: function () {
    if(this.data.money <= 0){
      this.setData({
        isDisabled: true,
      })
    }else{
      this.setData({
        isDisabled: false,
      })
    }
  },
  countdown: function () {
    let self = this;
    setInterval(function () {
      if(self.data.time <= 0){
        self.setData({
          time: 10,
        })
      }
      self.setData({
        time: self.data.time - 1,
      })
    }, 1000)
  },
  lottery: function () {
    let self = this;
    setInterval(function () {
      self.start()
    }, 10000)
  },
  onLoad: function () {
    this.check()
    this.countdown()
    this.lottery()
  }
})
