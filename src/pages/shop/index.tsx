import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Taro from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { getBanner } from '@/redux/actions/common'
import { IRootState } from '@/types'
import { pddSearch, getKeywords } from '@/services/pdd'
import { AtSearchBar, AtIcon } from 'taro-ui'
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
  loading: boolean,
  hotKeywords: string[],
  showScrollBtn: boolean
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

let interstitialAd: Taro.InterstitialAd

class Index extends Component<IProps, PageState> {
  state: Readonly<PageState> = {
    pddList: [],
    searchValue: '',
    loading: false,
    hotKeywords: [],
    showScrollBtn: false
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

  // 搜索商品接口
  pddSearch = async (reset = false) => {
    // 是否需要重置 list
    if (reset) {
      this.pageNo = 1
      this.scrollToTop()

      // Taro 渲染有bug，所以这种情况只能重新渲染 loading dom
      this.setState({
        loading: true
      })
    }
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
      // sort_type: 6,
    }))

    Taro.hideLoading()
    this.loading = false
    this.setState({
      loading: false
    })
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

    this.pddSearch(true)
    this.getKeywords()
  }

  getKeywords = async () => {
    const [err, res] = await cError(getKeywords())
    if (!err) {
      this.setState({
        hotKeywords: res.data,
        searchValue: res.data[0]
      })
    }
  }

  // 打开拼多多小程序
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

  // 搜索变更
  onSearchChange = (value) => {
    // 搜索条件变更需要重置页码
    this.setState({
      searchValue: value,
    })
  }

  // 点击搜索
  onSearch = () => {
    this.pddSearch(true)
  }

  // 上拉加载
  onReachBottom() {
    this.pddSearch()
  }

  // 用户点击热门搜索
  onHotKeyClick = (value) => {
    this.setState({
      searchValue: value
    }, () => {
      this.pddSearch(true)
    })
  }

  scrollToTop = () => {
    Taro.pageScrollTo({
      scrollTop: 0,
    })
  }

  // 监听滚动事件
  onPageScroll = (e) => {
    const { showScrollBtn } = this.state
    if (e.scrollTop >= 200) {
      !showScrollBtn && this.setShowScrollBtn(true)
    } else {
      showScrollBtn && this.setShowScrollBtn(false)
    }
  }

  setShowScrollBtn = (show: boolean) => this.setState({ showScrollBtn: show })

  render () {
    const { pddList, loading, searchValue, hotKeywords, showScrollBtn } = this.state

    // if (loading) {
    //   return <Loading loading={loading}></Loading>
    // }

    return (
      <View className="pdd-container">
        <AtSearchBar
          className="top-bar"
          showActionButton
          value={searchValue}
          actionName="搜索"
          onActionClick={this.onSearch}
          onChange={this.onSearchChange}
          onConfirm={this.onSearch}
        />
        {
          hotKeywords.length > 0 && <View>
            <View className="hot-keywords">
              <View className="title">热门搜索：</View>
              <ScrollView scrollX>
                <View className="list">
                  {
                    hotKeywords.map((item) => {
                      return <View className="item" key={item} onClick={() => this.onHotKeyClick(item)}>
                        {item}
                      </View>
                    })
                  }
                </View>
              </ScrollView>
            </View>
          </View>
        }
        {
          loading && <View className="pdd-list-loading">加载中...</View>
        }
        {
          !loading && <View className="pdd-wrapper">
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
        }
        {/* 回到顶部 */}
        {
          showScrollBtn && <View className="scroll-top-button" onClick={this.scrollToTop}>
            <AtIcon className="arrow-up" value="chevron-up" size="30" color="#333333"></AtIcon>
          </View>
        }
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
