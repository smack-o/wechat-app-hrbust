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
    const that = this;
    const courseData = wx.getStorageSync('courseData');

    if (courseData) {
      that.setData({
        courseData,
      });
    } else {
      const username = wx.getStorageSync('username');
      const password = wx.getStorageSync('password');
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
          // console.log(res.data)
          wx.setStorage({
            key: 'courseData',
            value: res.data
          });
          that.setData({
            courseData: res.data
          });
        }
      });
    }
    // wx.setStorage();
  }
})
