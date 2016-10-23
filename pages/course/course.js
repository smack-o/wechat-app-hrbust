//index.js
//获取应用实例
Page({
  data: {
    timeStyle: 'timeLeftRight',
    isTouch: false,
  },
  gotoCourse: function(e) {
    wx.redirectTo({
      url: '../course/course'
    })
  },
  touchendPage: function(e) {
    console.log(1);
    // this.setData({
    //   isTouch: false,
    //   timeStyle: 'timeLeftRight'
    // });
  },
  touchmovePage: function(e) {
    console.log(e);
    // const touchmoveX = e.touches[0].pageX;
    // const touchmoveY = e.touches[0].pageY;
    // if (this.data.isTouch) {
    //   return;
    // }
    // if ( Math.abs(touchmoveY - this.pageY) > Math.abs(touchmoveX - this.pageX) ) {
    //   console.log("top-down");
    //   this.setData({
    //     timeStyle: 'timeTopDown',
    //     isTouch: true
    //   });
    // } else {
    //   console.log("left-right");
    //   this.setData({
    //     timeStyle: 'timeLeftRight',
    //     isTouch: true
    //   });
    // }
  },
  touchstartPage: function(e) {
    this.pageX = e.touches[0].pageX;
    this.pageY = e.touches[0].pageY;
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
            data: res.data
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
