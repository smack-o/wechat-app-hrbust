import { APIS } from '@/services2'
import { getCdnUrl, withRequest } from '@/utils'
import { Image, View, Text } from '@tarojs/components'
import React, { useCallback, useState } from 'react'

import SaleWallLike from '../../imgs/sale_wall_like.png'
import SaleWallLiked from '../../imgs/sale_wall_liked.png'

import { Avatar, Time } from '../publisher-title'
import './SaleWallItem.less'

interface IWallItemProps {
  data: GetApiResultType<typeof APIS.SaleWallApi.apiSaleWallListGet>[0]
}

const prefix = 'sale-wall-item'

export default function WallItem(props: IWallItemProps) {
  const {
    data: { photos = [], publisher, likeCount, isLike, _id, createdAt } = {}
  } = props

  const [localIsLike, setLocalIsLike] = useState(isLike)
  const [localIsLikeCount, setLocalIsLikeCount] = useState(likeCount || 0)

  const onLikeClick = useCallback(async () => {
    const [err] = await withRequest(APIS.WallApi.apiWallLikePut)({
      brickId: _id
    })

    // 本地变更
    if (!err) {
      setLocalIsLike(!localIsLike)
      setLocalIsLikeCount(localIsLikeCount + (localIsLike ? -1 : 1))
    }
  }, [_id, localIsLike, localIsLikeCount])

  return (
    <View className={prefix}>
      <Image
        className={`${prefix}__photo`}
        src={getCdnUrl(photos?.[0]?.key)}
        mode="widthFix"
      ></Image>
      <View className={`${prefix}__info`}>
        <Avatar
          avatarUrl={publisher?.userInfo?.avatarUrl || ''}
          nickName={publisher?.userInfo?.nickName || ''}
        ></Avatar>
        <View className={`${prefix}__info-bottom`}>
          <Time time={createdAt || ''}></Time>
          <View className={`${prefix}__info-like`} onClick={onLikeClick}>
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
