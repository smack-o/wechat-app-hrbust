import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView } from '@tarojs/components'
import { IRootState } from '@/types'
import { getExams } from '@/redux/actions/user'
import { CommonState } from '@/redux/reducers/common'

import './index.less'

type PropsFromState = {
  rooms: CommonState['classrooms']
}

type PropsFromDispatch = {
  getExams: typeof getExams
}

type PageOwnProps = {
  changeLoading: (boolean) => void
}

type PageState = {
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

class Classrooms extends Component<IProps, PageState> {
  state: Readonly<PageState> = {
  }

  roomTitles = [
    {
      title: '可用教室',
      class: 'room'
    },
    {
      title: '教室类型',
      class: 'type'
    },
    {
      title: '教室容量',
      class: 'amount'
    },
    {
      title: '第一大节'
    },
    {
      title: '第二大节'
    },
    {
      title: '第三大节'
    },
    {
      title: '第四大节'
    },
    {
      title: '第五大节'
    },
    {
      title: '第六大节'
    }
  ]

  render () {
    const { rooms } = this.props

    if (rooms.length === 0) {
      return <View className="rooms-empty">没有查询到空教室</View>
    }

    return (
      <View className="classrooms-page">
        <View className="grade-title-list">
          <View
            className="title-row list-row-title"
            style="background-color: #fff;"
          >
            <View className="list-item room">
              <Text className="list-text" >{this.roomTitles[0].title}</Text>
            </View>
          </View>
          {
            rooms.map((item, index) => {
              return <View
                className={`title-row ${index % 2 === 0 ? 'list-row-even' : 'list-row-odd'}`}
                style="color: #333333"
                key={item.id}
              >
                <View className="list-item room">
                  <text className="list-text" >{item.room}</text>
                </View>
              </View>
            })
          }
        </View>
        <ScrollView scrollX className="grade-list">
          <View className="list-row list-row-odd list-row-title">
            {
              this.roomTitles.map((item, index) => {
                return <View className={`list-item ${this.roomTitles[index].class || 'info'}`} key={item.title}>
                  <text className="list-text" >{this.roomTitles[index].title}</text>
                </View>
              })
            }
          </View>
          {
            rooms.map((room, index) => {
              return <View
                className={`list-row ${index % 2 === 0 ? 'list-row-even' : 'list-row-odd'}`}
                style="color: #333333"
                key={room.id}
              >
                <View
                  className={`list-item room ${index % 2 === 0 ? 'list-row-even' : 'list-row-odd'}`}
                >
                  <text className="list-text">{room.room}</text>
                </View>
                <View className="list-item type">
                  <text className="list-text" >{room.roomType}</text>
                </View>
                <View className="list-item amount">
                  <text className="list-text" >{room.seatAmount}</text>
                </View>
                {
                  room.infoList.map((info) => {
                    return <View className="list-item info" key={info.id}>
                      <View className={`info-item info-item-${info === 0 ? 'green' : 'red'}`}>
                        {info === 0 ? '可用' : '占用'}
                      </View>
                    </View>
                  })
                }
              </View>
            })
          }
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  rooms: state.common.classrooms,
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps)(Classrooms)
