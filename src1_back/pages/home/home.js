const requestUrl = require('../../utils/get-request-url');

getApp();
Page({
  data: {
    showMessage: true,
    contents: [{
      image: '../../images/course_icon.png',
      text: '课表',
      url: '../course/course',
      needLogin: true,
    }, {
      image: '../../images/grade_icon.png',
      text: '成绩',
      url: '../grade/grade',
      needLogin: true,
    }, {
      image: '../../images/exam_icon.png',
      text: '考试',
      url: '../exam/exam',
      needLogin: true,
    }, {
      image: '../../images/luqu_icon.png',
      text: '录取查询',
      url: '../gaokaoluqu/gaokaoluqu',
    }, {
      image: '../../images/news_icon.png',
      text: '教务公告',
      url: '../news/news',
    }, {
      image: '../../images/job_icon.png',
      text: '校招信息',
      url: '../job/job',
    },
    {
      image: '../../images/search_icon.png',
      text: '新生速查',
      url: '../info/info',
      // image: '../../images/search_icon.png',
      // text: '新生速查',
      // url: '../info/info',
    },
    // {
    //   image: '../../images/cet4_icon.png',
    //   text: '四六级成绩',
    //   url: '../cet4/cet4',
    //   needLogin: true,
    //   // image: '../../images/search_icon.png',
    //   // text: '新生速查',
    //   // url: '../info/info',
    // },
    // {
    //   image: '../../images/library_icon.png',
    //   text: '图书馆',
    //   url: '../library/library',
    // },
    {
      text: '联系我们',
      type: 'service',
    }, {
      image: '../../images/about_icon.png',
      text: '别点我',
      url: '../about/about',
    }],
  },
  jumpPage(event) {
    const item = event.currentTarget.dataset.item;
    if (item.needLogin && !this.data.isLogin) {
      return;
    }
    wx.navigateTo({
      url: item.url,
    });
  },
  onCloseMessage() {
    this.setData({
      showMessage: false,
    });
  },
  getMessage() {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${requestUrl}/message`,
        header: {
          'Content-Type': 'application/json',
        },
        success(res) {
          resolve(res.data.data);
        },
        fail() {
          reject({
            error: 'error',
          });
        },
      });
    });
  },
  getUserName(username, password, cookie, callback) {
    wx.request({
      url: `${requestUrl}/getUserName`,
      data: {
        username,
        password,
        cookie,
      },
      header: {
        'Content-Type': 'application/json',
      },
      success(res) {
        if (res.error) {
          console.error('getname error');
        } else {
          callback(res.data.name);
        }
      },
    });
  },
  onShareAppMessage() {
    return {
      title: '哈理工专属小程序',
      path: 'pages/home/home',
    };
  },
  onShow() {
    const that = this;
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    this.getMessage().then((result) => {
      const messageStorage = wx.getStorageSync('message');
      if ((messageStorage && messageStorage._id === result[0]._id) || result.length === 0) {
        return;
      }
      that.setData({
        message: result,
      });
      wx.setStorage({
        key: 'message',
        data: result[0],
      });
    });
  },
  onLoad() {
    const userInfo = wx.getStorageSync('userInfo');
    const selectUsername = wx.getStorageSync('selectUsername');
    const that = this;

    if (!selectUsername) {
      // 没有任何登陆信息
      this.setData({
        isLogin: false,
      });
      return;
    }

    this.setData({
      isLogin: true,
    });

    const password = userInfo[selectUsername].password;
    const cookie = userInfo[selectUsername].cookie;

    // 获取用户名字
    if (userInfo[selectUsername].name) {
      that.setData({
        username: userInfo[selectUsername].name,
      });
    } else {
      that.setData({
        username: selectUsername,
      });
      that.getUserName(selectUsername, password, cookie, (name) => {
        that.setData({
          username: name,
        });
        userInfo[selectUsername].name = name;
        wx.setStorage({
          key: 'userInfo',
          data: userInfo,
        });
      });
    }
  },
});
