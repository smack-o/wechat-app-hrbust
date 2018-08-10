Page({
  data: {
    url: '',
  },
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '录取通知书物流信息',
    });
    const data = JSON.parse(options.data);
    this.setData({
      url: decodeURIComponent(data.url),
    });
  },
  onShareAppMessage() {
    return {
      title: '哈理工专属小程序, 宣讲信息。',
      path: `/pages/job-detail/job-detail?url=${this.data.detailUrl}`,
    };
  },
});
