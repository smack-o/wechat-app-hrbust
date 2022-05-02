import React, { Component } from 'react'
import { Provider } from 'react-redux'
import 'taro-ui/dist/style/index.scss'
import axios from 'axios'
import mpAdapter from 'axios-miniprogram-adapter'

import { store } from './redux/store'
import { init, getUnreadCount, stopGetUnreadCount } from './redux/actions/user'

import './app.less'
// 小程序 axios 兼容
axios.defaults.adapter = mpAdapter

store.dispatch(init())

class App extends Component {
  componentDidMount() {}

  componentDidShow() {
    console.log('componentDidShow')
    store.dispatch(getUnreadCount())
  }

  componentDidHide() {
    console.log('componentDidHide')
    store.dispatch(stopGetUnreadCount())
  }

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

console.log(process.env, 'process.env')

export default App
