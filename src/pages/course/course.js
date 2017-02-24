
Page({
  data: {
    timeStyle: 'timeLeftRight',
    isTouch: false,
    top: 0,
    dayNum: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    time: ['第一大节', '第二大节', '第三大节', '第四大节', '第五大节'],
    timeNum: [['08:10', '09:50'], ['10:10', '11:50'], ['13:30', '15:10'], ['15:20', '17:00'], ['18:00', '19:40']],
  },

  detailHandler(event) {
    const dayIndex = event.currentTarget.dataset.dayindex;
    const timeIndex = event.currentTarget.dataset.timeindex;
    const courseArrange = this.data.courseData.courseArrange;
    if (courseArrange[dayIndex - 1][timeIndex]) {
      this.setData({
        detailOpen: true,
        detailData: courseArrange[dayIndex - 1][timeIndex],
      });
    }
  },

  closeDetail() {
    this.setData({
      detailOpen: false,
    });
  },

  setNowCourse(thisDay, thisHours, thisMinutes) {
    let nowTimeIndex = 0;
    const nowDayIndex = thisDay;
    const timeArr = this.data.timeNum;
    timeArr.forEach((item, index) => {
      const start = item[0].split(':');
      const end = item[1].split(':');
      const startM = `${parseInt(start[0]) * 60}${parseInt(start[1])}`;
      const endM = `${parseInt(end[0]) * 60}${parseInt(end[1])}`;
      const nowM = `${thisHours * 60}${thisMinutes}`;
      if (nowM > startM && nowM < endM) {
        nowTimeIndex = index + 1;
      }
    });

    this.setData({
      nowTimeIndex,
      nowDayIndex,
    });
  },

  getCourse(userInfoP, selectUsername, callback) {
    const userInfo = userInfoP;
    const password = userInfo[selectUsername].password;
    const cookie = userInfo[selectUsername].cookie;
    const that = this;
    wx.request({
      url: 'https://test.gebilaowu.cn/api/education/getCourse?',
      data: {
        username: selectUsername,
        password,
        cookie,
      },
      header: {
        'Content-Type': 'application/json',
      },
      fail() {
        wx.showModal({
          content: '拉取数据失败，请检查你的网络',
          showCancel: false,
        });
      },
      success(res) {
        if (res.error) {
          wx.showModal({
            content: `拉取数据失败。${res.error}`,
            showCancel: false,
          });
          return;
        }
        userInfo[selectUsername].courseData = res.data;
        userInfo[selectUsername].cookie = res.data.cookie;
        wx.setStorage({
          key: 'userInfo',
          data: userInfo,
        });
        that.setData({
          courseData: res.data,
          thisWeek: res.data.thisWeek,
        });

        wx.showToast({
          title: '拉取数据成功',
          icon: 'success',
          duration: 2000,
        });

        callback && callback();
      },
    });
  },

  getWeek() {
    let thisWeek = wx.getStorageSync('thisWeek');
    this.setData({
      thisWeek,
    });

    const that = this;
    wx.request({
      url: 'https://test.gebilaowu.cn/api/education/getWeek',
      header: {
        'Content-Type': 'application/json',
      },
      success(res) {
        if (res.data.thisWeek) {
          thisWeek = res.data.thisWeek;
        }
        that.setData({
          thisWeek,
        });
        wx.setStorage({
          key: 'thisWeek',
          data: thisWeek,
        });
      },
      fail() {
        console.error('请求当前周数失败，请检查网络重试');
        that.setData({
          thisWeek,
        });
      },
    });
  },

  onLoad() {
    let date = new Date();
    let thisDay = date.getDay();
    let thisHours = date.getHours();
    let thisMinutes = date.getMinutes();
    this.setNowCourse(thisDay, thisHours, thisMinutes);

    const timer = setInterval(() => {
      date = new Date();
      thisDay = date.getDay();
      thisHours = date.getHours();
      thisMinutes = date.getMinutes();
      this.setNowCourse(thisDay, thisHours, thisMinutes);
    }, 2500);

    this.setData({
      timer,
    });

    const that = this;
    const userInfo = wx.getStorageSync('userInfo');
    const selectUsername = wx.getStorageSync('selectUsername');
    const courseData = userInfo[selectUsername].courseData;
    if (courseData) {
      this.getWeek();
      that.setData({
        courseData,
      });
    } else {
      // 缓存中没有数据，需要请求
      this.getCourse(userInfo, selectUsername);
    }
  },

  // 下拉刷新
  onPullDownRefresh() {
    const userInfo = wx.getStorageSync('userInfo');
    const selectUsername = wx.getStorageSync('selectUsername');
    this.getCourse(userInfo, selectUsername, () => {
      wx.stopPullDownRefresh();
    });
  },

  // remove interval when leave page
  onHide() {
    clearInterval(this.data.timer);
  },
  onUnload() {
    // body...
    clearInterval(this.data.timer);
  },
});
