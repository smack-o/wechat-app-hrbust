export const router = {
  // 分包，pages 主包目前只放 tab 签的四个主页面，其它功能页面都放入 subPackages 中
  pages: {
    index: 'index/index', // 首页
    campus: 'campus/index', // 校园
    discover: 'discover/index', // 发现
    account: 'account/index', // 个人中心
    // 'pages/index',
    //   // 'pages/page4',
    //   // 'pages/test',
    //   'pages/login',
    //   'pages/course',
    //   'pages/courseDetail',
    //   'pages/choiceTrem',
    //   'pages/news/news',
    //   'pages/news/newsDetail',
    //   'pages/grade',
    //   'pages/exam',
    //   'pages/webview',
    //   'pages/discover',
    //   'pages/about',
    //   'pages/campus',
    //   'pages/account',
    //   // 'pages/CET',
    //   // 'pages/cetGrade',
    //   'pages/christmas/christmasIndex',
    //   'pages/christmas/imageeditor',
    //   'pages/christmas/combine',
    //   'pages/guoqi/index',
    //   'pages/guoqi/combine',
    //   'pages/guoqi/imageeditor',
    //   'pages/yingxin',
    //   // 'pages/wifi',
    //   'pages/room/index',
    //   'pages/room/rooms',
    //   'pages/gradeShare/grade'
    //   // 'pages/gradeShare/grade'
    //   // 'pages/combine/combine'
  },
  pages2: {
    login: 'login/index', // 登录页面
    webview: 'webview/index', // 公共 webview 承载页面
    exam: 'exam/index', // 考试查询
    grade: 'grade/index', // 成绩查询
  },
}

export const pages = Object.keys(router.pages).map(path => `pages/${router.pages[path]}`)

export type Routers = {
  [key in (keyof typeof router['pages'])]: string
} & {
  [key in (keyof typeof router['pages2'])]: string
}

export const routes: Routers = Object.keys(router).reduce((r, packageName) => {
  Object.keys(router[packageName]).forEach(routerName => {
    r[routerName] = `/${packageName}/${router[packageName][routerName]}`
  })
  return r
}, {} as Routers)

export default {
  pages,
  subPackages: [{
    root: 'pages2',
    pages: Object.values(router.pages2),
  }],
  tabBar: {
    borderStyle: 'black',
    color: '#ccc',
    selectedColor: '#000',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/icon/home.png',
        selectedIconPath: 'assets/icon/home_selected.png'
      },
      {
        pagePath: 'pages/campus/index',
        text: '校园',
        iconPath: 'assets/icon/campus.png',
        selectedIconPath: 'assets/icon/campus_selected.png'
      },
      {
        pagePath: 'pages/discover/index',
        text: '发现',
        iconPath: 'assets/icon/find.png',
        selectedIconPath: 'assets/icon/find_selected.png'
      },
      {
        pagePath: 'pages/account/index',
        text: '我',
        iconPath: 'assets/icon/account.png',
        selectedIconPath: 'assets/icon/account_selected.png'
      }
    ]
  },

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fafafa',
    navigationBarTitleText: '理工喵',
    navigationBarTextStyle: 'black'
  },
}
