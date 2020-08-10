import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { View, WebView, Ad } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import { UserState } from '@/redux/reducers/user'
import cn from 'classnames'
import { Dispatch } from 'redux'
import { getExams } from '@/redux/actions/user'
import './index.less'

type PropsFromState = {
  user: UserState
}

type PropsFromDispatch = {
  getExams: typeof getExams
}

type PageOwnProps = {}

type PageState = {
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

class Exam extends Component<IProps, PageState> {
  state: Readonly<PageState> = {
  }

  loading = false

  pageNo = 1

  componentDidShow () {
  }

  onLoad(e) {
    this.getList()
  }
  getList = async () => {
    this.loading = true
    console.log(this.pageNo)
    await this.props.getExams(this.pageNo)
    this.loading = false
  }

  onReachBottom() {
    if (!this.loading) {
      this.pageNo += 1
      this.getList()
    }
  }

  render () {
    const { user: { exams } } = this.props
    return (
      <View className="exam-page">
        {
          exams.map((item, index) => {
            return <Fragment key={item.date + item.course}>
              {index > 0 && exams[index - 1].ending !== exams[index].ending
                && <Ad className="advertising" unitId="adunit-20521f8411ad8419"></Ad>}
              <View className={cn('news-item', { ending: item.ending })}>
                <View className="news-wrapper">
                  <View className="news-message">
                    <View className="flex-box">
                      <View className="date">{item.date}</View>
                      <View className="time">{item.time}</View>
                    </View>
                    <View className="flex-box">
                      <View className="course">{item.course}</View>
                      <View className="dateExtend">{item.dateExtend}</View>
                    </View>
                    <View className="flex-box align-right">
                      <View className="position">{item.position}</View>
                      <View className={cn('info', { 'text-red': item.info === '重考'})}>{item.info}</View>
                    </View>
                  </View>
                </View>
              </View>
            </Fragment>
          })
        }
        {/* <InputD wx:if="{{popDialog}}" :captchaimageprops.sync="captchaImage" :errormsg.sync="errormsg" pagetag="exam"/> */}
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getExams: (...args) => dispatch(getExams(...args)),
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps, mapDispatchToProps)(Exam)
