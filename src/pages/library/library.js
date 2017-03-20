const requestUrl = require('../../utils/get-request-url');

Page({
  data: {
    inputShowed: false,
    inputVal: '',
    loading: false,
    page: 1,
    showClear: false,
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
      this.getData(e.detail.value, page).then((result) => {
        if (result.error) {
          console.error(result.error);
          that.setData({
            libraryData: [],
            noData: true,
          });
        } else if (result.length === 0) {
          that.setData({
            libraryData: [],
            noData: true,
          });
        } else {
          that.setData({
            libraryData: result,
            noData: false,
          });
        }
      });
    }
  },
  getData(keyValue, page) {
    // 获取数据
    const pageNum = page || 1;
    const promise = new Promise((resolve) => {
      wx.request({
        url: `${requestUrl}/api/education/library?keyValue=${encodeURI(keyValue)}&page=${pageNum}`,
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
  onReachBottom() {
    // 底部加载
    const that = this;
    if (!this.data.loading) {
      this.setData({
        loading: true,
      });
      const newPage = this.data.page + 1;
      this.setData({
        page: newPage,
      });
      const inputVal = this.data.inputVal;
      if (inputVal !== '') {
        this.getData(inputVal, newPage).then((result) => {
          const libraryData = that.data.libraryData;
          if (result.error) {
            console.error(result.error);
            that.setData({
              loading: false,
            });
          } else {
            if (result.length === 0) {
              wx.showToast({
                title: '已经到底了...',
                icon: 'success',
                duration: 2000,
              });
            }
            that.setData({
              libraryData: libraryData.concat(result),
              loading: false,
            });
          }
        });
      }
    }
  },
  goToDetail(event) {
    const detail = event.currentTarget.dataset.detail;
    wx.navigateTo({
      url: `library-detail?detail=${JSON.stringify(detail)}`,
    });
    // console.log(detail);
  },
});
