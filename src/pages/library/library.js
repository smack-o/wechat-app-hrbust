const requestUrl = require('../../utils/get-request-url');

Page({
  data: {
    inputShowed: false,
    inputVal: '',
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
    });
  },
  clearInput() {
    this.setData({
      inputVal: '',
    });
  },
  inputTyping(e) {
    // console.log(e.detail.value);
    const that = this;
    this.setData({
      inputVal: e.detail.value,
    });
    this.getData(e.detail.value).then((result) => {
      if (result.error) {
        console.error(result.error);
        wx.showModal({
          content: '拉取数据失败，请检查你的网络',
          showCancel: false,
        });
      } else {
        that.setData({
          libraryData: result,
        });
        // console.log(that.data.libraryData);
      }
    });
  },
  getData(keyValue, page) {
    // const that = this;
    const pageNum = page || 1;
    const promise = new Promise((resolve) => {
      wx.request({
        url: `${requestUrl}/api/education/library?keyValue=${keyValue}&page=${pageNum}`,
        header: {
          'Content-Type': 'application/json',
        },
        success(res) {
          const resData = res.data.data;
          resolve(resData);
        },
        fail(error) {
          resolve({
            error,
          });
        },
      });
    });
    return promise;
  },
});
