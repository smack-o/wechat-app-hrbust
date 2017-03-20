Page({
  onLoad(options) {
    const detail = JSON.parse(options.detail);
    this.setData({ detail });
  },
});
