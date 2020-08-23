import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import { CommonState } from '@/redux/reducers/common'
import { Dispatch } from 'redux'
import { getNews } from '@/redux/actions/common'
import { Loading } from '@/components'
import { cError, showToast } from '@/utils'
import { goWebviewPage } from '@/utils/router'
import { API_BASE_URL } from '@/utils/request'

import './index.less'

type PropsFromState = {
  news: CommonState['news']
}

type PropsFromDispatch = {
  getNews: typeof getNews
}

type PageOwnProps = {
}

type PageState = {
  loading: boolean
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

class News extends Component<IProps, PageState> {
  state: Readonly<PageState> = {
    loading: false,
  }

  pageNo = 1

  async onLoad() {
    await this.getList()
    if (this.props.news.length === 0) {
      Taro.showToast({
        title: '没有拉取到数据~请稍后重试',
        icon: 'none'
      })
    }
  }

  // TODO: 拉取时有可能会出现报错，需要单独处理一下
  // TODO: 详情页跳转压缩包需要兼容打开
  // 拉取数据、错误处理等
  getList = async () => {
    this.setLoading(true)
    const [, res] = await cError(this.props.getNews({ page: this.pageNo }))
    this.setLoading(false)

    if (this.pageNo > 1 && res.data.length === 0) {
      showToast({
        title: '喵，已经到底了~',
        icon: 'none',
        duration: 2000
      })
      this.pageNo -= 1
    }
  }

  // loading
  setLoading = (loading: boolean) => this.setState({ loading })

  // 上拉加载
  onReachBottom() {
    if (!this.state.loading) {
      this.pageNo += 1
      this.getList()
    }
  }

  toDetail = (e) => {
    const id = e.currentTarget.dataset.id
    const url = `${API_BASE_URL}/api/news/${id}`

    goWebviewPage(url, '教务公告详情')
  }

  render () {
    const { news } = this.props
    const { loading } = this.state

    return (
      <Fragment>
        <Loading loading={loading}></Loading>
        <View className="news-page">
          {
            news.map((item) => {
              return <View className="news-item" key={item.id}>
                <View onClick={this.toDetail} data-id={item.id}>
                  <View className="padding-wrapper">
                    <View className="news-message">
                      <View className="news-title"> <Text className="top">{item.top ? '(置顶)' : ''}</Text> {item.title}</View>
                      <View className="text-small"> 发布时间：{item.date}</View>
                    </View>
                  </View>
                </View>
              </View>
            })
          }
        </View>
      </Fragment>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  news: state.common.news,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getNews: (data) => dispatch(getNews(data)),
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps, mapDispatchToProps)(News)
