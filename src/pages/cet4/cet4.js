const requestUrl = require('../../utils/get-request-url');

Page({
    data: {
        usename: wx.getStorageSync('selectUsername'),
        loading: false,
    },

    getCet(usename) {
        const that = this;
        const promise = new Promise((resolve) => {
            wx.request({
                url: `${requestUrl}/getCet?username=${usename}`,
                header: {
                    'Content-Type': 'application/json',
                },
                success(res) {
                    const cetData = res.data.data[0];
                    that.setData({
                        cetData,
                    });
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
            content: '加载失败，请检查您的网络。',
            confirmText: '重新加载',
            success(res) {
                if (res.confirm) {
                    that.getCet(that.data.usename);
                }
            },
        });
    },

    onLoad(options) {
        if (options.cetData) {
          // 通过分享进入页面
          const cetData = JSON.parse(options.cetData);
          wx.setNavigationBarTitle({
            title: `${cetData.shareName}的四六级成绩`,
          });
          this.setData(Object.assign({}, cetData, {
            doNotRefresh: true,
          }));
          return;
        }
        wx.setNavigationBarTitle({
          title: '四六级成绩',
        });
        const that = this;
        this.getCet(that.data.usename);
    },

    onPullDownRefresh() {
        if (this.data.doNotRefresh) {
          wx.stopPullDownRefresh();
          return;
        }
        const that = this;
        this.getCet(that.data.usename).then(() => {
            wx.stopPullDownReresh();
        });
    },
    onShareAppMessage() {
      // courseData
      const userInfo = wx.getStorageSync('userInfo');
      const shareName = userInfo[this.data.usename].name.split('(')[0];
      return {
        title: `${shareName}的四六级成绩。`,
        path: `pages/cet4/cet4?cetData=${JSON.stringify(Object.assign({}, this.data, {
          shareName,
        }))}`,
      };
    },
});
