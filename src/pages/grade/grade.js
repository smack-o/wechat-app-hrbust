const requestUrl = require('../../utils/get-request-url');

const date = new Date();
const terms = [];
for (let i = date.getFullYear(); i >= date.getFullYear() - 5; i -= 1) {
  terms.push(`${i} 秋`);
  terms.push(`${i} 春`);
}

Page({
  data: {
    titles: ['课程', '成绩', '及格标志', '学分', '选课属性', '备注', '考试性质'],
    terms,
  },

  // 切换学年学期
  changeTerm(e) {
    if (this.data.doNotRefresh) {
      return;
    }
    const term = terms[e.detail.value];
    this.setData({
      term,
      getGradeLoading: true,
    });
    this.getGrade(term.split(' ')[0], term.split(' ')[1]).then(() => {
      this.setData({
        getGradeLoading: false,
      });
    });
  },

  getGrade(year, term) {
    const promise = new Promise((resolve) => {
      const userInfo = this.data.userInfo;
      const username = this.data.username;
      const password = userInfo[username].password;
      const cookie = userInfo[username].cookie;
      const that = this;
      const data = {
        username,
        password,
        cookie,
      };
      if (year && term) {
        data.year = parseInt(year) - 1980;
        const termsObj = {
          春: 1,
          秋: 2,
        };
        data.term = termsObj[term];
      }
      wx.request({
        url: `${requestUrl}/getGrade`,
        data,
        header: {
          'Content-Type': 'application/json',
        },
        fail() {
          wx.showModal({
            content: '拉取数据失败，请检查你的网络',
            showCancel: false,
          });
          resolve();
        },
        success(res) {
          if (res.statusCode === 400) {
            wx.showModal({
              content: `拉取数据失败。${res.data.error}`,
              showCancel: false,
            });
          } else {
            let gradeData = res.data.data;

            gradeData = gradeData.reduce((arr, item) => {
              const items = [];
              items.push(item[3]);
              items.push(item[6]);
              items.push(item[12]);
              items.push(item[7]);
              items.push(item[9]);
              items.push(item[10]);
              items.push(item[11]);

              arr.push(items);

              return arr;
            }, []);

            const newData = {
              gradeData,
              term: res.data.gradeTerm,
            };

            userInfo[username].cookie = res.data.cookie;
            userInfo[username].grade = gradeData;
            userInfo[username].gradeTerm = newData.term;

            wx.setStorage({
              key: 'userInfo',
              data: userInfo,
            });

            that.setData(newData);

            wx.showToast({
              title: '拉取数据成功',
              icon: 'success',
              duration: 2000,
            });
          }
          resolve();
        },
      });
    });
    return promise;
  },
  onLoad(options) {
    if (options.shareData) {
      // 通过分享进入页面
      const shareData = JSON.parse(options.shareData);
      wx.setNavigationBarTitle({
        title: `${shareData.shareName}的成绩`,
      });
      this.setData(Object.assign({}, shareData, {
        doNotRefresh: true,
      }));
      return;
    }
    wx.setNavigationBarTitle({
      title: '成绩',
    });
    const userInfo = wx.getStorageSync('userInfo');
    const username = wx.getStorageSync('selectUsername');
    const gradeData = userInfo[username].grade;
    const gradeTerm = userInfo[username].gradeTerm;
    const shareName = userInfo[username].name.split('(')[0];

    const data = {
      gradeData,
      username,
      userInfo,
      term: gradeTerm,
      shareName,
    };

    this.setData(data);
    if (!gradeData) {
      this.setData({
        getGradeLoading: true,
      });
      this.getGrade().then(() => {
        this.setData({
          getGradeLoading: false,
        });
      });
    }
  },
  onShareAppMessage() {
    const data = this.data;
    const shareData = {
      term: data.term,
      titles: data.titles,
      gradeData: data.gradeData,
      shareName: data.shareName,
    };
    return {
      title: `${data.shareName}的成绩`,
      path: `pages/grade/grade?shareData=${JSON.stringify(shareData)}`,
    };
  },
  // 下拉刷新
  onPullDownRefresh() {
    if (this.data.doNotRefresh) {
      wx.stopPullDownRefresh();
      return;
    }
    this.getGrade().then(() => {
      wx.stopPullDownRefresh();
    });
  },
});
