const requestUrl = require('../../utils/get-request-url');

Page({
  data: {
    name: '',
    id: '',
    zy: '',
    captchaValue: '',
    cookie: '',
    loading: false,
    showNoResult: false,
  },
  captchaInput(event) {
    const captchaValue = event.detail.value;
    this.setData({
      captchaValue,
    });
  },
  nameInput(event) {
    const name = event.detail.value;
    this.setData({
      name,
    });
  },
  idInput(event) {
    const id = event.detail.value;
    this.setData({
      id,
    });
  },
  confirm() {
    const id = this.data.id;
    const name = this.data.name;
    if (!id) {
      wx.showModal({
        content: '请输入您的考生号',
        confirmText: '我知道了',
      });
      return;
    }
    if (!name) {
      wx.showModal({
        content: '请输入您的姓名',
        confirmText: '我知道了',
      });
      return;
    }
    this.getData(name, id);
  },
  changeCaptcha() {
    this.getData(this.data.name, this.data.id);
  },
  getData(name, id) {
    // 获取数据
    const that = this;
    that.setData({
      loading: true,
    });
    const promise = new Promise((resolve) => {
      wx.showToast({
          title: '数据加载中',
          icon: 'loading',
          duration: 6000,
      });
      wx.request({
        url: `${requestUrl}/gaokaoluqu?name=${encodeURI(name)}&id=${id}`,
        header: {
          'Content-Type': 'application/json',
        },
        success(res) {
          const resData = res.data;
          // console.log(resData);
          const { cookie, captcha, status } = resData;
          if (status === 1) {
            that.setData({
              zy: resData.data[0].map.ZYDHMC,
              cookie,
              captcha: `data:image/png;base64, ${captcha}`,
              showNoResult: false,
            });
          } else {
            that.setData({
              zy: '',
              cookie: '',
              captcha: '',
              showNoResult: true,
            });
          }
          wx.setStorage({
            key: 'gaokaoluquInfo',
            data: JSON.stringify({
              name: that.data.name,
              id: that.data.id,
            }),
          });
          wx.hideToast();
          that.setData({
            loading: false,
          });
          resolve(resData);
        },
        fail(error) {
          wx.hideToast();
          that.setData({
            loading: false,
          });
          resolve({
            error,
          });
        },
      });
    });
    return promise;
  },
  confirm2() {
    const captcha = this.data.captchaValue;
    if (!captcha) {
      wx.showModal({
        content: '请输入验证码',
        confirmText: '我知道了',
      });
    } else {
      wx.navigateTo({
        url: `gaokaoluqu-detail?data=${JSON.stringify({
          url: encodeURIComponent(`${requestUrl}/luqukuaidi?id=${this.data.id}&cookie=${encodeURIComponent(this.data.cookie)}&checkCode=${captcha}`),
        })}`,
      });
    }
  },
  onShow() {
    if (this.data.zy) {
      this.getData(this.data.name, this.data.id);
    }
  },
  onLoad() {
    const gaokaoluquInfo = wx.getStorageSync('gaokaoluquInfo');
    if (gaokaoluquInfo) {
      const info = JSON.parse(gaokaoluquInfo);
      this.setData({
        name: info.name,
        id: info.id,
      });
    }
    wx.setNavigationBarTitle({
      title: '哈理工高考录取查询',
    });
  },
  onShareAppMessage() {
    return {
      title: '哈理工专属小程序, 图书馆图书查询。',
      path: 'pages/library/library',
    };
  },
});
