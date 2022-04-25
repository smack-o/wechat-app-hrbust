import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import { IRootState } from '@/types'
import { APIS } from '@/services2'
import { withRequest } from '@/utils'
import './index.less'
import WallItem from '../community/_components/wall-item'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {
  data: GetApiResultType<typeof APIS.WallApi.apiWallBrickIdGet>
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

const prefix = 'wall-detail'
class CreateWall extends Component<IProps, PageState> {
  state = {
    data: undefined
  }

  onLoad(e) {
    console.log(e)
    if (e.id) {
      this.getData(e.id)
    }
  }

  getData = async (id: string) => {
    const [err, res] = await withRequest(APIS.WallApi.apiWallBrickIdGet)({
      brickId: id
    })

    if (!err && res) {
      this.setState({
        data: res
      })
    }
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
)(CreateWall)
