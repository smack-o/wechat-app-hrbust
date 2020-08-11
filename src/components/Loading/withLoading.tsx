import React, { Component, Fragment } from 'react'
import Loading from '.'

export default function withLoading(WrappedComponent) {
  return class extends Component {
    state = {
      loading: false
    }

    changeLoading = (loading: boolean) => {
      this.setState({
        loading,
      })
    }

    render() {
      const { loading } = this.state
      return <Fragment>
        <Loading loading={loading}></Loading>
        <WrappedComponent {...this.props} changeLoading={this.changeLoading} />
      </Fragment>
    }
  }
}
