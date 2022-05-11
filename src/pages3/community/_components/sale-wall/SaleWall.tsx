import React from 'react'
import { Image, View } from '@tarojs/components'
import { loginModal, withRequest } from '@/utils'
import { APIS } from '@/services2'
import Taro, { navigateTo } from '@tarojs/taro'
import { routes } from '@/app.config'
import Tab from '../tab'
import { ITabProps } from '../tab/Tab'
import AddSaleWallIcon from '../../imgs/add_sale_wall.png'
import SaleWallItem from '../sale-wall-item'

import './SaleWall.less'

type List = GetApiResultType<typeof APIS.SaleWallApi.apiSaleWallListGet>

type WallState = {
  listLeft: {
    height: number
    list: List
  }
  listRight: {
    height: number
    list: List
  }
  activeTab: number
  hasNext: boolean
  loading: boolean
}

type WallProps = {}

const prefix = 'sale-wall'

export default class SaleWall extends React.Component<WallProps, WallState> {
  state: WallState = {
    listLeft: {
      height: 0,
      list: []
    },
    listRight: {
      height: 0,
      list: []
    },
    activeTab: 0,
    hasNext: true,
    loading: true
  }

  tabList = [
    {
      key: 'all',
      text: '全部',
      api: APIS.SaleWallApi.apiSaleWallListGet
    },
    {
      key: 'like',
      text: '喜欢',
      api: APIS.SaleWallApi.apiSaleWallListLikeGet
    },
    {
      key: 'hot',
      text: '最热',
      api: APIS.SaleWallApi.apiSaleWallListHotGet
    }
  ]

  pageNum = 0
  pageSize = 20
  fetching = false

  // 重新进入页面时，需要重新获取数据
  onShow = () => {
    if (
      this.state.listLeft.list.length === 0 &&
      this.state.listRight.list.length === 0
    ) {
      return
    }
    this.fetchList(false, true)
  }

  async componentDidMount() {
    try {
      Taro.showLoading({
        title: '加载中...'
      })
      await loginModal()
      await this.init()
      this.setState({
        loading: false
      })
      Taro.hideLoading()
    } catch (error) {
      Taro.hideLoading()
    }
  }

  init = async () => {
    this.pageNum = 0
    await this.fetchList(true)
  }

  fetchList = async (reset?: boolean, refresh?: boolean) => {
    this.fetching = true
    let pageNum = String(this.pageNum)
    let pageSize = String(this.pageSize)

    // 刷新当前数据
    if (refresh) {
      pageNum = '0'
      pageSize = String((this.pageNum + 1) * this.pageSize)
    }

    const api = this.tabList[this.state.activeTab].api
    const [err, res] = await withRequest(api)({
      pageNum,
      pageSize
    })

    this.fetching = false

    if (err || !res) {
      return Promise.reject()
    }

    this.listPush(res, reset, refresh)

    this.setState({
      hasNext: res.length >= this.pageSize
    })
  }

  /**
   * 瀑布流高度计算
   * @param list
   * @param reset
   */
  listPush = (list: List, reset?: boolean, refresh?: boolean) => {
    let { listLeft, listRight } = this.state
    if (reset || refresh) {
      listLeft = {
        height: 0,
        list: []
      }
      listRight = {
        height: 0,
        list: []
      }
    }

    list.forEach(item => {
      const imgHeight = item.photos?.[0]?.height || 400
      const imgWidth = item.photos?.[0]?.width || 400
      // 拉齐到同一宽度对比高度
      const relHeight = (imgHeight / imgWidth) * 100

      if (listLeft.height <= listRight.height) {
        listLeft.list.push(item)
        listLeft.height += relHeight
      } else {
        listRight.list.push(item)
        listRight.height += relHeight
      }
    })

    this.setState({
      listLeft,
      listRight
    })
  }

  onTabChange: ITabProps['onChange'] = async index => {
    this.setState(
      {
        activeTab: index
      },
      () => {
        this.init()
      }
    )
  }

  onReachBottom = () => {
    if (!this.state.hasNext || this.fetching) {
      return
    }
    this.pageNum++
    return this.fetchList().catch(() => {
      this.pageNum--
    })
  }

  onPullDownRefresh = async () => this.init()

  onAddWallClick = () => {
    navigateTo({
      url: routes.createSaleWall
    })
  }

  render() {
    const { activeTab, listLeft, listRight, loading } = this.state

    if (loading) {
      return null
    }

    return (
      <View className={prefix}>
        <Tab
          currentIndex={activeTab}
          tabList={this.tabList}
          onChange={this.onTabChange}
        >
          {listLeft.list.length === 0 && listRight.list.length === 0 ? (
            <View className="community-no-data">暂无内容</View>
          ) : (
            <View className={`${prefix}__list`}>
              <View className={`${prefix}__list-column`}>
                {listLeft.list.map(item => (
                  <SaleWallItem key={item._id} data={item}></SaleWallItem>
                ))}
              </View>
              <View className={`${prefix}__list-column`}>
                {listRight.list.map(item => (
                  <SaleWallItem key={item._id} data={item}></SaleWallItem>
                ))}
              </View>
            </View>
          )}
        </Tab>
        <View className={`${prefix}__add-wall`} onClick={this.onAddWallClick}>
          <Image src={AddSaleWallIcon} mode="widthFix"></Image>
        </View>
        {/* {!hasNext && <View>到底了~</View>} */}
      </View>
    )
  }
}
