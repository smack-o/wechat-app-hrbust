//index.js
//获取应用实例
var app = getApp()
Page({
  loginButton: function(e) {
    if (this.data.username && this.data.password) {
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
    const username = wx.getStorageSync('username');
    const password = wx.getStorageSync('password');
    this.username = username;
    this.password = password;
    console.log(username,password,1111);
    const that = this;
    that.setData({
      username,
      password
    })
  }
})
