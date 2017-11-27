const requestUrl = require('../../utils/get-request-url');

Page({
  data: {
    page: 1,
    loading: false,
  },
  viewDetail(event) {
    const url = event.currentTarget.dataset.url;
    wx.navigateTo({
      url: `/pages/job-detail/job-detail?url=${encodeURI(url)}`,
    });
  },
  getJobList(page, needConcat) {
    const that = this;
    const promise = new Promise((resolve) => {
      wx.request({
        url: `${requestUrl}/getJobList?&page=${page}`,
        header: {
          'Content-Type': 'application/json',
        },
        success(res) {
          let jobData = that.data.jobData || [];
          const resData = res.data;

          if (!needConcat && (!resData || resData.length === 0)) {
            // 第一次加载没有数据
            that.showError(that, '没有加载到数据~请稍后重试！');
            that.setData({
              jobData: [],
            });
            resolve();
            return;
          }

          if (resData.length === 0) {
            // 没有加载到数据
            wx.showToast({
              title: '哥，真没有了...',
              icon: 'success',
              duration: 2000,
            });
            that.setData({
              page: that.data.page - 1,
            });
          } else {
            if (needConcat) {
              jobData = jobData.concat(resData);
            } else {
              jobData = resData;
            }

            that.setData({
              jobData,
            });
          }
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
      content: error || '加载失败，请检查您的网络。',
      confirmText: '重新加载',
      success(res) {
        if (res.confirm) {
          that.getJobList();
        }
      },
    });
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '校招信息',
    });
    this.getJobList();
  },
  onPullDownRefresh() {
    this.getJobList().then(() => {
      wx.stopPullDownRefresh();
      wx.showToast({
        title: '拉取数据成功',
        icon: 'success',
        duration: 1000,
      });
    });
  },
  onReachBottom() {
    if (!this.data.loading) {
      this.setData({
        loading: true,
      });
      const newPage = this.data.page + 1;
      this.setData({
        page: newPage,
      });
      this.getJobList(newPage, true).then(() => {
        this.setData({
          loading: false,
        });
      });
    }
  },
  onShareAppMessage() {
    return {
      title: '哈理工专属小程序, 校招信息。',
      path: 'pages/job/job',
    };
  },
});
