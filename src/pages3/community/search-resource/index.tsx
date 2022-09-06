import React from 'react'
import { View, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { APIS } from '@/services2'
import { withRequest } from '@/utils'
import { goPage, routes } from '@/utils/router'
import SearchIcon from '@/assets/community-imgs/search.png'
import ResourceItem from '@/components/resource-item'
import './index.less'

const prefix = 'community-search'

type List = GetApiResultType<typeof APIS.ResourceApi.apiResourceSearchGet>

interface IState {
  list: List
  // hasNext: boolean
  keyword: string
}
export default class Search extends React.Component<{}, IState> {
  state: IState = {
    list: [],
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

  fetchData = () => {
    if (this.fetching) {
      return
    }
    this.fetching = true
    this.pageNum = 0

    this.fetchList(true)
  }

  fetchList = async (reset?: boolean) => {
    const { keyword } = this.state
    this.fetching = true
    const api = APIS.ResourceApi.apiResourceSearchGet
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
      list: reset ? res : this.state.list.concat(res)
      // hasNext: res.length === this.pageSize
    })
  }

  render() {
    const { list } = this.state
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
        <View className={`${prefix}-list`}>
          {list.length === 0 ? (
            <View className="community-no-data">暂无内容</View>
          ) : (
            list.map(item => (
              <ResourceItem
                data={item}
                key={item._id}
                onClick={() =>
                  goPage(`${routes.resourceDetail}?id=${item._id}`)
                }
              ></ResourceItem>
            ))
          )}
        </View>
      </View>
    )
  }
}
