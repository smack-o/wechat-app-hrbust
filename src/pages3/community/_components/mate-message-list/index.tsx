import React, { Fragment } from 'react'
import { View, Text } from '@tarojs/components'
import { APIS } from '@/services2'
import { goPage } from '@/utils/router'
import { routes } from '@/app.config'
import './index.less'
import ListItem from '../list-item'

interface IProps {
  list: GetApiResultType<typeof APIS.SaleWallApi.apiSaleWallListPublishGet>
}

export default function MateMessageList(props: IProps) {
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
              goPage(`${routes.saleWallDetail}?id=${item._id}`)
            }}
            time={item.createdAt}
            photo={item.photos?.[0]}
            rightContent={item.content}
            content={
              <View>
                舍友&nbsp;
                <Text className="blue-text">@{item.name}</Text>&nbsp;
                {item.content}
              </View>
            }
          ></ListItem>
        )
      })}
    </Fragment>
  )
}
