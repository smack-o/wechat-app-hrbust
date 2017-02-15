//index.js
//获取应用实例
Page({
  data: {
    timeStyle: 'timeLeftRight',
    isTouch: false,
    top: 0,
    dayNum: ['', '周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    time: ['', '第一大节', '第二大节', '第三大节', '第四大节', '第五大节'],
    timeNum: [[], ['08:10', '~', '09:50'], ['10:10', '~', '11:50'], ['13:30', '~', '15:10'], ['15:20', '~', '17:00'], ['18:00', '~', '19:40']]
  },

  detailHandler: function(event) {
    const dayIndex = event.currentTarget.dataset.dayindex;
    const timeIndex = event.currentTarget.dataset.timeindex;
    // console.log(event);
    // console.log(dayIndex, timeIndex);
    // console.log(this.data.courseData.courseArrange[timeIndex][dayIndex-1]);

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

  setNowCourse: function(thisDay, thisHours, thisMinutes) {
    let nowTimeIndex = 0;
    const nowDayIndex = thisDay;
    const timeArr = [['8:10', '9:50'], ['10:10', '11:50'], ['13:30', '15:10'], ['15:20', '17:0'], ['18:0', '19:40']];

    timeArr.forEach((item, index) => {
      const start = item[0].split(':');
      const end = item[1].split(':');
      const startM = parseInt(start[0]) * 60 + parseInt(start[1]);
      const endM = parseInt(end[0]) * 60 + parseInt(end[1]);
      const nowM = thisHours * 60 + thisMinutes;
      if (nowM > startM && nowM < endM) {
        nowTimeIndex = index + 1;
      }
    });

    this.setData({
      nowTimeIndex,
      nowDayIndex,
    });
  },

  onLoad: function () {
    console.log('course onload');
    const date = new Date();
    const thisDay = date.getDay();
    const thisHours = date.getHours();
    const thisMinutes = date.getMinutes();
    this.setNowCourse(thisDay, thisHours, thisMinutes);

    const timer = setInterval(() => {
      const date = new Date();
      const thisDay = date.getDay();
      const thisHours = date.getHours();
      const thisMinutes = date.getMinutes();
      this.setNowCourse(thisDay, thisHours, thisMinutes);
    }, 2500)

    this.setData({
      timer,
    });

    const that = this;
    const thisWeek = wx.getStorageSync('thisWeek');
    const userInfo = wx.getStorageSync('userInfo');
    const selectUsername = wx.getStorageSync('selectUsername');
    const courseData = userInfo[selectUsername].courseData;
    if (courseData) {
      that.setData({
        courseData,
        day: thisDay,
        thisWeek,
      });
    } else {
      // 缓存中没有数据，需要请求
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
  },

  // remove interval when leave page
  onHide: function () {
    // body...
    console.log('onHide');
    clearInterval(this.data.timer);
  },
  onUnload: function () {
    // body...
    console.log('onUnload');
    clearInterval(this.data.timer);
  }
})
