const requestUrl = require('../../utils/get-request-url');

Page({
  data: {
    loading: false,
    username: '',
    name: '',
    id: '',
    cetCaptchaSrc: '',
    cookie: '',
    type: '',
    yzm: '',
    showCaptcha: false,
    disable: false,
  },
  getCetCaptcha() {
    const that = this;
    return new Promise((resolve) => {
      wx.request({
        url: `${requestUrl}/getCetCaptcha`,
        header: {
          'Content-Type': 'application/json',
        },
        success(res) {
          that.setData({
            cookie: res.data.cookie,
            cetCaptchaSrc: `data:image/png;base64, ${res.data.base64}`,
          });
          resolve();
        },
        fail() {
          resolve();
        },
      });
    });
  },
  getCet(name, id, username) {
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 10000,
    });
    const that = this;
    const promise = new Promise((resolve, reject) => {
      let url = `${requestUrl}/getCet?name=${name}&id=${id}`;
      if (username) {
        url = `${requestUrl}/getCet?username=${username}`;
      }
      wx.request({
        url,
        method: 'POST',
        data: {
          id,
          name,
          username,
          yzm: that.data.yzm,
          cookie: that.data.cookie,
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        success(res) {
          wx.hideToast();
          if (res.statusCode === 400) {
            reject(res.data.error);
            return;
          }
          let cetData = {};
          if (res.statusCode !== 400) {
            cetData = res.data.data[0];
          }
          that.setData({
            cetData,
          });
          wx.showToast({
            title: '拉取数据成功',
            icon: 'success',
            duration: 1000,
          });
          resolve();
        },
        fail() {
          wx.hideToast();
          // that.showError(that, error);
          reject();
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
      content: '加载失败，请检查您的网络。',
      confirmText: '重新加载',
      success(res) {
        if (res.confirm) {
          that.getCet(that.data.name, that.data.id, that.data.username);
        }
      },
    });
  },

  onLoad(options) {
    if (Date.now() < 1534899600000) {
      this.setData({
        disable: true,
      });
    }
    if (options.cetData) {
      // 通过分享进入页面
      const cetData = JSON.parse(options.cetData);
      wx.setNavigationBarTitle({
        title: `${cetData.shareName}的四六级成绩`,
      });
      this.setData(Object.assign({}, cetData, {
        doNotRefresh: true,
      }));
      return;
    }
    wx.setNavigationBarTitle({
      title: '四六级成绩',
    });
    const username = wx.getStorageSync('selectUsername');
    const userInfo = wx.getStorageSync('userInfo');
    if (username && userInfo && userInfo[username]) {
      this.setData({
        name: userInfo[username].name && userInfo[username].name.split('(')[0],
        username,
      });
    }
    // this.getCet(this.data.username);
  },

  // onPullDownRefresh() {
  //   if (this.data.doNotRefresh) {
  //     wx.stopPullDownRefresh();
  //     return;
  //   }
  //   this.getCet(this.data.username).then(() => {
  //     wx.stopPullDownRefresh();
  //   });
  // },
  nameInput(e) {
    this.setData({
      displayUsername: '',
      name: e.detail.value,
    });
  },
  idInput(e) {
    this.setData({
      id: e.detail.value,
    });
  },
  captchaInput(e) {
    this.setData({
      yzm: e.detail.value,
    });
  },
  changeCaptcha() {
    this.getCetCaptcha();
  },
  submit() {
    if (!this.data.yzm) {
      wx.showToast({
        title: '不能为空',
        icon: 'none',
      });
      setTimeout(() => {
        wx.hideToast();
      }, 1000);
      return;
    }

    const that = this;
    let params = [];
    if (this.data.type === 'noid') {
      params = [null, null, this.data.username, this.data.yzm, this.data.cookie];
      // this.getCet(null, null, this.data.username, this.data.yzm, this.data.cookie);
    } else {
      params = [this.data.name, this.data.id, null, this.data.yzm, this.data.cookie];
    }
    this.getCet(...params).then(() => {
      this.setData({
        showCaptcha: false,
      });
    }).catch((e) => {
      // console.log(e);
      wx.showModal({
        title: '错误',
        content: e,
        confirmText: '重新输入',
        showCancel: false,
        success(data) {
          if (data.confirm) {
            that.getCetCaptcha();
            that.setData({
              yzm: '',
            });
          }
        },
      });
    });
  },
  confirm1() {
    this.getCetCaptcha();
    // this.getCet(null, null, this.data.username);
    this.setData({
      type: 'noid',
      showCaptcha: true,
    });
  },
  confirm() {
    const name = this.data.name;
    const id = this.data.id;
    if (!name || !id) {
      wx.showToast({
        title: '填写错误',
        icon: 'none',
      });
      setTimeout(() => {
        wx.hideToast();
      }, 1000);
      return;
    }
    this.getCetCaptcha();
    // this.getCet(name, id);
    this.setData({
      type: 'haveid',
      showCaptcha: true,
    });
  },
  onShareAppMessage() {
    let shareName = '';
    if (this.data.doNotRefresh) {
      shareName = this.data.shareName;
    } else {
      const userInfo = wx.getStorageSync('userInfo');
      shareName = userInfo[this.data.username].name.split('(')[0];
    }

    return {
      title: `${shareName}的四六级成绩。`,
      path: `pages/cet4/cet4?cetData=${JSON.stringify(Object.assign({}, this.data, {
          shareName,
        }))}`,
    };
  },
});
