export const router = {
  // 分包，pages 主包目前只放 tab 签的四个主页面，其它功能页面都放入 subPackages 中
  pages: {
    login: 'login/index' // 登录页面
  }
}

export const pages = Object.keys(router.pages).map(
  path => `pages/${router.pages[path]}`
)

export type Routers = {
  [key in keyof typeof router['pages']]: string
}

export const routes: Routers = Object.keys(router).reduce((r, packageName) => {
  Object.keys(router[packageName]).forEach(routerName => {
    r[routerName] = `/${packageName}/${router[packageName][routerName]}`
  })
  return r
}, {} as Routers)

export default {
  pages,
  // tabBar: {
  //   borderStyle: 'black',
  //   color: '#ccc',
  //   selectedColor: '#000',
  //   backgroundColor: '#fff',
  //   list: [
  //     {
  //       pagePath: 'pages/index/index',
  //       text: '首页',
  //       iconPath: 'assets/icon/home.png',
  //       selectedIconPath: 'assets/icon/home_selected.png'
  //     },
  //     {
  //       pagePath: 'pages/campus/index',
  //       text: '校园',
  //       iconPath: 'assets/icon/campus.png',
  //       selectedIconPath: 'assets/icon/campus_selected.png'
  //     },
  //     {
  //       pagePath: 'pages/shop/index',
  //       text: '优惠购',
  //       iconPath: 'assets/icon/shop.png',
  //       selectedIconPath: 'assets/icon/shop_selected.png'
  //     },
  //     {
  //       pagePath: 'pages/discover/index',
  //       text: '发现',
  //       iconPath: 'assets/icon/find.png',
  //       selectedIconPath: 'assets/icon/find_selected.png'
  //     },
  //     {
  //       pagePath: 'pages/account/index',
  //       text: '我',
  //       iconPath: 'assets/icon/account.png',
  //       selectedIconPath: 'assets/icon/account_selected.png'
  //     }
  //   ]
  // },

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: '理工喵',
    navigationBarTextStyle: 'black'
  },

  plugins: {
    waimai: {
      version: '1.1.0',
      provider: 'wx05e29bcb0dd5320e'
    }
  }
}
