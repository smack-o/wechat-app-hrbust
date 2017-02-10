//index.js
//获取应用实例
Page({
  data: {
    timeStyle: 'timeLeftRight',
    isTouch: false,
    top: 0,
    dayNum: ['', "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    time: ['', "第一大节", "第二大节", "第三大节", "第四大节", "第五大节"],
    timeNum: ['', "08:10 ~ 09:50", "10:10 ~ 11:50", "13:30 ~ 15:10", "15:20 ~ 17:00", "18:00 ~ 19:40"]
  },
  // gotoCourse: function(e) {
  //   wx.redirectTo({
  //     url: '../course/course'
  //   })
  // },
  detailHandler: function(event) {
    var dayIndex = event.currentTarget.dataset.dayindex;
    var timeIndex = event.currentTarget.dataset.timeindex;
    console.log(event);
    console.log(dayIndex, timeIndex);
    console.log(this.data.courseData.courseArrange[timeIndex][dayIndex-1]);
    // var detailDataTemp = this.data.courseData.courseArrange[timeIndex][dayIndex-1];
    // detailDataTemp.map(function (item, index) {
    //   // if (index/) {

    //   // }
    //   console.log(item);
    // });
    this.setData({
      detailOpen: true,
      detailData: this.data.courseData.courseArrange[timeIndex][dayIndex-1]
    });
  },
  closeDetail: function () {
    this.setData({
      detailOpen: false,
    });
  },
  onLoad: function () {
    console.log('course onload1');
    var day = new Date().getDay();
    const that = this;
    const thisWeek = wx.getStorageSync('thisWeek');
    const userInfo = wx.getStorageSync('userInfo');
    const selectUsername = wx.getStorageSync('selectUsername');
    const courseData = userInfo[selectUsername].courseData;
    if (courseData) {
      that.setData({
        courseData,
        day,
        thisWeek,
      });
    } else {

      const password = userInfo[selectUsername].password;
      const cookie = userInfo[selectUsername].cookie;
      wx.request({
        url: 'https://test.gebilaowu.cn/api/education/getCourse?',
        data: {
          username: selectUsername,
          password,
          cookie,
        },
        header: {
          'Content-Type': 'application/json'
        },
        success: function(res) {
          userInfo[selectUsername].courseData = res.data;
          wx.setStorage({
            key: 'userInfo',
            data: userInfo
          });
          that.setData({
            courseData: res.data,
            day,
            thisWeek,
          });
        }
      });
    }
    // wx.setStorage();
  }
})
