import React from 'react'
import Loadable from 'react-loadable'
import { LoadingPage } from '../components/utils'

/*<Route exact path='/'             component={ Landing } />
          <Route exact path='/login'        component={ Authorization } />
          <Route exact path='/verification' component={ Verification } />
          <Route exact path='/dashboard'    component={ Dashboard } />
          <Route exact path='/session'      component={ Session } />
          <Route exact path='/connection'   component={ Connection } />
          <Route exact path='/courses'      component={ Courses } />
          <Route path='/register/:mode' component={ Registration } />
*/
export const Landing = Loadable({
  loader: () => import('../components/landing/Landing'),
  loading () {
    return <LoadingPage/>
  }
})

export const Student = Loadable({
  loader: () => import('../components/student/StudentLanding'),
  loading () {
    return <LoadingPage/>
  }
})

export const Tutor = Loadable({
  loader: () => import('../components/tutor/TutorLanding'),
  loading () {
    return <LoadingPage/>
  }
})