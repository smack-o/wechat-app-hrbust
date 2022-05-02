import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import { IRootState } from '@/types'
import { APIS } from '@/services2'
import { withRequest } from '@/utils'
import './index.less'
import WallItem from '../_components/wall-item'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {
  data: GetApiResultType<typeof APIS.WallApi.apiWallBrickIdGet>
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

const prefix = 'message-page'
class Message extends Component<IProps, PageState> {
  state: PageState = {
    data: undefined
  }

  pageNum = 0
  pageSize = 5
  fetching = false

  onLoad(e) {
    this.getData()
  }

  getData = async () => {
    const [err, res] = await withRequest(APIS.MessageApi.apiMessageListGet)({
      pageNum: String(this.pageNum),
      pageSize: String(this.pageSize)
    })
    console.log(res)
    // if (!err && res) {
    //   this.setState({
    //     data: res
    //   })
    // }
  }

  render() {
    const { data } = this.state

    if (!data) {
      return null
    }
    return (
      <View className={prefix}>
        <WallItem data={data}></WallItem>
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
