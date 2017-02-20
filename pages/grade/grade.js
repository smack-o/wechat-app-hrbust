const date = new Date();
const terms = [];
for (let i = date.getFullYear(); i >= date.getFullYear() - 5; i--) {
  terms.push(i + ' ' + '秋');
  terms.push(i + ' ' + '春');
}

Page({
  data: {
    titles: ['课程', '成绩', '及格标志', '学分', '选课属性', '备注', '考试性质'],
    terms,
  },

  // 切换学年学期
  changeTerm: function(e) {
    const term = terms[e.detail.value];
    this.setData({
      term,
    });
    this.getGrade(term.split(' ')[0], term.split(' ')[1]);
  },

  getGrade: function (year, term, onPullDownRefresh) {
    if (!onPullDownRefresh) {
      this.setData({
        getGradeLoading: true,
      });
    }

    const userInfo = this.data.userInfo;
    const username = this.data.username;
    const password = userInfo[username].password;
    const cookie = userInfo[username].cookie;
    const that = this;
    const data = {
      username,
      password,
      cookie,
    }
    if (year && term) {
      data.year = parseInt(year) - 1980;
      const termsObj = {
        '春': 1,
        '秋': 2,
      }
      data.term = termsObj[term];
    }
    wx.request({
      url: 'https://test.gebilaowu.cn/api/education/getGrade',
      data,
      header: {
        'Content-Type': 'application/json'
      },
      fail: function () {
        wx.showModal({
          content: '拉取数据失败，请检查你的网络',
          showCancel: false,
          getGradeLoading: false,
        });
      },
      success: function(res) {
        if (res.error) {
          console.log("get grade error", res.error);
          this.setData({
            getGradeLoading: false,
          });
          wx.showModal({
            content: `拉取数据失败。${res.error}`,
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
            gradeData: gradeData,
            getGradeLoading: false,
          }

          if (res.data.data.length > 0) {
            newData.term = res.data.data[0][0] + ' ' + res.data.data[0][1];
          }

          userInfo[username].cookie = res.data.cookie;
          userInfo[username].grade = gradeData;
          userInfo[username].gradeItem = newData.term;

          wx.setStorage({
            key: 'userInfo',
            data: userInfo
          });

          if (res.data.data.length > 0) {
            newData.term = res.data.data[0][0] + ' ' + res.data.data[0][1];
          }

          that.setData(newData);

          wx.showToast({
            title: '拉取数据成功',
            icon: 'success',
            duration: 2000
          });
        }
      }
    });
  },
  onLoad: function () {
    const userInfo = wx.getStorageSync('userInfo');
    const username = wx.getStorageSync('selectUsername');
    const gradeData = userInfo[username].grade;
    const gradeItem = userInfo[username].gradeItem;

    const data = {
      gradeData,
      username,
      userInfo,
      term: gradeItem,
    }

    this.setData(data);
    this.getGrade();

  },
    // 下拉刷新
  onPullDownRefresh: function() {
    this.getGrade(null, null, true);
  },
})
