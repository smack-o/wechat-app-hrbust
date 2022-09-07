import React, { Fragment } from 'react'
import { Image, View, Input, Ad, Text } from '@tarojs/components'
import { loginModal, withRequest } from '@/utils'
import { APIS } from '@/services2'
import Taro from '@tarojs/taro'
import { goPage, routes } from '@/utils/router'
import { AtIcon } from 'taro-ui'
import { connect } from 'react-redux'
import { IRootState } from '@/types'

import SearchIcon from '@/assets/community-imgs/search.png'
import { withShare } from '@/components'
import Tab from '../../components/tab'
import { ITabProps } from '../../components/tab/Tab'
import ResourceItem, {
  ResourceTag,
  resourceInfo
} from '../../components/resource-item'
// import AddWallIcon from '../../imgs/add_wall.png'

import './Resource.less'

type PropsFromState = ReturnType<typeof mapStateToProps>

type ResourceState = {
  list: GetApiResultType<typeof APIS.ResourceApi.apiResourceListGet>
  activeTab: number
  hasNext: boolean
  loading: boolean
  curTagIndex: number
  activeArrow: boolean
}

type ResourceProps = {} & PropsFromState

export class Resource extends React.Component<ResourceProps, ResourceState> {
  pageNum = 0
  pageSize = 20
  fetching = false
  tabList = [] as {
    key: string
    render?: () => React.ReactNode
    api:
      | typeof APIS.ResourceApi.apiResourceListGet
      | typeof APIS.ResourceApi.apiResourceListLikeGet
      | typeof APIS.ResourceApi.apiResourceListHotGet
    api2?: typeof APIS.ResourceApi.apiResourceListTopGet
    text?: string
  }[]

  tagList = [
    {
      key: '',
      text: '全部'
    }
  ].concat(
    Object.keys(resourceInfo).map(key => ({
      key,
      text: resourceInfo[key].name
    }))
  )

  state: ResourceState = {
    list: [],
    activeTab: 0,
    hasNext: true,
    loading: true,
    curTagIndex: 0,
    activeArrow: false
  }

  showAllResource = true

  constructor(props) {
    super(props)
    this.tabList = [
      {
        key: 'all',
        render: () => {
          if (!this.showAllResource) {
            return resourceInfo[ResourceTag.STUDY].name
          }
          return (
            <Text className="resource-tab">
              {this.tagList[this.state.curTagIndex].text}
              <AtIcon
                onClick={e => {
                  e.stopPropagation()
                  this.onShowTagSheet()
                }}
                value="chevron-down"
                size={20}
                className={
                  'resource-tab-icon' +
                  (this.state.activeArrow ? ' resource-tab-icon--active' : '')
                }
              ></AtIcon>
            </Text>
          )
        },
        api: APIS.ResourceApi.apiResourceListGet,
        api2: APIS.ResourceApi.apiResourceListTopGet
      },
      {
        key: 'like',
        text: '喜欢',
        api: APIS.ResourceApi.apiResourceListLikeGet
      },
      {
        key: 'hot',
        text: '最热',
        api: APIS.ResourceApi.apiResourceListHotGet
      }
    ]
  }

  onShowTagSheet = () => {
    this.setState({
      activeArrow: true
    })
    Taro.showActionSheet({
      itemList: this.tagList.map(item => item.text),
      success: res => {
        // console.log(res)
        this.setState({
          // @ts-ignore
          curTagIndex: res.tapIndex
        })
        this.fetchList(true)
        this.setState({
          activeArrow: false
        })
      },
      fail: () => {
        this.setState({
          activeArrow: false
        })
      }
    })
  }

  setStateP = (state: any): Promise<void> =>
    new Promise(resolve => {
      this.setState(state, () => resolve())
    })

