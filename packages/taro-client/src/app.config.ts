export const router = {
  // 分包，pages 主包目前只放 tab 签的四个主页面，其它功能页面都放入 subPackages 中
  pages: {
    index: 'index/index', // 首页
    // campus: 'campus/index', // 校园
    // discover: 'discover/index', // 发现
    account: 'account/index', // 个人中心
    shop: 'shop/index', // 校园购
    resource: 'resource/index', // 资源分享首页
    // 'pages/course',
    // 'pages/courseDetail',
    // 'pages/choiceTrem',
    // 'pages/christmas/christmasIndex',
    // 'pages/christmas/imageeditor',
    // 'pages/christmas/combine',
    // 'pages/guoqi/index',
    // 'pages/guoqi/combine',
    // 'pages/guoqi/imageeditor',
    // 'pages/wifi',
    // 'pages/combine/combine'
  },
  pages2: {
    login: 'login/index', // 登录页面
    course: 'course/index', // 课表主页面
    courseTerm: 'course-term/index', // 课表，选择学期页面
    courseDetail: 'course-detail/index', // 课表，课程详情页
    webview: 'webview/index', // 公共 webview 承载页面
    exam: 'exam/index', // 考试查询
    grade: 'grade/index', // 成绩查询
    gradeShare: 'grade/share/index', // 成绩查询
    yingxin: 'yingxin/index', // 新生查询
    news: 'news/index', // 教务新闻
    classroom: 'classroom/index', // 空教室查询
    classroomList: 'classroom-list/index', // 空教室查询结果
    pddSearch: 'pdd-search/index', // 品多多搜索页面,
  },
  pages3: {
    accountEdit: 'account-edit/index', // 个人中心，编辑个人信息页面
    aboutme: 'aboutme/index', // 关于我们
    // schoolAnniversary: 'school-anniversary/index', // 70 周年校庆
    community: 'community/index', // 社区首页
    createWall: 'community/create-wall/index', // 创建表白墙
    wallDetail: 'community/wall-detail/index', // 表白墙详情
    createSaleWall: 'community/create-sale-wall/index', // 创建卖舍友
    saleWallDetail: 'community/sale-wall-detail/index', // 卖舍友详情
    message: 'community/message/index', // 消息页面
    myWall: 'community/my-wall/index', // 我的表白墙
    mySaleWall: 'community/my-sale-wall/index', // 我的卖舍友
    search: 'community/search/index', // 搜索
    otherAccount: 'community/account/index', // 其他用户主页
    // games: 'community/resource/index', // 资源分享首页
    resourceDetail: 'community/resource-detail/index', // 资源分享详情
    searchResource: 'community/search-resource/index', // 资源分享搜索
  },
}

export const pages = Object.keys(router.pages).map(
  (path) => `pages/${router.pages[path]}`
)

export type Routers = {
  [key in keyof (typeof router)['pages']]: string
} & {
  [key in keyof (typeof router)['pages2']]: string
} & {
  [key in keyof (typeof router)['pages3']]: string
}

export const routes: Routers = Object.keys(router).reduce((r, packageName) => {
  Object.keys(router[packageName]).forEach((routerName) => {
    r[routerName] = `/${packageName}/${router[packageName][routerName]}`
  })
  return r
}, {} as Routers)

export default {
  pages,
  subPackages: [
    {
      root: 'pages2',
      pages: Object.values(router.pages2),
    },
    {
      root: 'pages3',
      pages: Object.values(router.pages3),
    },
  ],
  tabBar: {
    custom: true,
    borderStyle: 'black',
    color: '#ccc',
    selectedColor: '#000',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/icon/home.png',
        selectedIconPath: 'assets/icon/home_selected.png',
      },
      {
        pagePath: 'pages/resource/index',
        text: '资源分享',
        iconPath: 'assets/icon/campus.png',
        selectedIconPath: 'assets/icon/campus_selected.png',
      },
      // {
      //   pagePath: 'pages/discover/index',
      //   text: 'Soul',
      //   iconPath: 'assets/icon/find.png',
      //   selectedIconPath: 'assets/icon/find_selected.png'
      // },
      {
        pagePath: 'pages/shop/index',
        text: '优惠购',
        iconPath: 'assets/icon/shop.png',
        selectedIconPath: 'assets/icon/shop_selected.png',
      },
      {
        pagePath: 'pages/account/index',
        text: '我',
        iconPath: 'assets/icon/account.png',
        selectedIconPath: 'assets/icon/account_selected.png',
      },
    ],
  },

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: '理工喵',
    navigationBarTextStyle: 'black',
  },

  plugins: {
    waimai: {
      version: '1.1.0',
      provider: 'wx05e29bcb0dd5320e',
    },
  },
}
