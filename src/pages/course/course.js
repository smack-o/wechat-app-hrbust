const requestUrl = require('../../utils/get-request-url');
const { sameTerm, formatTerm } = require('../../utils/util');

Page({
  data: {
    timeStyle: 'timeLeftRight',
    terms: [],
    weeks: [],
    dayNum: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    time: ['第一大节', '第二大节', '第三大节', '第四大节', '第五大节'],
    timeNum: [['08:10', '09:50'], ['10:10', '11:50'], ['13:30', '15:10'], ['15:20', '17:00'], ['18:00', '19:40']],
    loading: true,
  },

  detailHandler(event) {
    const dayIndex = event.currentTarget.dataset.dayindex;
    const timeIndex = event.currentTarget.dataset.timeindex;
    const courseArrange = this.data.courseData.courseArrange;
    if (courseArrange[timeIndex][dayIndex - 1]) {
      this.setData({
        detailOpen: true,
        detailData: courseArrange[timeIndex][dayIndex - 1],
      });
    }
  },

  closeDetail() {
    this.setData({
      detailOpen: false,
    });
  },

  // 切换学年学期
  changeTerm(e) {
    if (this.data.doNotRefresh) {
      return;
    }
    const term = this.data.terms[e.detail.value];
    this.setData({
      slectedTerm: e.detail.value,
      slectedWeek: 0,
      thisWeekNum: 1,
    });
    const formatTerms = formatTerm(term);
    wx.showLoading({
      title: '正在加载数据',
    });
    this.getCourse(formatTerms.term, formatTerms.year, true).then(() => {
      wx.hideLoading();
    });
  },

  // 切换周数
  changeWeek(e) {
    if (this.data.doNotRefresh) {
      return;
    }
    const week = this.data.weeks[e.detail.value];
    this.setData({
      slectedWeek: e.detail.value,
      thisWeekNum: week,
    });
  },

  setNowCourse(thisDay, thisHours, thisMinutes) {
    let nowTimeIndex = 0;
    const nowDayIndex = thisDay;
    const timeArr = this.data.timeNum;
    timeArr.forEach((item, index) => {
      const start = item[0].split(':');
      const end = item[1].split(':');
      const startM = (parseInt(start[0]) * 60) + parseInt(start[1]);
      const endM = (parseInt(end[0]) * 60) + parseInt(end[1]);
      const nowM = (thisHours * 60) + thisMinutes;
      if (nowM >= startM && nowM <= endM) {
        nowTimeIndex = index + 1;
      }
    });
    this.setData({
      nowTimeIndex,
      nowDayIndex,
    });
  },

  getCourse(term, year, noStorage) {
    const userInfo = this.data.userInfo;
    const selectUsername = this.data.selectUsername;
    const password = userInfo[selectUsername].password;
    const cookie = userInfo[selectUsername].cookie;
    const that = this;
    return new Promise((resolve) => {
      wx.request({
        url: `${requestUrl}/getCourse`,
        data: {
          username: selectUsername,
          password,
          cookie,
          term: term || that.data.term,
          year: year || that.data.year,
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
          if (res.statusCode === 400) {
            wx.showModal({
              content: `拉取数据失败。${res.data.error}`,
              showCancel: false,
            });
            return;
          }
          if (!noStorage) {
            userInfo[selectUsername].courseData = res.data;
            userInfo[selectUsername].cookie = res.data.cookie;
            wx.setStorage({
              key: 'userInfo',
              data: userInfo,
            });
          }
          that.setData({
            courseData: res.data,
            thisWeek: res.data.thisWeek,
            loading: false,
          });

          wx.showToast({
            title: '拉取数据成功',
            icon: 'success',
            duration: 2000,
          });
          resolve();
        },
      });
    });
  },

  getWeek() {
    return new Promise((resolve, reject) => {
      const that = this;
      const nowDate = new Date();
      const terms = [];
      const weeks = Array.from(new Array(30), (val, index) => index + 1);
      for (let i = nowDate.getFullYear(); i >= nowDate.getFullYear() - 5; i -= 1) {
        terms.push(`${i} 秋`);
        terms.push(`${i} 春`);
      }

      wx.request({
        url: `${requestUrl}/getWeek`,
        header: {
          'Content-Type': 'application/json',
        },
        success(res) {
          let slectedTerm = 0;
          let slectedWeek = 0;
          const tTerms = terms.map((item, index) => {
            if (sameTerm(item, res.data.term, res.data.year)) {
              slectedTerm = index;
              return `${item} (当前)`;
            }
            return item;
          });
          const tWeeks = weeks.map((item, index) => {
            if (res.data.week === item) {
              slectedWeek = index;
              return `${item} (当前)`;
            }
            return item;
          });
          that.setData({
            thisWeek: res.data.thisWeek,
            thisWeekNum: res.data.week,
            term: res.data.term,
            year: res.data.year,
            terms: tTerms,
            weeks: tWeeks,
            slectedTerm,
            slectedWeek,
          });
          resolve();
        },
        fail() {
          console.error('请求当前周数失败，请检查网络重试');
          wx.showModal({
            content: '请求当前周数失败，请检查您的网络',
            showCancel: false,
          });
          reject();
        },
      });
    });
  },

  onLoad(options) {
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

    if (options.shareData) {
      // 通过分享进入页面
      const shareData = JSON.parse(options.shareData);
      wx.setNavigationBarTitle({
        title: `${shareData.shareName}的课程表`,
      });
      this.setData(Object.assign({}, shareData, {
        doNotRefresh: true,
      }));
      return;
    }

    wx.setNavigationBarTitle({
      title: '大节课表',
    });

    const that = this;
    const userInfo = wx.getStorageSync('userInfo');
    const selectUsername = wx.getStorageSync('selectUsername');
    const shareName = userInfo[selectUsername].name.split('(')[0];
    this.setData({
      shareName,
      userInfo,
      selectUsername,
    });
    this.getWeek().then(() => {
      const courseData = userInfo[selectUsername].courseData;
      if (courseData) {
        that.setData({
          courseData,
          loading: false,
        });
      } else {
        // 缓存中没有数据，需要请求
        this.getWeek().then(() => {
          this.getCourse();
        });
      }
    });
  },

  // 下拉刷新
  onPullDownRefresh() {
    if (this.data.doNotRefresh) {
      wx.stopPullDownRefresh();
      return;
    }
    this.getCourse().then(() => {
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
  onShareAppMessage() {
    // courseData
    const data = this.data;
    const courseData = Object.assign({}, this.data.courseData, {
      cookie: '',
    });
    const shareData = {
      terms: data.terms,
      titles: data.titles,
      courseData,
      shareName: data.shareName,
      thisWeek: data.thisWeek,
      thisWeekNum: data.thisWeekNum,
    };
    return {
      title: `${data.shareName}的课程表`,
      path: `pages/course/course?shareData=${JSON.stringify(shareData)}`,
    };
  },
});
