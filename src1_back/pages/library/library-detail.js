Page({
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '图书详情',
    });
    const detail = JSON.parse(options.detail);
    this.setData({ detail });
  },
});
