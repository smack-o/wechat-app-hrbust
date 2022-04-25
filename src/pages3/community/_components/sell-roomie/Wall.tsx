import React from 'react'
import { View, Image } from '@tarojs/components'
import { withRequest } from '@/utils'
import { APIS } from '@/services2'

type WallState = {
  list: GetApiResultType<typeof APIS.WallApi.apiWallListGet>
}

type WallProps = {}

export default class Wall extends React.Component<WallProps, WallState> {
  state: WallState = {
    list: []
  }
  componentDidMount() {
    this.init()
  }

  init = async () => {
    const [err, res] = await withRequest(APIS.WallApi.apiWallListGet)({
      pageNum: '0',
      pageSize: '20'
    })

    if (err || !res) {
      return
    }

    this.setState({
      list: res
    })
  }
  render() {
    return (
      <View>
        {this.state.list.map(item => {
          return (
            <View key={item._id}>
              <View>@{item.to}</View>
              <View>{item.content}</View>
              <View>点赞：{item.isLike}</View>
              <View>收藏：{item.isCollect}</View>
              <View>
                {/* 评论：{item.} */}
                {item.photos?.map(photo => {
                  return (
                    <Image
                      key={photo.key}
                      src={`http://testqiniu2.smackgg.cn/${photo.key}`}
                    ></Image>
                  )
                })}
              </View>
              <View></View>
            </View>
          )
        })}
      </View>
    )
  }
}
