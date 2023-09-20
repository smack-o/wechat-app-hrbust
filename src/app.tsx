import { PropsWithChildren } from 'react'
import { useDidShow, useDidHide } from '@tarojs/taro'
import 'taro-ui/dist/style/index.scss'
import { Provider } from 'react-redux'
import axios from 'axios'
import mpAdapter from 'axios-miniprogram-adapter'

import { store } from './redux/store'
import { init, getUnreadCount, stopGetUnreadCount } from './redux/actions/user'

import './app.less'

// 小程序 axios 兼容
axios.defaults.adapter = mpAdapter

store.dispatch(init())

function App({ children }: PropsWithChildren<any>) {
  useDidShow(() => {
    console.log('App launched.')
    store.dispatch(getUnreadCount())
  })

  useDidHide(() => {
    stopGetUnreadCount()
  })

  // children 是将要会渲染的页面
  return <Provider store={store}>{children}</Provider>
}

export default App
