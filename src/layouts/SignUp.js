import React, { Component,Fragment } from 'react'
import { Route } from 'react-router-dom'

import SignUpNavigation from '../common/studentNavigation/SignUpNavigation'


class SignUp extends Component {
  rootSubmenuKeys = ['sub1', 'sub2']

  state = {
    collapsed: false,
    openKeys: [],
    visible: false,
    loading: false
  }

  // showModal = () => {
  //   this.setState({
  //     visible: true
  //   })
  // }

  // handleOk = e => {
  //   this.setState(
  //     {
  //       visible: false
  //     },
  //     () => this.handleLogOut()
  //   )
  // }

  // handleCancel = e => {
  //   this.setState({
  //     visible: false
  //   })
  // }

  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   })
  // }

  // handleLogOut = () => {
  //   this.setState({ loading: true })
  //   this.props.amplify.userSignOut(() => {
  //     this.setState({ loading: false }, () => {
  //       localStorage.removeItem('authUser')
  //       this.props.history.push(paths.login)
  //     })
  //   })
  // }

  // onOpenChange = openKeys => {
  //   const latestOpenKey = openKeys.find(
  //     key => this.state.openKeys.indexOf(key) === -1
  //   )
  //   if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
  //     this.setState({ openKeys })
  //   } else {
  //     this.setState({
  //       openKeys: latestOpenKey ? [latestOpenKey] : []
  //     })
  //   }
  // }

  render () {
    // const { loading } = this.state

    const { component: Component, ...rest } = this.props

return (
  <Route {...rest} render={matchProps => (
    <Fragment>
    <SignUpNavigation {...matchProps}/>
    <div className="landing">
      <Component {...matchProps} />
    </div>
    </Fragment>
  )} />
)
    
  }
}

export default SignUp
