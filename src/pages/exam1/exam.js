Page({
  data: {
    show: false,
    temp: false,
  },
  confirm1() {
    wx.navigateTo({
      url: '../grade/grade',
    });
  },

  confirm2() {
    wx.navigateTo({
      url: '../cet4/cet4',
    });
  },

  onLoad() {
    const username = wx.getStorageSync('selectUsername');
    if (username && username !== '1234') {
      this.setData({
        show: true,
      });
    }
  },
});
