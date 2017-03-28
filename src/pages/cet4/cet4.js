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

    onLoad() {
        const that = this;
        this.getCet(that.data.usename);
    },

    onPullDownRefresh() {
        const that = this;
        this.getCet(that.data.usename).then(() => {
            wx.stopPullDownReresh();
        });
    },
});
