//index.js

Page({
  data: {
    userInfo: {},
    userList: [],
    userNameList: [],
  },

  usernameInput: function(e) {
    this.setData({
      username: e.detail.value
    })
  },
  passwordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },

  // confirm
  confirm: function(e) {
    var username = this.data.username;
    var password = this.data.password;

    // handler error for username or password.
    if (!username || !password) {
      this.showError('账号密码不能为空', this);
      return;
    }

    // var cookie = this.data.cookie || '';
    var cookie = (this.data.userInfo[username] && this.data.userInfo[username].cookie) || '';
    this.setData({
      loginStatus: 'loading'
    });
    var that = this;

    // request login
    wx.request({
      url: 'https://test.gebilaowu.cn/api/education/login?',
      data: {
        username,
        password,
        cookie
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        if (res.error || res.statusCode === 400) {
          // 请求报错或者服务器端报错（账号密码验证错误等...）。
          that.showError(res.error || res.data, that);
        } else {
          that.setData({
            loginStatus: 'complete'
          });
          wx.redirectTo({
            url: '../home/home'
          });
          var userInfo = that.data.userInfo;
          userInfo[username] = Object.assign({}, userInfo[username], {
            password,
            cookie: res.data.cookie
          });
          wx.setStorage({
            key: 'selectUsername',
            data: that.data.username
          });
          wx.setStorage({
            key: 'userInfo',
            data: userInfo
          });
          wx.setStorage({
            key: 'thisWeek',
            data: res.data.thisWeek
          });
        }
      }
    });
  },

  showError: (message, that) => {
    wx.showModal({
      content: message,
      showCancel: false,
      success: function(res) {
        if (res.confirm) {
          that.setData({
            loginStatus: 'error',
          });
        }
      }
    });
  },

  // 选择用户
  changeUser: function(e) {
    var userInfo = this.data.userInfo;
    var userList = this.data.userList;
    var selectUsername = userList[e.detail.value];
    this.setData({
      username: selectUsername,
      password: userInfo[selectUsername].password,
      cookie: userInfo[selectUsername].cookie
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var userInfo_storage = wx.getStorageSync('userInfo');

    var selectUsername = wx.getStorageSync('selectUsername');

    // 在storage中有1个以上存储的学号
    if (userInfo_storage && Object.keys(userInfo_storage).length > 0) {
      var data = {};
      data.userInfo = userInfo_storage;
      data.userList = Object.keys(userInfo_storage);
      data.userNameList = Object.keys(userInfo_storage).map((item) => {
        return userInfo_storage[item].name ? userInfo_storage[item].name : item;
      });
      if (selectUsername) {
        data.username = selectUsername;
        data.password = userInfo_storage[selectUsername].password;
        data.cookie = userInfo_storage[selectUsername].cookie;
      } else {
        data.username = userList[0];
        data.password = userInfo_storage[userList[0]].password;
        data.cookie = userInfo_storage[userList[0]].cookie;
      }

      this.setData(data);
    }
  }
})
