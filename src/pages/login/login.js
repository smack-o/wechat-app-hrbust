const requestUrl = require('../../utils/get-request-url');

Page({
  data: {
    userInfo: {},
    settingPage: false,
  },

  usernameInput(e) {
    this.setData({
      username: e.detail.value,
    });
  },
  passwordInput(e) {
    this.setData({
      password: e.detail.value,
    });
  },
  checkUsername(event) {
    const userInfo = this.data.userInfo;
    const username = event.detail.value;
    if (userInfo[username]) {
      this.setData({
        username,
        password: userInfo[username].password,
        checkUsername: userInfo[username].name.split('(')[0],
      });
    } else {
      this.setData({
        checkUsername: '',
      });
    }
  },
  // confirm
  confirm() {
    const username = this.data.username;
    const password = this.data.password;

    // handler error for username or password.
    if (!username || !password) {
      this.showError('账号密码不能为空', this);
      return;
    }

    // const cookie = this.data.cookie || '';
    const cookie = (this.data.userInfo[username] && this.data.userInfo[username].cookie) || '';
    this.setData({
      loginStatus: 'loading',
    });
    const that = this;

    // request login
    wx.request({
      url: `${requestUrl}/login`,
      data: {
        username,
        password,
        cookie,
      },
      header: {
        'Content-Type': 'application/json',
      },
      fail() {
        that.showError(null, that);
      },
      success(res) {
        if (res.error || res.statusCode === 400) {
          // 请求报错或者服务器端报错（账号密码验证错误等...）。
          that.showError(res.data.error || res.data, that);
        } else {
          // that.setData({
          //   loginStatus: 'complete',
          // });
          if (wx.reLaunch) {
            wx.reLaunch({
              url: 'pages/home/home',
            });
          } else {
            // 兼容
            wx.showModal({
              title: 'warning',
              content: '请升级最新版的微信客户端来更好的体验小程序, 否则部分页面可能会有问题。',
              confirmText: '朕知道了',
              showCancel: false,
              success(resS) {
                if (resS.confirm) {
                  wx.redirectTo({
                    url: '../home/home',
                  });
                }
              },
            });
          }
          const userInfo = that.data.userInfo;
          userInfo[username] = Object.assign({}, userInfo[username], {
            password,
            cookie: res.data.cookie,
          });
          wx.setStorage({
            key: 'selectUsername',
            data: that.data.username,
          });
          wx.setStorage({
            key: 'userInfo',
            data: userInfo,
          });
          wx.setStorage({
            key: 'thisWeek',
            data: res.data.thisWeek,
          });
        }
      },
    });
  },

  showError: (message, that) => {
    wx.showModal({
      content: message || '登陆失败，请检查您的网络。',
      showCancel: false,
      success(res) {
        if (res.confirm) {
          that.setData({
            loginStatus: 'error',
          });
        }
      },
    });
  },

  // 账号
  userSetting() {
    wx.setNavigationBarTitle({
      title: '账号管理',
    });
    this.setData({
      settingPage: true,
    });
  },

  touchStart(event) {
    const that = this;
    const timer = setTimeout(() => {
      // 长按删除
      const selectUsernameStorage = wx.getStorageSync('selectUsername');
      const selectUsername = event.currentTarget.dataset.userid;
      if (parseInt(selectUsernameStorage) === parseInt(selectUsername)) {
        // 删除的是正在登陆的账号
        wx.showModal({
          title: '删除',
          content: '此账号为正在登陆的账号，删除将退出登陆，确定删除此账号？',
          success(res) {
            if (res.confirm) {
              const newInfo = Object.assign({}, that.data.userInfo);
              delete newInfo[selectUsername];
              if (newInfo.length > 0) {
                const infoKeys = Object.keys(newInfo);
                that.setData({
                  username: infoKeys[0],
                  password: newInfo[infoKeys[0]].password,
                  userInfo: newInfo,
                });
                wx.setStorageSync('selectUsername', infoKeys[0]);
              } else {
                that.setData({
                  username: '',
                  password: '',
                  userInfo: newInfo,
                });
                wx.setStorageSync('selectUsername', null);
                if (wx.reLaunch) {
                  wx.reLaunch({
                    url: 'pages/home/home',
                  });
                } else {
                  // 兼容
                  wx.showModal({
                    title: 'warning',
                    content: '请升级最新版的微信客户端来更好的体验小程序, 否则部分页面可能会有问题。',
                    confirmText: '朕知道了',
                    showCancel: false,
                    success(resS) {
                      if (resS.confirm) {
                        wx.redirectTo({
                          url: '../home/home',
                        });
                      }
                    },
                  });
                }
              }
              wx.setStorageSync('userInfo', newInfo);
            }
          },
        });
      } else {
        wx.showModal({
          title: '删除',
          content: '确定删除此账号？',
          success(res) {
            if (res.confirm) {
              const newInfo = Object.assign({}, that.data.userInfo);
              delete newInfo[selectUsername];
              if (newInfo.length > 0) {
                const infoKeys = Object.keys(newInfo);
                that.setData({
                  username: infoKeys[0],
                  password: newInfo[infoKeys[0]].password,
                  userInfo: newInfo,
                });
                wx.setStorageSync('selectUsername', infoKeys[0]);
              } else {
                that.setData({
                  username: '',
                  password: '',
                  userInfo: newInfo,
                });
                wx.setStorageSync('selectUsername', null);
              }
              wx.setStorageSync('userInfo', newInfo);
            }
          },
        });
      }
    }, 350);
    this.setData({
      touchStartTime: Date.now(),
      timer,
    });
  },
  touchend(event) {
    const touchendTime = Date.now();
    const that = this;
    if (touchendTime - this.data.touchStartTime < 300) {
      this.data.timer && clearTimeout(this.data.timer);
      const selectUsername = event.currentTarget.dataset.userid;
      wx.setStorageSync('selectUsername', selectUsername);
      this.setData({
        username: selectUsername,
        settingPage: false,
        password: that.data.userInfo[selectUsername].password,
      });
      wx.setNavigationBarTitle({
        title: '登陆页面',
      });
    }
  },
  addUser() {
    // 添加用户
    this.setData({
      username: '',
      settingPage: false,
      password: '',
    });
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '登陆页面',
    });
    const userInfoStorage = wx.getStorageSync('userInfo');

    const selectUsername = wx.getStorageSync('selectUsername');

    // 在storage中有1个以上存储的学号
    if (userInfoStorage && Object.keys(userInfoStorage).length > 0) {
      const data = {};
      data.userInfo = userInfoStorage;

      if (selectUsername && userInfoStorage[selectUsername]) {
        data.username = selectUsername;
        data.password = userInfoStorage[selectUsername].password;
        data.cookie = userInfoStorage[selectUsername].cookie;
      } else {
        data.username = Object.keys(userInfoStorage)[0];
        data.password = userInfoStorage[data.username].password;
        data.cookie = userInfoStorage[data.username].cookie;
      }
      try {
        data.checkUsername = userInfoStorage[data.username].name.split('(')[0];
      } catch (e) {
        data.checkUsername = '';
      }
      this.setData(data);
    }
  },
});
