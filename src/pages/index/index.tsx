import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'

import './index.less'

type PageStateProps = {
  user: any
}

type PageDispatchProps = {
  add: () => void
  dec: () => void
  asyncAdd: () => any
}

type PageOwnProps = {}

type PageState = {
  a: string,
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

// @connect(({ user }) => ({
//   user
// }))
class Index extends Component<IProps, PageState> {
  state = {
    a: 'fdsf',
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () {
    const a = this.state.a
    console.log(a)
  }

  componentDidHide () { }

  render () {
    console.log(this.props.user)
    return (
      <View className="index">
        <Button className="add_btn" onClick={this.props.add}>+</Button>
        <Button className="dec_btn" onClick={this.props.dec}>-</Button>
        <Button className="dec_btn" onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.user.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default connect(({ user }) => ({ user }), )(Index)

