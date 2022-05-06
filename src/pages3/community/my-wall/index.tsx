import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import { APIS } from '@/services2'
import { withRequest } from '@/utils'
import { goPage } from '@/utils/router'
import { routes } from '@/app.config'
import './index.less'
import ListItem from '../_components/list-item'

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

    // TODO: 兜底页
    if (list.length === 0) {
      return null
    }
    return (
      <View className={prefix}>
        {list.map(item => {
          return (
            <ListItem
              key={item._id}
              userInfo={item.publisher?.userInfo}
              onClick={() => {
                goPage(`${routes.wallDetail}?id=${item._id}`)
              }}
              time={item.createdAt}
              photo={item.photos?.[0]}
              rightContent={item.content}
              content={
                <View>
                  {item.to && (
                    <Fragment>
                      表白&nbsp;
                      <Text className="blue-text">@{item.to}</Text>&nbsp;
                    </Fragment>
                  )}

                  {item.content}
                </View>
              }
            ></ListItem>
          )
        })}
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
