const requestUrl = require('../../utils/get-request-url');

Page({
  data: {
    userInfo: {},
    userList: [],
    userNameList: [],
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
      success(res) {
        if (res.error || res.statusCode === 400) {
          // 请求报错或者服务器端报错（账号密码验证错误等...）。
          that.showError(res.data.error || res.data, that);
        } else {
          that.setData({
            loginStatus: 'complete',
          });
          wx.redirectTo({
            url: '../home/home',
          });
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
      content: message,
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

  // 选择用户
  changeUser(e) {
    const userInfo = this.data.userInfo;
    const userList = this.data.userList;
    const selectUsername = userList[e.detail.value];
    this.setData({
      username: selectUsername,
      password: userInfo[selectUsername].password,
      cookie: userInfo[selectUsername].cookie,
    });
  },

  onLoad() {
    const userInfoStorage = wx.getStorageSync('userInfo');

    const selectUsername = wx.getStorageSync('selectUsername');

    // 在storage中有1个以上存储的学号
    if (userInfoStorage && Object.keys(userInfoStorage).length > 0) {
      const data = {};
      data.userInfo = userInfoStorage;
      data.userList = Object.keys(userInfoStorage);
      data.userNameList = Object.keys(userInfoStorage).map((item) => {
        const result = userInfoStorage[item].name ? userInfoStorage[item].name : item;
        return result;
      });

      if (selectUsername) {
        data.username = selectUsername;
        data.password = userInfoStorage[selectUsername].password;
        data.cookie = userInfoStorage[selectUsername].cookie;
      } else {
        data.username = data.userList[0];
        data.password = userInfoStorage[data.userList[0]].password;
        data.cookie = userInfoStorage[data.userList[0]].cookie;
      }

      this.setData(data);
    }
  },
});
