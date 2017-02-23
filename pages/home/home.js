//index.js
//获取应用实例
Page({
  data: {
    contents: [{
      image: '../../images/course_icon.png',
      text: '课表',
      url: '../course/course',
    },{
      image: '../../images/grade_icon.png',
      text: '成绩',
      url: '../grade/grade',
    },{
      image: '../../images/exam_icon.png',
      text: '考试',
    },{
      image: '../../images/news_icon.png',
      text: '教务公告',
    },{
      image: '../../images/course_icon.png',
      text: '课表',
    },{
      image: '../../images/course_icon.png',
      text: '课表',
    },{
      image: '../../images/course_icon.png',
      text: '课表',
    },{
      image: '../../images/course_icon.png',
      text: '课表',
    },{
      image: '../../images/course_icon.png',
      text: '课表',
    },],
  },
  login: function() {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  getUserName: function(username, password, cookie, callback) {
    wx.request({
      url: 'https://test.gebilaowu.cn/api/education/getUserName?',
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
          callback(res.data.name);
        }
      }
    });
  },
  onLoad: function() {
    var userInfo = wx.getStorageSync('userInfo');
    var selectUsername = wx.getStorageSync('selectUsername');
    if (!selectUsername) {
      // 没有任何登陆信息
      this.setData({
        loginStatus: false,
      });
      return;
    }

    this.setData({
      loginStatus: true,
    });

    var password = userInfo[selectUsername].password;
    var cookie = userInfo[selectUsername].cookie;
    var that = this;

    // 获取用户名字
    if (userInfo[selectUsername].name) {
      that.setData({
        username: userInfo[selectUsername].name
      });
    } else {
      that.setData({
        username: selectUsername,
      });
      that.getUserName(selectUsername, password, cookie, function(name) {
        that.setData({
          username: name
        });
        userInfo[selectUsername].name = name;
        wx.setStorage({
          key: 'userInfo',
          data: userInfo
        });
      });
    }
  }
})
