import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { View, Text, Ad } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import { AtButton, AtInput, AtTimeline } from 'taro-ui'
import request from '@/utils/request'
import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>

type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {
  id: string
  password: string
  yingxinData?: {
    getStudentInformat: {
      XM: string
      UNIT_NAME: string
      MAJOR_NAME: string
      KSH: string
      CLASS_NAME: string
      XH: string
      COUN_XM: string
      COUN_TEL: string
      ROOM_NAME: string
    }
    getPayment: {
      PRICE: string
    }[]
  }
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

class YingXin extends Component<IProps, PageState> {
  state: Readonly<PageState> = {
    id: '',
    password: '',
    yingxinData: undefined
    // yingxinData: {
    //   getStudentInformat: {
    //     XM: 100,
    //     UNIT_NAME: 200,
    //     MAJOR_NAME: 300,
    //     KSH: 400,
    //     CLASS_NAME: 500,
    //     XH: 500,
    //     COUN_XM: 500,
    //     COUN_TEL: 500,
    //     ROOM_NAME: 500,
    //   },
    //   getPayment: [{
    //     PRICE: 600,
    //   }, {
    //   PRICE: 600,
    // }]
  }

  componentDidShow() {}

  onLoad() {
    const storageData = Taro.getStorageSync('yingxin:data')
    if (storageData) {
      const { id, password } = JSON.parse(storageData)
      this.setState({
        id,
        password
      })
    }
  }

  onInputChange = (key: keyof PageState, value) => {
    const state = {
      [key]: value
    } as PageState
    this.setState(state)
  }

  onConfirm = () => {
    const { id, password } = this.state
    let msg = ''
    if (!id) {
      msg = '请输14位考生号'
    }
    if (!password) {
      msg = '请输入密码'
    }
    if (msg) {
      Taro.showToast({
        title: '请输入密码',
        icon: 'none',
        duration: 1000
      })
      return
    }
    this.getYingxin(id, password)
  }

  getYingxin = (id: string, password: string) => {
    const data = { id, password }

    Taro.setStorageSync('yingxin:data', JSON.stringify(data))

    Taro.showLoading({
      title: '加载中...'
    })

    return request({
      url: '/api/yingxin',
      data
    })
      .then(res => {
        Taro.hideLoading()

        if (res?.data?.data?.length > 0) {
          this.setState({
            yingxinData: res?.data?.data || {}
          })
        } else {
          this.showError()
        }
      })
      .catch(() => {
        Taro.hideLoading()

        this.showError()
      })
  }

  showError = () => {
    Taro.showModal({
      title: '查询失败',
      content: '请检查14位考生号和6位身份证尾号是否正确，再重新查询~',
      showCancel: false
    })
  }

  render() {
    const { yingxinData, id, password } = this.state

    return (
      <View className="yingxin-page">
        {!yingxinData && (
          <Fragment>
            <View className="input-container">
              <AtInput
                name="id"
                title="考生号"
                type="text"
                placeholder="请输入考生号"
                value={id}
                onChange={e => this.onInputChange('id', e)}
                focus
              ></AtInput>
              <AtInput
                name="password"
                title="密码"
                type="text"
                placeholder="密码(初始身份证后六位)"
                value={password}
                onChange={e => this.onInputChange('password', e)}
              ></AtInput>
              <View className="info-wrapper">
                <View className="info">
                  *注1：登录用户名为14位考生号，14位考生号为(年份(2位)+省份代码(2位)+10位考生号)，例如黑龙江省考生需在10位考生号前加(1923)。
                </View>
                <View className="info">
                  *注2：初始密码为身份证号后六位（如最后一位X，需要大写）。
                </View>
              </View>
              <AtButton
                className="button"
                type="primary"
                onClick={this.onConfirm}
              >
                查询
              </AtButton>
              <Ad className="advertising" unitId="adunit-2d76930b51ac0dbe"></Ad>
            </View>
          </Fragment>
        )}

        {yingxinData && (
          <Fragment>
            <View className="title">新生信息</View>
            <View className="info-wrapper">
              <View className="info">
                更多信息（在线缴费等）请浏览器访问{' '}
                <Text userSelect>http://yingxin.hrbust.edu.cn</Text> 查看
              </View>
            </View>

            <AtTimeline
              className="time-line"
              items={[
                {
                  title: '姓名',
                  content: [yingxinData.getStudentInformat.XM],
                  icon: 'stop'
                },
                {
                  title: '专业',
                  content: [
                    `学院：${yingxinData.getStudentInformat.UNIT_NAME}`,
                    `专业：${yingxinData.getStudentInformat.MAJOR_NAME}`
                  ],
                  icon: 'stop'
                },
                {
                  title: '考生号',
                  content: [yingxinData.getStudentInformat.KSH],
                  icon: 'stop'
                },
                {
                  title: '班级',
                  content: [yingxinData.getStudentInformat.CLASS_NAME],
                  icon: 'stop'
                },
                {
                  title: '学号',
                  content: [yingxinData.getStudentInformat.XH],
                  icon: 'stop'
                },
                {
                  title: '辅导员',
                  content: [
                    `姓名：${yingxinData.getStudentInformat.COUN_XM}`,
                    `电话：${yingxinData.getStudentInformat.COUN_TEL}`
                  ],
                  icon: 'stop'
                },
                {
                  title: '寝室',
                  content: [yingxinData.getStudentInformat.ROOM_NAME],
                  icon: 'stop'
                },
                {
                  title: '寝室',
                  content: [yingxinData.getStudentInformat.ROOM_NAME],
                  icon: 'stop'
                },
                {
                  title: '学费',
                  content: [
                    `学费：${yingxinData.getPayment[0].PRICE}元`,
                    `住宿费：${yingxinData.getPayment[1].PRICE}元`
                  ],
                  icon: 'stop'
                }
              ]}
            ></AtTimeline>
          </Fragment>
        )}
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(
  mapStateToProps
)(YingXin)
