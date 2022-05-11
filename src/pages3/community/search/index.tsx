import React from 'react'
import { View, Image, Input } from '@tarojs/components'
import { AtTag } from 'taro-ui'
import Taro from '@tarojs/taro'
import { APIS } from '@/services2'
import { withRequest } from '@/utils'
import { goPage, routes } from '@/utils/router'
import WallItem from '../_components/wall-item'
import SearchIcon from '../imgs/search.png'
import './index.less'
import SaleWallItem from '../_components/sale-wall-item'

const prefix = 'community-search'

enum TagType {
  brick = 'brick',
  mate = 'mate',
  comment = 'comment'
}

type BrickList = GetApiResultType<typeof APIS.WallApi.apiWallListGet>
type MateList = GetApiResultType<typeof APIS.SaleWallApi.apiSaleWallListGet>

interface IState {
  tag: TagType
  brickList: BrickList
  mateList: MateList
  // hasNext: boolean
  keyword: string
}
export default class Search extends React.Component<{}, IState> {
  state: IState = {
    tag: TagType.brick,
    brickList: [],
    mateList: [],
    // hasNext: true,
    keyword: ''
  }

  pageNum = 0
  pageSize = 20
  fetching = false

  onPullDownRefresh = () => {}

  onKeywordChange = e => {
    this.setState({
      keyword: e.detail.value
    })
  }

  setTag = (tag: TagType) => {
    if (tag === TagType.comment) {
      Taro.showToast({
        title: '评论搜索暂未开放',
        icon: 'none'
      })
      return
    }
    if (this.fetching) {
      return
    }
    this.pageNum = 0
    this.setState({ tag }, () => {
      if (this.state.keyword.trim()) {
        this.fetchData()
      }
    })
  }

  fetchData = () => {
    const { tag } = this.state
    if (this.fetching) {
      return
    }
    this.fetching = true
    this.pageNum = 0
    if (tag === TagType.brick) {
      this.fetchBrickList(true)
    } else if (tag === TagType.mate) {
      this.fetchMateList(true)
    }
  }

  fetchBrickList = async (reset?: boolean) => {
    const { keyword } = this.state
    this.fetching = true
    const api = APIS.WallApi.apiWallSearchGet
    const [err, res] = await withRequest(api)({
      pageNum: '' + this.pageNum,
      pageSize: '' + this.pageSize,
      keyword
    })

    this.fetching = false

    if (err || !res) {
      return
    }

    if (this.pageNum === 0 && res.length === 0) {
      Taro.showToast({
        title: '没有搜索到内容',
        icon: 'none'
      })
    }

    this.setState({
      brickList: reset ? res : this.state.brickList.concat(res),
      mateList: []
      // hasNext: res.length === this.pageSize
    })
  }

  fetchMateList = async (reset?: boolean) => {
    const { keyword } = this.state
    this.fetching = true
    const api = APIS.SaleWallApi.apiSaleWallSearchGet
    const [err, res] = await withRequest(api)({
      pageNum: '' + this.pageNum,
      pageSize: '' + this.pageSize,
      keyword
    })

    this.fetching = false

    if (err || !res) {
      return
    }

    if (this.pageNum === 0 && res.length === 0) {
      Taro.showToast({
        title: '没有搜索到内容',
        icon: 'none'
      })
    }

    this.setState({
      mateList: reset ? res : this.state.mateList.concat(res),
      brickList: []
      // hasNext: res.length === this.pageSize
    })
  }

  render() {
    const { tag } = this.state
    return (
      <View className={prefix}>
        <View className={`${prefix}-input`}>
          <Image className={`${prefix}-input__icon`} src={SearchIcon}></Image>
          <Input
            confirmType="search"
            onInput={this.onKeywordChange}
            placeholder="搜索关键词"
            onConfirm={this.fetchData}
            autoFocus
          ></Input>
        </View>
        <View className={`${prefix}-tags`}>
          <AtTag
            type="primary"
            active={tag === TagType.brick}
            onClick={() => this.setTag(TagType.brick)}
          >
            表白墙
          </AtTag>
          <AtTag
            type="primary"
            active={tag === TagType.mate}
            onClick={() => this.setTag(TagType.mate)}
          >
            卖舍友
          </AtTag>
          <AtTag
            type="primary"
            active={tag === TagType.comment}
            onClick={() => this.setTag(TagType.comment)}
          >
            评论
          </AtTag>
        </View>
        <View className={`${prefix}-list`}>
          {tag === TagType.brick && this.state.brickList.length === 0 ? (
            <View className="community-no-data">暂无内容</View>
          ) : (
            this.state.brickList.map(item => (
              <WallItem
                data={item}
                key={item._id}
                onClick={() => goPage(`${routes.wallDetail}?id=${item._id}`)}
              ></WallItem>
            ))
          )}

          {tag === TagType.mate && this.state.mateList.length === 0 ? (
            <View className="community-no-data">暂无内容</View>
          ) : (
            <View className={`${prefix}__sale-wall-list`}>
              {this.state.mateList.map(item => (
                <SaleWallItem data={item} key={item._id}></SaleWallItem>
              ))}
            </View>
          )}
        </View>
      </View>
    )
  }
}
