//index.js
//获取应用实例
Page({
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

  // 处理请求
  confirm: function(e) {
    var username = this.data.username;
    var password = this.data.password;
    var cookie = this.data.cookie || '';
    this.setData({
      loginStatus: 'start'
    });
    var that = this;
    wx.request({
      url: 'http://test.gebilaowu.cn/api/education/login?',
      data: {
        username,
        password,
        cookie
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        if (res.error) {
          that.setData({
            loginStatus: 'error',
            error: res.error
          });
        } else {
          that.setData({
            loginStatus: 'complete'
          });
          wx.redirectTo({
            url: '../home/home'
          });
          that.getUserName(username, password, cookie, function(name) {
            var userInfo = that.data.userInfo;
            userInfo[username] = {
              password,
              cookie: res.data.cookie,
              name: name
            };
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
          });
        }
      }
    });
  },

  getUserName: function(username, password, cookie, callback) {
    wx.request({
      url: 'http://test.gebilaowu.cn/api/education/getUserName?',
      data: {
        username,
        password,
        cookie
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        if (res.error) {
          console.log("getname error");
        } else {
          callback(res.name);
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
    var userInfo = wx.getStorageSync('userInfo') || {};
    var selectUsername = wx.getStorageSync('selectUsername');
    var data = {
      userInfo,
      userList: Object.keys(userInfo)
    };
    if (selectUsername) {
      data.username = selectUsername;
      data.password = userInfo[selectUsername].password;
      data.cookie = userInfo[selectUsername].cookie;
    }
    this.setData(data)
  }
})
