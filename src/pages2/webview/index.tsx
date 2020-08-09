import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, WebView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import { UserState } from '@/redux/reducers/user'

type PropsFromState = {
  user: UserState
}

type PropsFromDispatch = {
}

type PageOwnProps = {}

type PageState = {
  url: string
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

class Webview extends Component<IProps, PageState> {
  state = {
    url: '',
  }

  componentDidShow () {
  }

  onLoad(e) {
    Taro.setNavigationBarTitle({
      title: e.title || ''
    })

    this.setState({
      url: decodeURIComponent(e.url)
    })
  }

  render () {
    const { url } = this.state
    return (
      <View className="webview-page">
        <WebView src={url}>
        </WebView>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps)(Webview)
