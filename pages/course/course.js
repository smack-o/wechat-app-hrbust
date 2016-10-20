//index.js
//获取应用实例
Page({
  gotoCourse: function(e) {
    wx.redirectTo({
      url: '../course/course'
    })
  },
  onLoad: function() {
    console.log('course onload');
    const username = wx.getStorageSync('username');
    const password = wx.getStorageSync('password');
    console.log(username,password,22222);
    wx.request({
      url: 'http://test.gebilaowu.cn/test',
      data: {
        username,
        password,
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
      }
    });
  }
})
