import React, { Fragment } from 'react'
import { View, Text } from '@tarojs/components'
import { APIS } from '@/services2'
import { goPage } from '@/utils/router'
import { routes } from '@/app.config'
import './index.less'
import ListItem from '../list-item'

interface IProps {
  list: GetApiResultType<typeof APIS.WallApi.apiWallListGet>
}

export default function BrickMessageList(props: IProps) {
  const { list } = props

  if (list.length === 0) {
    return <View className="community-no-data">暂未发布内容</View>
  }
  return (
    <Fragment>
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
    </Fragment>
  )
}
