import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { getBanner } from '@/redux/actions/common'
import { IRootState } from '@/types'
import { Loading } from '@/components'
import { pddSearch } from '@/services/pdd'
import { AtSearchBar } from 'taro-ui'
import { cError } from '@/utils'

import './index.less'

type PropsFromState = {
  loading: IRootState['global']['loading']
}

type PropsFromDispatch = {
  getBanner: typeof getBanner
}

type PageOwnProps = {}

type PageState = {
  pddList: any[],
  searchValue: string,
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

let interstitialAd: Taro.InterstitialAd

class Index extends Component<IProps, PageState> {
  state: Readonly<PageState> = {
    pddList: [],
    searchValue: '寝室神器'
  }

  pageNo = 1
  loading = false

  async componentDidShow () {
    // // 在适合的场景显示插屏广告
    // if (interstitialAd) {
    //   interstitialAd.show().catch((err) => {
    //     console.log(err)
    //   })
    // }

    // this.pddSearch()
  }

  pddSearch = async () => {
    if (this.loading) {
      return
    }
    Taro.showLoading({
      title: '加载中'
    })
    this.loading = true
    const [err, res] = await cError(pddSearch({
      page: this.pageNo,
      keyword: this.state.searchValue,
    }))
    Taro.hideLoading()
    this.loading = false
    if (!err) {
      const list = res.data || []
      this.setState({
        pddList: this.pageNo === 1 ? list : [...this.state.pddList, ...list]
      })
      this.pageNo += 1
    }
  }

  componentDidHide () { }

  async onLoad() {
    // 在页面onLoad回调事件中创建插屏广告实例
    // 插屏广告
    if (Taro.createInterstitialAd) {
      interstitialAd = Taro.createInterstitialAd({
        adUnitId: 'adunit-167f2a17e8f9ecc4'
      })
      interstitialAd.onLoad(() => { console.log('adload') })
      interstitialAd.onError((error) => { console.log('aderror:', error) })
      interstitialAd.onClose(() => { console.log('adclose') })
    }

    this.pddSearch()
  }

  onPddGoodsClick = (goods) => {
    const { we_app_info: { app_id, page_path } } = goods
    console.log(app_id, page_path)
    Taro.navigateToMiniProgram({
      appId: app_id,
      path: page_path,
      // extraData: {
      //   foo: 'bar'
      // },
      // envVersion: 'develop',
      success(res) {
        // 打开成功
      }
    })
  }

  onSearchChange = (value) => {
    // 搜索条件变更需要重置页码
    this.pageNo = 1
    this.setState({
      searchValue: value,
    })
  }

  onSearch = () => {
    this.pddSearch()
  }

  // 上拉加载
  onReachBottom() {
    this.pddSearch()
  }


  render () {
    const { pddList, loading, searchValue } = this.state

    if (loading) {
      return <Loading loading={loading}></Loading>
    }

    return (
      <View className="pdd-container">
        <AtSearchBar
          showActionButton={false}
          value={searchValue}
          actionName="搜索"
          onActionClick={this.onSearch}
          onChange={this.onSearchChange}
        />
        <View className="pdd-wrapper">
          <View className="pdd-list">
            {
              pddList.map((item) => {
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
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
  banners: state.common.banners,
  loading: state.global.loading
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getBanner: () => dispatch(getBanner()),
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps, mapDispatchToProps)(Index)
