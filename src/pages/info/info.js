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
          that.setData({
            info: [],
          });
          wx.showModal({
            content: '拉取数据失败，请检查你的网络',
            showCancel: false,
            noData: true,
          });
        } else if (!result || result.length === 0) {
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
          resolve(info);
        },
        fail(error) {
          that.showError(that, error);
          resolve({
            error: 'error',
          });
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
});
