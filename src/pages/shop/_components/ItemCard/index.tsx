import React, { Fragment } from 'react'
import { View, Text, Image } from '@tarojs/components'
import cn from 'classnames'

export default function ItemCard (props: { title: string, list: any[], loading?: boolean, nowrap?: boolean }) {
  const { title, list, loading, nowrap } = props
  if (loading) {
    return <View className="pdd-list-loading">加载中...</View>
  }
  return <Fragment>
    <View className="channel-title">{title}</View>
    <View className={cn('pdd-wrapper', {
      nowrap
    })}
    >
      <View className="pdd-list">
        {
          list.map((item) => {
            const { coupon_discount } = item
            return <View key={item.goods_id} className="pdd-item" onClick={() => this.onPddGoodsClick(item)}>
              <Image className="thumb" src={item.goods_thumbnail_url}></Image>
              {coupon_discount > 0 && <View className="coupon">校园专属{coupon_discount / 100}元优惠券</View>}
              <View className="name">{item.goods_name}</View>
              <View className="info">
                <View className="price">
                  <Text className="min-price">￥{(item.min_group_price - coupon_discount) / 100}</Text> 拼团券后
                </View>
                {/* <View className="ori-price">
            {(item.min_normal_price + item.coupon_discount) / 100}
          </View> */}
                <View className="amount">
                  已抢{item.sales_tip}件
                </View>
              </View>
            </View>
          })
        }
      </View>
    </View>
  </Fragment>
}
