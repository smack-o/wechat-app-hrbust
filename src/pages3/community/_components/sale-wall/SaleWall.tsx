import React from 'react'
import { Image, View } from '@tarojs/components'
import { getCdnUrl, withRequest } from '@/utils'
import { APIS } from '@/services2'
import { navigateTo } from '@tarojs/taro'
import { routes } from '@/app.config'
import Tab from '../tab'
import { ITabProps } from '../tab/Tab'
import AddSaleWallIcon from '../../imgs/add_sale_wall.png'
import SaleWallItem from '../sale-wall-item'

import './SaleWall.less'

type WallState = {
  list: GetApiResultType<typeof APIS.SaleWallApi.apiSaleWallListGet>
  listLeft: {
    height: number
    list: GetApiResultType<typeof APIS.SaleWallApi.apiSaleWallListGet>
  }
  listRight: {
    height: number
    list: GetApiResultType<typeof APIS.SaleWallApi.apiSaleWallListGet>
  }
  activeTab: number
  hasNext: boolean
}

type WallProps = {}

const prefix = 'sale-wall'

export default class SaleWall extends React.Component<WallProps, WallState> {
  state: WallState = {
    list: [],
    listLeft: {
      height: 0,
      list: []
    },
    listRight: {
      height: 0,
      list: []
    },
    activeTab: 0,
    hasNext: true
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
      api: APIS.SaleWallApi.apiSaleWallListGet
    }
  ]
  // tabList = [
  //   {
  //     key: 'all',
  //     text: '全部',
  //     api: APIS.WallApi.apiWallListGet
  //   },
  //   {
  //     key: 'like',
  //     text: '喜欢',
  //     api: APIS.WallApi.apiWallListLikeGet
  //   },
  //   {
  //     key: 'hot',
  //     text: '最热',
  //     api: APIS.WallApi.apiWallListGet
  //   }
  // ]

  pageNum = 0
  pageSize = 5
  fetching = false

  componentDidMount() {
    this.init()
  }

  init = async () => {
    this.pageNum = 0
    this.fetchList(true)
  }

  fetchList = async (reset?: boolean) => {
    this.fetching = true
    const api = this.tabList[this.state.activeTab].api
    const [err, res] = await withRequest(api)({
      pageNum: '' + this.pageNum,
      pageSize: '' + this.pageSize
    })

    this.fetching = false

    if (err || !res) {
      return
    }

    this.listPush(res, reset)

    this.setState({
      // list: reset ? res : this.state.list.concat(res),
      hasNext: res.length === this.pageSize
    })
  }

  listPush = (list: WallState['list'], reset?: boolean) => {
    let { listLeft, listRight } = this.state
    if (reset) {
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
      const relHeight = (imgHeight / imgWidth) * 100

      console.log(relHeight)

      if (listLeft.height < listRight.height) {
        listLeft.list.push(item)
        listLeft.height += relHeight
      } else {
        listRight.list.push(item)
        listRight.height += relHeight
      }
    })

    this.setState({
      list,
      listLeft,
      listRight
    })
    console.log(listLeft, listRight, list)
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
    this.fetchList()
  }

  onPullDownRefresh = async () => {
    this.init()
  }

  onAddWallClick = () => {
    navigateTo({
      url: routes.createSaleWall
    })
  }

  render() {
    const { activeTab, hasNext } = this.state
    return (
      <View className={prefix}>
        <Tab
          currentIndex={activeTab}
          tabList={this.tabList}
          onChange={this.onTabChange}
        >
          <View className={`${prefix}__list`}>
            {this.state.list.map(item => (
              <SaleWallItem key={item._id} data={item}></SaleWallItem>
            ))}
          </View>
        </Tab>
        <View className={`${prefix}__add-wall`} onClick={this.onAddWallClick}>
          <Image src={AddSaleWallIcon} mode="widthFix"></Image>
        </View>
        {!hasNext && <View>到底了~</View>}
      </View>
    )
  }
}
