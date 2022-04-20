import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'
import cn from 'classnames'
import './index.less'

const tabInfo = {
  borderStyle: 'black',
  color: '#ccc',
  selectedColor: '#000',
  // list: [
  //   {
  //     pagePath: 'pages/index/index',
  //     text: '首页',
  //     iconPath: HomeIcon,
  //     selectedIconPath:HomeIconSelected
  //   },
  //   {
  //     pagePath: 'pages/campus/index',
  //     text: '校园',
  //     iconPath: CampusIcon,
  //     selectedIconPath:CampusIconSelected
  //   },
  //   {
  //     pagePath: 'pages/discover/index',
  //     text: 'Soul',
  //     iconPath: FindIcon,
  //     selectedIconPath:FindIconSelected
  //   },
  //   {
  //     pagePath: 'pages/shop/index',
  //     text: '优惠购',
  //     iconPath: ShopIcon,
  //     selectedIconPath:ShopIconSelected
  //   },
  //   {
  //     pagePath: 'pages/account/index',
  //     text: '我',
  //     iconPath: AccountIcon,
  //     selectedIconPath:AccountIconSelected
  //   }
  // ],
  list: [
    {
      pagePath: 'pages/index/index',
      text: '首页',
      iconPath: '/assets/icon/home.png',
      selectedIconPath: '/assets/icon/home_selected.png'
    },
    {
      pagePath: 'pages/campus/index',
      text: '校园',
      iconPath: '/assets/icon/campus.png',
      selectedIconPath: '/assets/icon/campus_selected.png'
    },
    {
      pagePath: 'pages3/community/index',
      text: 'Soul',
      iconPath: '/assets/icon/find.png',
      selectedIconPath: '/assets/icon/find_selected.png'
    },
    {
      pagePath: 'pages/shop/index',
      text: '优惠购',
      iconPath: '/assets/icon/shop.png',
      selectedIconPath: '/assets/icon/shop_selected.png'
    },
    {
      pagePath: 'pages/account/index',
      text: '我',
      iconPath: '/assets/icon/account.png',
      selectedIconPath: '/assets/icon/account_selected.png'
    }
  ]
}

// import IconHome from '@assets/images/icon-home.png'
// import IconHomeA from '@assets/images/icon-home-a.png'
// import IconGoods from '@assets/images/icon-cart.png'
// import IconGoodsA from '@assets/images/icon-cart-a.png'
const isEqualPath = (a: string, b: string) =>
  (a || '').replace(/^\//, '') === (b || '').replace(/^\//, '')

// class customTabBar extends Component {
//   state = {
//     selected: -1,
//   }

//   tabInfo = {
//     borderStyle: 'black',
//     color: '#ccc',
//     selectedColor: '#000',
//     // list: [
//     //   {
//     //     pagePath: 'pages/index/index',
//     //     text: '首页',
//     //     iconPath: HomeIcon,
//     //     selectedIconPath:HomeIconSelected
//     //   },
//     //   {
//     //     pagePath: 'pages/campus/index',
//     //     text: '校园',
//     //     iconPath: CampusIcon,
//     //     selectedIconPath:CampusIconSelected
//     //   },
//     //   {
//     //     pagePath: 'pages/discover/index',
//     //     text: 'Soul',
//     //     iconPath: FindIcon,
//     //     selectedIconPath:FindIconSelected
//     //   },
//     //   {
//     //     pagePath: 'pages/shop/index',
//     //     text: '优惠购',
//     //     iconPath: ShopIcon,
//     //     selectedIconPath:ShopIconSelected
//     //   },
//     //   {
//     //     pagePath: 'pages/account/index',
//     //     text: '我',
//     //     iconPath: AccountIcon,
//     //     selectedIconPath:AccountIconSelected
//     //   }
//     // ],
//     list: [
//       {
//         pagePath: 'pages/index/index',
//         text: '首页',
//         iconPath: '/assets/icon/home.png',
//         selectedIconPath: '/assets/icon/home_selected.png'
//       },
//       {
//         pagePath: 'pages/campus/index',
//         text: '校园',
//         iconPath: '/assets/icon/campus.png',
//         selectedIconPath: '/assets/icon/campus_selected.png'
//       },
//       {
//         pagePath: 'pages/discover/index',
//         text: 'Soul',
//         iconPath: '/assets/icon/find.png',
//         selectedIconPath: '/assets/icon/find_selected.png'
//       },
//       {
//         pagePath: 'pages/shop/index',
//         text: '优惠购',
//         iconPath: '/assets/icon/shop.png',
//         selectedIconPath: '/assets/icon/shop_selected.png'
//       },
//       {
//         pagePath: 'pages/account/index',
//         text: '我',
//         iconPath: '/assets/icon/account.png',
//         selectedIconPath: '/assets/icon/account_selected.png'
//       }
//     ]
//   }

//   switchTab = index => {
//     const url = this.tabInfo.list[index].pagePath
//     Taro.switchTab({
//       url: `/${url}`
//     })
//     // this.setState({
//     //   selected: index
//     // })
//   }

//   render() {
//     const { selected } = this.state

//     return (
//       <CoverView className="tab-bar">
//         <CoverView className="tab-bar-border"></CoverView>
//         {this.tabInfo.list.map((item, index) => {
//           const isSelected = isEqualPath(path, item.pagePath)
//           return (
//             <CoverView
//               className={cn('tab-bar-item', {
//                 large: index === 2,
//               })}
//               onClick={() => this.switchTab(index)}
//               data-path={item.pagePath}
//               key={index}
//             >
//               <CoverImage
//                 className="custom-tab-item-img"
//                 src={
//                   isSelected
//                     ? item.selectedIconPath
//                     : item.iconPath
//                 }
//               />
//               <CoverView
//                 className="custom-tab-item-text"
//                 style={{
//                   color:
//                     isSelected
//                       ? this.tabInfo.selectedColor
//                       : this.tabInfo.color
//                 }}
//               >
//                 {item.text}
//               </CoverView>
//             </CoverView>
//           )
//         })}
//       </CoverView>
//     )
//   }
// }

const switchTo = (path: string, index: number) => () => {
  const url = '/' + path
  if (index === 2) {
    Taro.navigateTo({
      url
    })
    return
  }
  Taro.switchTab({
    url
  })
}

export default function CustomTabBar() {
  const [path, setPath] = useState(
    Taro.getCurrentInstance()?.router?.path || ''
  )

  useEffect(() => {
    // @ts-ignore
    wx.onAppRoute(function(res) {
      setPath(res.path)
    })
  }, [])

  return (
    <CoverView className="tab-bar">
      <CoverView className="tab-bar-border"></CoverView>
      {tabInfo.list.map((item, index) => {
        const isSelected = isEqualPath(path, item.pagePath)
        return (
          <CoverView
            className={cn('tab-bar-item', {
              large: index === 2
            })}
            onClick={switchTo(item.pagePath, index)}
            data-path={item.pagePath}
            key={index}
          >
            <CoverImage
              className="custom-tab-item-img"
              src={isSelected ? item.selectedIconPath : item.iconPath}
            />
            <CoverView
              className="custom-tab-item-text"
              style={{
                color: isSelected ? tabInfo.selectedColor : tabInfo.color
              }}
            >
              {item.text}
            </CoverView>
          </CoverView>
        )
      })}
    </CoverView>
  )
}
