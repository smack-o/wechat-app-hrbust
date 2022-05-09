import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import { APIS } from '@/services2'
import { withRequest } from '@/utils'
import MessageItem from '../_components/message-item'
import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {
  list: GetApiResultType<typeof APIS.MessageApi.apiMessageListGet>
  hasNext: boolean
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

const prefix = 'message-page'
class Message extends Component<IProps, PageState> {
  state: PageState = {
    list: [],
    hasNext: true
  }

  pageNum = 0
  pageSize = 20
  fetching = false

  componentDidMount() {
    this.init()
  }

  init = async () => {
    this.pageNum = 0
    await this.fetchList(true)
  }

  fetchList = async (reset?: boolean) => {
    this.fetching = true
    const [err, res] = await withRequest(APIS.MessageApi.apiMessageListGet)({
      pageNum: String(this.pageNum),
      pageSize: String(this.pageSize)
    })

    this.fetching = false

    if (err || !res) {
      return
    }

    this.setState({
      list: reset ? res : this.state.list.concat(res),
      hasNext: res.length === this.pageSize
    })
  }

  onReachBottom = () => {
    if (!this.state.hasNext || this.fetching) {
      return
    }
    this.pageNum++
    this.fetchList()
  }

  onPullDownRefresh = async () => {
    await this.init()
    Taro.stopPullDownRefresh()
  }

  render() {
    const { list } = this.state

    return (
      <View className={prefix}>
        {list.length === 0 ? (
          <View className="community-no-data">暂无消息</View>
        ) : (
          list.map(item => {
            return <MessageItem key={item._id} data={item}></MessageItem>
          })
        )}
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(
  mapStateToProps
)(Message)
