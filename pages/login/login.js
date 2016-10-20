//index.js
//获取应用实例
Page({
  usernameInput: function(e) {
    this.setData({
      username: e.detail.value
    })
    wx.setStorage({
      key:"username",
      data:e.detail.value
    })
  },
  passwordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
    wx.setStorage({
      key:"password",
      data:e.detail.value
    })
  },
  gotoHome: function(e) {
    wx.redirectTo({
      url: '../home/home'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    const username = wx.getStorageSync('username');
    const password = wx.getStorageSync('password');
    console.log(username,password,1111);
    const that = this;
    if (username) {
      that.setData({
        username
      })
    }
    if (password) {
      that.setData({
        password
      })
    }
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  }
})
