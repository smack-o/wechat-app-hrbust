import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'
import { connect } from 'react-redux'
import { IRootState } from '@/types'
import cn from 'classnames'
import { store } from '@/redux/store'
import { toLogin } from '@/utils'
import './index.less'

const tabInfo = {
  borderStyle: 'black',
  color: '#ccc',
  selectedColor: '#000',
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

const isEqualPath = (a: string, b: string) =>
  (a || '').replace(/^\//, '') === (b || '').replace(/^\//, '')

const switchTo = (path: string, index: number) => () => {
  const url = '/' + path
  if (index === 2) {
    const isWechatLogin = store.getState().user.isWechatLogin
    if (!isWechatLogin) {
      toLogin(isWechatLogin, url)
      return
    }
    wx.requestSubscribeMessage({
      tmplIds: ['g0WWyXyMj-fU7kscwpXU89Q_Ola7sfJgIjKv7CdIVIc'],
      success: () => {
        Taro.navigateTo({
          url
        })
      }
    })
    return
  }
  Taro.switchTab({
    url
  })
}

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {}

type PageOwnProps = {}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

export function CustomTabBar(props: IProps) {
  const { unreadCount } = props
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
            {index === 4 && unreadCount > 0 && (
              <CoverView className="custom-tab-item-dot">
                {unreadCount > 99 ? '99+' : unreadCount}
              </CoverView>
            )}
          </CoverView>
        )
      })}
    </CoverView>
  )
}

const mapStateToProps = (state: IRootState) => ({
  unreadCount: state.user.unreadCount
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(
  mapStateToProps
)(CustomTabBar)
