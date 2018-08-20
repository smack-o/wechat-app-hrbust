const requestUrl = require('../../utils/get-request-url');

Page({
  data: {
    url: '',
    detailUrl: '',
  },
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '宣讲信息',
    });
    this.setData({
      detailUrl: options.url,
      url: `${requestUrl}/getJobDetail?url=${options.url}`,
    });
  },
  onShareAppMessage() {
    return {
      title: '哈理工专属小程序, 宣讲信息。',
      path: `/pages/job-detail/job-detail?url=${this.data.detailUrl}`,
    };
  },
});
