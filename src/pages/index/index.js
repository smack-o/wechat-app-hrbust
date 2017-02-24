// index.js
// 获取应用实例

const app = getApp();
Page({
  loginButton: function() {
    wx.redirectTo({
      url: '../home/home',
    });
  },
});
