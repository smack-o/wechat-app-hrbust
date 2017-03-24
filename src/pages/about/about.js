const app = getApp();

Page({
  data: {
    listConfig: [
      {
        position: 'left',
        text: '你好。',
      },
      {
        position: 'right',
        text: '谁开发的这么烂的小程序？',
      },
      {
        position: 'left',
        type: 'image',
        src: 'http://7xl432.com1.z0.glb.clouddn.com/hrbust_about.jpg',
      },
      {
        position: 'left',
        text: '话说这小程序真的很烂嘛？😫 ',
      },
      {
        position: 'right',
        text: '这小程序都有什么功能？',
      },
      {
        position: 'left',
        text: '目前主要是查询教务在线的信息。支持多账号登陆，在登陆页面可以登陆新账号，也可以切换已经登陆过的账号。当然，如果你有很好的建议，我们会考虑加更多的功能。',
      },
      {
        position: 'left',
        text: '记得当时每次查成绩、看教务信息、看课表、查图书馆的书等等在手机上都特别不方便。而且每次都要输入账号密码验证码！！！',
      },
      {
        position: 'right',
        text: '现在的功能和体验好差啊！',
      },
      {
        position: 'left',
        text: '如果你有任何建议，欢迎联系我！😎 ',
      },
      {
        position: 'right',
        text: '好了，你可以退下了！💩',
      },
      {
        position: 'left',
        text: '如果觉得这个小程序还不错，可以保存下方图片，识别二维码给我们一点点赞助。毕竟服务器以及程序的后期维护也都需要费用。1分也是爱🤑 。',
      },
      {
        position: 'left',
        type: 'image',
        src: 'http://7xl432.com1.z0.glb.clouddn.com/payment.jpeg',
      },
      {
        position: 'right',
        text: '死开 🙄 ，1分钱也不给 😤',
      },
    ],
    className: [],
    count: 0,
    scrollTop: 0,
    top: 0,
    itemList: [],
    scrollHeight: 0,
    flag: false,
    needScroll: false,
  },
  onLoad() {
    const that = this;
    this.audioCtx = wx.createAudioContext('myAudio');

    // 获取用户信息
    // 调用应用实例的方法获取全局数据
    app.getUserInfo((userInfo) => {
      // 更新数据
      const listConfig = that.data.listConfig;
      listConfig[0].text = `你好，${userInfo.nickName}。`;
      const avatarUrl = userInfo.avatarUrl;
      that.setData({
        avatarUrl: avatarUrl || '../../images/user_avatar.png',
        listConfig,
      });
      that.handler();
    });
  },

  handler() {
    const that = this;
    const timer = setInterval(() => {
      if (that.data.count > that.data.listConfig.length - 1) {
        clearInterval(timer);
        return;
      }

      // 音频
      if (that.data.listConfig[that.data.count].position === 'left') {
        that.audioCtx.seek(0);
        that.audioCtx.play();
      }

      const itemList = that.data.itemList;
      itemList.push(that.data.listConfig[that.data.count]);
      const count = that.data.count + 1;
      that.setData({
        count,
        itemList,
      });

      that.setData({
        scrollTop: 9999,
      });
    }, 1500);
  },
  viewImage(event) {
    // 点击图片展示
    const src = event.currentTarget.dataset.src;
    wx.previewImage({
      current: src,
      urls: [src],
      fail() {
        console.error('fail');
      },
    });
  },
});
