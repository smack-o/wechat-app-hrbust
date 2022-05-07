import { APIS } from '@/services2'
import { getCdnUrl, withRequest } from '@/utils'
import { goPage } from '@/utils/router'
import Taro from '@tarojs/taro'
import { Image, View } from '@tarojs/components'
import React, { useCallback, useEffect, useState } from 'react'
import { routes } from '@/app.config'
import Avatar from '@/components/Avatar'
import Time from '@/components/Time'
import classNames from 'classnames'

import SaleWallLike from '../../imgs/sale_wall_like.png'
import SaleWallLiked from '../../imgs/sale_wall_liked.png'

// import { Avatar, Time } from '../publisher-title'
import './SaleWallItem.less'

interface IWallItemProps {
  data: GetApiResultType<typeof APIS.SaleWallApi.apiSaleWallListGet>[0]
  timeType?: 'relative' | 'absolute'
}

const prefix = 'sale-wall-item'

export default function WallItem(props: IWallItemProps) {
  const {
    data: { photos = [], publisher, likeCount, isLike, _id, createdAt } = {},
    timeType
  } = props

  const [localIsLike, setLocalIsLike] = useState(isLike)
  const [localIsLikeCount, setLocalIsLikeCount] = useState(likeCount || 0)

  useEffect(() => {
    setLocalIsLike(isLike)
    setLocalIsLikeCount(likeCount || 0)
  }, [isLike, likeCount])

  const onLikeClick = useCallback(
    async e => {
      e.stopPropagation()
      const [err] = await withRequest(APIS.SaleWallApi.apiSaleWallLikeIdPut)({
        id: _id || ''
      })

      // 本地变更
      if (!err) {
        setLocalIsLike(!localIsLike)
        setLocalIsLikeCount(localIsLikeCount + (localIsLike ? -1 : 1))
      }
    },
    [_id, localIsLike, localIsLikeCount]
  )

  const onItemClick = useCallback(() => {
    goPage(`${routes.saleWallDetail}?id=${_id}`)
  }, [_id])

  const { height, width, key } = photos[0]

  return (
    <View className={prefix} onClick={onItemClick}>
      <Image
        style={{
          height:
            height && width ? Taro.pxTransform((height / width) * 347) : 'auto'
        }}
        className={`${prefix}__photo`}
        src={getCdnUrl(key)}
        mode="widthFix"
      ></Image>
      <View className={`${prefix}__info`}>
        <Avatar
          className={`${prefix}__avatar`}
          {...publisher?.userInfo}
          avatarSize="40rpx"
          // avatarUrl={publisher?.userInfo?.avatarUrl || ''}
          // nickName={publisher?.userInfo?.nickName || ''}
        ></Avatar>
        <View className={`${prefix}__info-bottom`}>
          <Time time={createdAt || ''} type={timeType}></Time>
          <View
            className={classNames(`${prefix}__info-like`, {
              active: localIsLike && !isLike
            })}
            onClick={onLikeClick}
          >
            <Image
              src={localIsLike ? SaleWallLiked : SaleWallLike}
              mode="widthFix"
            ></Image>
            {localIsLikeCount}
          </View>
        </View>
      </View>
    </View>
  )
}
