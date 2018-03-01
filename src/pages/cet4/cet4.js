const requestUrl = require('../../utils/get-request-url');

Page({
  data: {
    loading: false,
    username: '',
    name: '',
    id: '',
  },

  getCet(name, id, username) {
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 10000,
    });
    const that = this;
    const promise = new Promise((resolve) => {
      let url = `${requestUrl}/getCet?name=${name}&id=${id}`;
      if (username) {
        url = `${requestUrl}/getCet?username=${username}`;
      }
      wx.request({
        url,
        header: {
          'Content-Type': 'application/json',
        },
        success(res) {
          wx.hideToast();
          let cetData = {};
          if (res.statusCode !== 400) {
            cetData = res.data.data[0];
          }
          that.setData({
            cetData,
          });
          wx.showToast({
            title: '拉取数据成功',
            icon: 'success',
            duration: 1000,
          });
          resolve();
        },
        fail() {
          wx.hideToast();
          // that.showError(that, error);
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
          that.getCet(that.data.name, that.data.id, that.data.username);
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
    const username = wx.getStorageSync('selectUsername');
    const userInfo = wx.getStorageSync('userInfo');
    if (username && userInfo && userInfo[username]) {
      this.setData({
        name: userInfo[username].name && userInfo[username].name.split('(')[0],
        username,
      });
    }
    // this.getCet(this.data.username);
  },

  // onPullDownRefresh() {
  //   if (this.data.doNotRefresh) {
  //     wx.stopPullDownRefresh();
  //     return;
  //   }
  //   this.getCet(this.data.username).then(() => {
  //     wx.stopPullDownRefresh();
  //   });
  // },
  nameInput(e) {
    this.setData({
      displayUsername: '',
      name: e.detail.value,
    });
  },
  idInput(e) {
    this.setData({
      id: e.detail.value,
    });
  },
  confirm1() {
    this.getCet(null, null, this.data.username);
  },
  confirm() {
    const name = this.data.name;
    const id = this.data.id;
    if (!name || !id) {
      wx.showToast({
        title: '填写错误',
        icon: 'none',
      });
      setTimeout(() => {
        wx.hideToast();
      }, 1000);
      return;
    }
    this.getCet(name, id);
  },
  onShareAppMessage() {
    let shareName = '';
    if (this.data.doNotRefresh) {
      shareName = this.data.shareName;
    } else {
      const userInfo = wx.getStorageSync('userInfo');
      shareName = userInfo[this.data.username].name.split('(')[0];
    }

    return {
      title: `${shareName}的四六级成绩。`,
      path: `pages/cet4/cet4?cetData=${JSON.stringify(Object.assign({}, this.data, {
          shareName,
        }))}`,
    };
  },
});
