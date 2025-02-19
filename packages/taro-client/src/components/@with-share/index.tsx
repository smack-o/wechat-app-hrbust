// 微信分享高阶组件

import React, { ComponentClass } from 'react'
import Taro from '@tarojs/taro'
import { getCurrentPageUrl } from '@/utils'

export type Options = {
  title?: string
  imageUrl?: string
  path?: string
  query?: string
}

const defaultOptions = {
  title: '理工喵',
  imageUrl: '',
  path: 'pages/index/index',
  query: ''
}

function withShare(opts: Options = defaultOptions) {
  return function demoComponent(WrappedComponent: ComponentClass) {
    return class WithShare extends WrappedComponent {
      async componentWillMount() {
        // console.log('componentWillMount')
        // Taro.showShareMenu({
        //   withShareTicket: true,
        //   // @ts-ignore
        //   menus: ['shareAppMessage', 'shareTimeline']
        // })
      }

      $setShareInfo?: () => Options
      _shareOptions?: Options

      // 点击分享的那一刻会进行调用
      onShareAppMessage() {
        return this.getShareInfo()
      }

      onShareTimeline() {
        const { title, imageUrl, query } = this.getShareInfo()
        return {
          title,
          query,
          imageUrl
        }
      }

      getShareInfo = () => {
        // let { title, imageUrl, path = null } = opts;
        let options = { ...opts }
        console.log(
          this.$setShareInfo,
          'this.$setShareInfo',
          this.$setShareInfo?.(),
          this._shareOptions
        )

        if (this._shareOptions) {
          options = {
            ...options,
            ...(this._shareOptions || {})
          }
        }
        // 从继承的组件获取配置
        if (this.$setShareInfo && typeof this.$setShareInfo === 'function') {
          // opts = this.$setShareInfo()
          options = {
            ...options,
            ...(this.$setShareInfo || {})
          }
        }

        const { title, path = getCurrentPageUrl(), imageUrl, query } = options

        return {
          title,
          path,
          imageUrl,
          query
        }
      }

      render() {
        // return <WrappedComponent />
        return super.render()
      }
    }
  }
}

export default withShare
