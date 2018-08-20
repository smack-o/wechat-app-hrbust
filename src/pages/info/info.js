const requestUrl = require('../../utils/get-request-url');

Page({
  data: {
    name: '',
    id: '',
    info: null,
    noData: false,
    rongcheng: false,
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
  showInput() {
    this.setData({
      inputShowed: true,
    });
  },
  hideInput() {
    this.setData({
      inputVal: '',
      inputShowed: false,
      showClear: false,
    });
  },
  clearInput() {
    this.setData({
      inputVal: '',
      showClear: false,
    });
  },
  inputTyping(e) {
    if (e.detail.value !== '') {
      this.setData({
        showClear: true,
      });
    }
  },
  inputConfirm(e) {
    // 实时获取输入内容并发起请求
    const that = this;
    const page = 1;
    this.setData({
      inputVal: e.detail.value,
      page,
    });
    if (e.detail.value !== '') {
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000,
      });
      this.getInfo(e.detail.value, page).then((result) => {
        wx.hideToast();
        if (result.error) {
          that.setData({
            info: [],
          });
          wx.showModal({
            content: '拉取数据失败，请检查你的网络',
            showCancel: false,
            noData: true,
          });
        } else if (!result || result.length === 0) {
          that.setData({
            info: [],
            noData: true,
          });
        } else {
          that.setData({
            info: result,
            noData: false,
          });
        }
      });
    }
  },

  confirm() {
    const id = this.data.id;
    const name = this.data.name;
    if (!id) {
      wx.showModal({
        content: '请输入您的身份证号',
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
        url: `${requestUrl}/fenban?name=${encodeURI(name)}&id=${id}`,
        header: {
          'Content-Type': 'application/json',
        },
        success(res) {
          const resData = res.data;
          // console.log(resData);
          const { error, data } = resData;
          if (error === 0) {
            that.setData({
              showNoResult: true,
              loading: false,
              info: null,
            });
          } else {
            that.setData({
              info: data[0],
              showNoResult: false,
              loading: false,
            });
          }
          wx.hideToast();
          resolve(resData);
        },
        fail(error) {
          wx.hideToast();
          that.setData({
            loading: false,
            info: null,
            showNoResult: true,
          });
          resolve({
            error,
          });
        },
      });
    });
    return promise;
  },

  getInfo(name) {
    const that = this;
    const promise = new Promise((resolve) => {
      let url = `${requestUrl}/new_student_info?name=${encodeURI(name)}`;
      if (that.data.rongcheng) {
        url = `${requestUrl}/new_student_info?identity=${name}`;
      }
      wx.request({
        url,
        header: {
          'Content-Type': 'application/json',
        },
        success(res) {
          const info = res.data.data;
          that.setData({
            info,
          });
          wx.showToast({
            title: '拉取数据成功',
            icon: 'success',
            duration: 1000,
          });
          resolve(info);
        },
        fail(error) {
          that.showError(that, error);
          resolve({
            error: 'error',
          });
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
          that.getCet(that.data.username);
        }
      },
    });
  },
  switchChange(e) {
    if (e.detail.value) {
      this.setData({
        rongcheng: true,
        inputVal: '',
        showClear: false,
        info: [],
      });
    } else {
      this.setData({
        rongcheng: false,
        inputVal: '',
        showClear: false,
        info: [],
      });
    }
  },
});
