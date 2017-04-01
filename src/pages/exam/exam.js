const requestUrl = require('../../utils/get-request-url');
const moment = require('moment');

moment.locale('zh-cn');

Page({
  data: {
    page: 1,
    loading: false,
  },
  getExam(page, needConcat) {
    const that = this;
    const promise = new Promise((resolve) => {
      const userInfo = wx.getStorageSync('userInfo');
      const username = wx.getStorageSync('selectUsername');
      const password = userInfo[username].password;
      const cookie = userInfo[username].cookie;

      that.setData({
        shareName: userInfo[username].name.split('(')[0],
      });

      wx.request({
        url: `${requestUrl}/getExam?username=${username}&password=${password}&cookie=${cookie}&page=${page}`,
        header: {
          'Content-Type': 'application/json',
        },
        success(res) {
          if (res.statusCode === 400) {
            // 账号密码错误
            that.showError(that, res.data.error);
            return;
          }
          let examData = that.data.examData || [];
          let resData = res.data.data;

          if (!needConcat && (!resData || resData.length === 0)) {
            // 第一次加载没有数据
            that.showError(that, '');
            that.setData({
              examData: [],
            });
            resolve();
            return;
          }

          if (resData.length === 0) {
            // 没有加载到数据
            wx.showToast({
              title: '哥，真没有了...',
              icon: 'success',
              duration: 2000,
            });
            that.setData({
              page: that.data.page - 1,
            });
          } else {
            resData = resData.map((item) => {
              const newItem = item;
              const time = item.time.split('--')[0];
              const nowTime = moment().format('YYYY-MM-DD HH:mm');
              if (moment(nowTime) > moment(time)) {
                newItem.message = '已考完';
                newItem.className = 'text-gray';
              } else {
                const endOf = moment(time).endOf('minute').fromNow().replace('内', '后');
                const calendar = moment(time).subtract().calendar();
                newItem.message = `${calendar}（${endOf}）`;
                newItem.className = 'text-green';
              }
              return item;
            });
            if (needConcat) {
              examData = examData.concat(resData);
            } else {
              examData = resData;
            }

            that.setData({
              examData,
            });
          }
          resolve();
        },
        fail(error) {
          that.showError(that, error);
          resolve();
        },
      });
    });
    return promise;
  },
  showError(that, error) {
    if (error) {
      console.error(error);
    }
    wx.showModal({
      content: error || '加载失败，请检查您的网络。',
      confirmText: '重新加载',
      success(res) {
        if (res.confirm) {
          that.getExam(1);
        }
      },
    });
  },
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '考试信息',
    });
    if (options.examData) {
      // 通过分享进入页面
      const examData = JSON.parse(options.examData);
      this.setData({
        examData,
        doNotRefresh: true,
      });
      return;
    }
    this.getExam(1);
  },
  onPullDownRefresh() {
    if (this.data.doNotRefresh) {
      wx.stopPullDownRefresh();
      return;
    }
    this.getExam(1).then(() => {
      wx.stopPullDownRefresh();
      wx.showToast({
        title: '拉取数据成功',
        icon: 'success',
        duration: 1000,
      });
    });
  },
  onReachBottom() {
    if (this.data.doNotRefresh) {
      return;
    }
    if (!this.data.loading) {
      this.setData({
        loading: true,
      });
      const newPage = this.data.page + 1;
      this.setData({
        page: newPage,
      });
      this.getExam(newPage, true).then(() => {
        this.setData({
          loading: false,
        });
      });
    }
  },
  onShareAppMessage() {
    const message = this.data.shareName ? `${this.data.shareName}的考试信息` : '考试信息';
    return {
      title: `哈理工专属小程序, ${message}。`,
      path: `pages/exam/exam?examData=${JSON.stringify(this.data.examData)}`,
    };
  },
});
