//index.js
//获取应用实例
Page({
  gotoCourse: function(e) {
    wx.navigateTo({
      url: '../course/course'
    })
  },
  login: function() {
    wx.navigateTo({
      url: '../login/login'
    })
  }
})
