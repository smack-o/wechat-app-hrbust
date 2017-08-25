const requestUrl = require('../../utils/get-request-url');

Page({
  data: {
    info: [],
    noData: false,
  },
  showInput() {
    this.setData({
      inputShowed: true,
    });
  },
  hideInput() {
    this.setData({
      inputVal: '',
      inputShowed: false,
      showClear: false,
    });
  },
  clearInput() {
    this.setData({
      inputVal: '',
      showClear: false,
    });
  },
  inputTyping(e) {
    if (e.detail.value !== '') {
      this.setData({
        showClear: true,
      });
    }
  },
  inputConfirm(e) {
    // 实时获取输入内容并发起请求
    const that = this;
    const page = 1;
    this.setData({
      inputVal: e.detail.value,
      page,
    });
    if (e.detail.value !== '') {
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000,
      });
      this.getInfo(e.detail.value, page).then((result) => {
        wx.hideToast();
        if (result.error) {
          console.error(result.error);
          that.setData({
            info: [],
          });
          wx.showModal({
            content: '拉取数据失败，请检查你的网络',
            showCancel: false,
            noData: true,
          });
        } else if (result.length === 0) {
          that.setData({
            info: [],
            noData: true,
          });
        } else {
          that.setData({
            info: result,
            noData: false,
          });
        }
      });
    }
  },
  getInfo(name) {
    const that = this;
    const promise = new Promise((resolve) => {
      wx.request({
        url: `${requestUrl}/new_student_info?name=${name}`,
        header: {
          'Content-Type': 'application/json',
        },
        success(res) {
          const info = res.data.data;
          that.setData({
            info,
          });
          wx.showToast({
            title: '拉取数据成功',
            icon: 'success',
            duration: 1000,
          });
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
      content: '加载失败，请检查您的网络。',
      confirmText: '重新加载',
      success(res) {
        if (res.confirm) {
          that.getCet(that.data.username);
        }
      },
    });
  },

  onLoad(options) {
    // if (options.info) {
    //   // 通过分享进入页面
    //   const info = JSON.parse(options.info);
    //   wx.setNavigationBarTitle({
    //     title: `${info.shareName}的四六级成绩`,
    //   });
    //   this.setData(Object.assign({}, info, {
    //     doNotRefresh: true,
    //   }));
    //   return;
    // }
    // wx.setNavigationBarTitle({
    //   title: '我的班级信息',
    // });
    // const username = wx.getStorageSync('selectUsername');
    // this.setData({
    //   username,
    // });
    // this.getCet(this.data.username);
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
