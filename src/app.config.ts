export const router = {
  pages: {
    index: 'index/index',
    campus: 'campus/index',
    discover: 'discover/index'
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
  }
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
  // subPackages: [{
  //   root: 'pages2',
  //   pages: Object.values(router.pages2),
  // }],
  // tabBar: {
  //   color: '#333333',
  //   selectedColor: '#D6B44C',
  //   borderStyle: 'white',
  //   backgroundColor: '#fff',
  //   list: [
  //     {
  //       pagePath: 'pages/index/index',
  //       iconPath: 'assets/icon/home.jpg',
  //       selectedIconPath: 'assets/icon/home-selected.jpg',
  //       text: '商城首页',
  //     },
  //     {
  //       pagePath: 'pages/category/index',
  //       iconPath: 'assets/icon/category.jpg',
  //       selectedIconPath: 'assets/icon/category-selected.jpg',
  //       text: '分类',
  //     },
  //     {
  //       pagePath: 'pages/shop-cart/index',
  //       iconPath: 'assets/icon/shopcart.jpg',
  //       selectedIconPath: 'assets/icon/shopcart-selected.jpg',
  //       text: '购物车',
  //     },
  //     {
  //       pagePath: 'pages/account/index',
  //       iconPath: 'assets/icon/account.jpg',
  //       selectedIconPath: 'assets/icon/account-selected.jpg',
  //       text: '我的',
  //     },
  //   ],
  // },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fafafa',
    navigationBarTitleText: '理工喵',
    navigationBarTextStyle: 'black'
  },
}