  async componentDidShow() {
    try {
      await loginModal()
      Taro.showLoading({
        title: '加载中...'
      })

      await this.props.user.getUserInfoPromise

      if (!this.props.user.config.global?.config?.showAllResource) {
        this.showAllResource = false
        await this.setStateP({
          curTagIndex: 3
        })
      }

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
    Taro.showLoading({
      title: '加载中...'
    })
    this.fetching = true
    let pageNum = String(this.pageNum)
    let pageSize = String(this.pageSize)

    // 刷新当前数据
    if (refresh) {
      pageNum = '0'
      pageSize = String((this.pageNum + 1) * this.pageSize)
    }

    const api = this.tabList[this.state.activeTab].api
    const api2 = this.tabList[this.state.activeTab].api2
    const query: {
      pageNum?: string
      pageSize?: string
      tag?: string
    } = {
      pageNum,
      pageSize
    }

    const tag = this.tagList[this.state.curTagIndex].key

    // tag 筛选
    if (this.state.activeTab === 0 && tag) {
      query.tag = tag
    }

    const fetchList = [withRequest(api)(query)]

    // 置顶逻辑
    if ((reset || refresh) && api2) {
      fetchList.push(
        withRequest(api2)({
          pageNum: '0',
          pageSize: '999'
        })
      )
    }

    const [commonRes, topRes] = await Promise.all(fetchList)

    Taro.hideLoading()
    this.fetching = false

    const [commonErr, commonData] = commonRes

    if (commonErr || !commonData) {
      return Promise.reject()
    }

    let list = [] as ResourceState['list']

    // 置顶逻辑
    if ((reset || refresh) && topRes && !topRes[0] && topRes[1]) {
      list = list.concat(topRes[1])
    }

    if (reset || refresh) {
      list = list.concat(commonData)
    } else {
      list = this.state.list.concat(commonData)
    }

    console.log(list, 'list')

    this.setState({
      list,
      hasNext: commonData.length >= this.pageSize
    })
  }

  onTabChange: ITabProps['onChange'] = async index => {
    if (this.state.activeTab === index) {
      if (index === 0) {
        this.onShowTagSheet()
      }
      return
    }

    if (index === 2 && !this.showAllResource) {
      Taro.showToast({
        title: '维护中，请稍后重试',
        icon: 'none'
      })
      return
    }

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

  onPullDownRefresh = async () => {
    this.init()
    Taro.stopPullDownRefresh()
  }

  // onAddWallClick = () => {
  //   navigateTo({
  //     url: routes.createWall
  //   })
  // }

  render() {
    const { activeTab, loading, list = [] } = this.state

    if (loading) {
      return null
    }

    return (
      <View className="resource">
        <View
          className="resource-search"
          onClick={() => {
            goPage(routes.searchResource)
          }}
        >
          <Image className="resource-search__icon" src={SearchIcon}></Image>
          <Input placeholder="搜索关键词" disabled></Input>
        </View>
        <Tab
          currentIndex={activeTab}
          tabList={this.tabList}
          onChange={this.onTabChange}
          canClickSameTab
        >
          {list.length === 0 ? (
            <View className="community-no-data">暂无内容</View>
          ) : (
            list.map((item, index) => {
              return (
                <Fragment key={item._id}>
                  <ResourceItem
                    showHotComments
                    data={item}
                    onClick={() =>
                      goPage(`${routes.resourceDetail}?id=${item._id}`)
                    }
                    showTop={activeTab === 0}
                  ></ResourceItem>
                  {index !== 0 && index % 5 === 0 && (
                    <View className="wall-ad">
                      {/* <Ad
                        className="advertising"
                        unitId="adunit-2d76930b51ac0dbe"
                      ></Ad> */}
                      {/* @ts-ignore */}
                      <c-ad></c-ad>
                    </View>
                  )}
                </Fragment>
              )
            })
          )}
        </Tab>
        {/* <View className="wall__add-wall" onClick={this.onAddWallClick}></View> */}
        {/* {!hasNext && <View>到底了~</View>} */}
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user
})

export default connect<PropsFromState, {}, ResourceProps>(mapStateToProps)(
  withShare({
    title: '理工喵儿，资源分享专区'
  })(Resource)
)
