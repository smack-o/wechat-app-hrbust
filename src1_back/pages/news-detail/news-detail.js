const requestUrl = require('../../utils/get-request-url');

Page({
  data: {
    url: '',
    id: '',
  },
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '教务公告',
    });
    this.setData({
      id: options.id,
      url: `${requestUrl}/getNewsDetail?id=${options.id}`,
    });
  },
  onShareAppMessage() {
    return {
      title: '哈理工专属小程序, 教务公告。',
      path: `/pages/news-detail/news-detail?id=${this.data.id}`,
    };
  },
});
