import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import { APIS } from '@/services2'
import { withRequest } from '@/utils'
import './index.less'
import BrickMessageList from '../_components/brick-message-list'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {
  list: GetApiResultType<typeof APIS.WallApi.apiWallListPublishGet>
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
    const [err, res] = await withRequest(APIS.WallApi.apiWallListPublishGet)({
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
        <BrickMessageList list={list}></BrickMessageList>
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
