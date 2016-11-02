//index.js
//获取应用实例
var app = getApp()
Page({
  loginButton: function(e) {
    if (this.data.selectUsername) {
      wx.redirectTo({
        url: '../home/home'
      })
    } else {
      wx.redirectTo({
        url: '../login/login'
      })
    }
  },
  onLoad: function () {
    console.log('onLoad')
    const selectUsername = wx.getStorageSync('selectUsername');
    this.setData({
      selectUsername
    })
  }
})
