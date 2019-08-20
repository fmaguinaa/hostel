import React, { Component, Fragment } from 'react'
import Routes from '../../routes/Routes'
// import {
//   Route,
//   Switch
// } from 'react-router-dom'
// import * as paths from '../../routes/paths'

// import Landing from '../landing/Landing'
import Footer from '../../common/footer/Footer'
import Header from '../../common/header/Header'


export default class Root extends Component {
  render() {
    return (
      <Fragment>
        <div className='layout'>
        <Header />

        {/* <Switch> */}
        {/* <LandingLayout history={this.props.history}>
          <Landing/>
        </LandingLayout> */}
        {/* <Route exact path={paths.student} component={()=>Landing}/> */}
        {/* <LandingLayout exact path={paths.landing} component={Landing} /> */}
        {/* <Route exact path={paths.landing} component={()=>Landing}/> */}


        {/* <Route exact path={paths.student} render={() => 
          <StudentLayout history={this.props.history}>
            <Student/>
          </StudentLayout>}
        /> */}
        {/* <Route exact path={paths.tutor} render={() => 
          <TutorLayout history={this.props.history}>
            <Tutor/>
          </TutorLayout>}
        /> */}

        {/* <Route exact path={paths.landing} component={Landing}/> */}
        {/* <Route exact path={paths.login} component={Login}/>
          <Route exact path={paths.recuperar} component={ForgotPassword}/>
          <Route exact path={paths.recuperacion} component={ChangePassword}/> */}
        {/* <LandingLayout history={this.props.history}>
            <Routes/>
          </LandingLayout> */}
        <Routes />
        {/* </Switch> */}
        <Footer />
        </div>
      </Fragment>
    )
  }
}

