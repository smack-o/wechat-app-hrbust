//index.js
//获取应用实例
Page({
  data: {
    timeStyle: 'timeLeftRight',
    isTouch: false,
    top: 0,
  },
  gotoCourse: function(e) {
    wx.redirectTo({
      url: '../course/course'
    })
  },
  onLoad: function() {
    console.log('course onload1');
    var day = new Date().getDay();
    const that = this;
    const courseData = wx.getStorageSync('courseData');

    if (courseData) {
      that.setData({
        courseData,
        day,
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
            data: res.data
          });
          that.setData({
            courseData: res.data,
            day,
          });
        }
      });
    }
    // wx.setStorage();
  }
})
