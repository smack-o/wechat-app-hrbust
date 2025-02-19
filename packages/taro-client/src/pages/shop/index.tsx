import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { IRootState } from '@/types'
import { pddSearch, getKeywords, generateGoods, getChannel } from '@/services/pdd'
import { AtSearchBar, AtIcon } from 'taro-ui'
import { cError } from '@/utils'
import { routes } from '@/utils/router'
import ItemCard from './_components/ItemCard'

import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>

type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {
  pddList: any[],
  searchValue: string,
  loading: boolean,
  // hotKeywords: string[],
  showScrollBtn: boolean,
  channels: { title: string, goods_list: any[] }[]
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

let interstitialAd: Taro.InterstitialAd

class Index extends Component<IProps, PageState> {
  state: Readonly<PageState> = {
    pddList: [],
    searchValue: '寝室必备',
    loading: false,
    // hotKeywords: [],
    showScrollBtn: false,
    channels: [],
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
    this.getKeywords()
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

    this.getChannels()
    await this.getKeywords()
    this.pddSearch(true)
  }

  getChannels = async () => {
    const [err, res] = await cError(getChannel())
    console.log(res)
    if (!err) {
      this.setState({
        channels: res.data
      })
    }
  }

  getKeywords = async () => {
    const [err, res] = await cError(getKeywords())
    if (!err) {
      this.setState({
        // hotKeywords: res.data,
        searchValue: res.data[0]
      })
    }
  }

  // 打开拼多多小程序
  onPddGoodsClick = async (goods) => {
    // const [] = goods;
    console.log(goods)
    const { search_id, goods_sign } = goods
    const [err, res] = await cError(generateGoods({
      goods_sign,
      // sort_type: 6,
      search_id
    }))

    if (!err) {
      console.log(res)
      const { app_id, page_path } = res.data.we_app_info
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

  goSearch = () => {
    Taro.navigateTo({
      url: routes.pddSearch
    })
  }
  render () {
    const { pddList, loading, channels, showScrollBtn } = this.state

    // if (loading) {
    //   return <Loading loading={loading}></Loading>
    // }

    return (
      <View className="pdd-container">
        <View onClick={this.goSearch}>
          <AtSearchBar
            className="top-bar"
            showActionButton
            value=""
            placeholder="点击搜索～"
            actionName="搜索"
            onActionClick={this.onSearch}
            onChange={this.onSearchChange}
            onConfirm={this.goSearch}
            disabled
          />
        </View>

        {
          channels.map((channel) => {
            return <ItemCard key={channel.title} title={channel.title} list={channel.goods_list} nowrap />
          })
        }



        {/* <View className="channel-title">寝室必备</View>
        {
          loading && <View className="pdd-list-loading">加载中...</View>
        } */}

        <ItemCard title="寝室必备" list={pddList} loading={loading} />


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
  loading: state.global.loading
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps)(Index)
