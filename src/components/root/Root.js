import React, { Component, Fragment } from 'react'
import LandingLayout from '../../layouts/Landing'
import SignUpLayout from '../../layouts/SignUp'
import StudentLayout from '../../layouts/Student'
import TutorLayout from '../../layouts/Tutor'
import Routes from '../../routes/Routes'
// import { Login } from '../Login/Login'
// import { ForgotPassword } from '../Login/ForgotPassword'
// import { ChangePassword } from '../Login/ChangePassword'
import {
  // Route,
  Switch
} from 'react-router-dom'
import * as paths from '../../routes/paths'
//import { withAuthentication } from '../Session'

import Landing from '../landing/Landing'
import Student from '../student/StudentLanding'
import StudentSignup from '../student/signup/index'
import Tutor from '../tutor/TutorLanding'
import TutorConfirm from '../tutor/TutorConfirm'

class Root extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          {/* <LandingLayout history={this.props.history}>
          <Landing/>
        </LandingLayout> */}
          {/* <Route exact path={paths.student} component={()=>Landing}/> */}
          <LandingLayout exact path={paths.landing} component={Landing} />

          <TutorLayout exact path={paths.tutor} component={Tutor} />
          <TutorLayout exact path={paths.tutorconfirm} component={TutorConfirm} />
          
          <StudentLayout exact path={paths.student} component={Student} />
          <SignUpLayout exact path={paths.signup} component={StudentSignup} />

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
        </Switch>
      </Fragment>
    )
  }
}

export default Root//withAuthentication(Root)


// import React, { Component, Fragment } from 'react'
// import LandingLayout from '../../layouts/Landing'
// import StudentLayout from '../../layouts/Student'
// import Routes from '../../routes/Routes'
// // import { Login } from '../Login/Login'
// // import { ForgotPassword } from '../Login/ForgotPassword'
// // import { ChangePassword } from '../Login/ChangePassword'
// import { Route, Switch } from 'react-router-dom'
// import * as paths from '../../routes/paths'
// //import { withAuthentication } from '../Session'
// import Landing from '../landing/Landing'
// import Student from '../student/StudentLanding'

// class Root extends Component {
//   render () {
//     return (
//       <Fragment>
//         <Switch>
//         {/* <LandingLayout history={this.props.history}>
//           <Landing/>
//         </LandingLayout> */}
//         {/* <Route exact path={paths.student} component={()=>Landing}/> */}
//         <LandingLayout path="/" component={Landing}/>
//         {/* <Route exact path={paths.landing} render={() => 
//           <LandingLayout history={this.props.history}>
//             <Landing/>
//           </LandingLayout>}
//         /> */}
//         <LandingLayout path="/" component={Landing}/>
//         <Route exact path={paths.student} render={() => 
//           <StudentLayout history={this.props.history}>
//             <Student/>
//           </StudentLayout>}
//         />

