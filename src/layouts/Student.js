import React, { Component } from 'react'
//import { Dropdown, Icon, Layout, Menu, Modal } from 'antd'
// import { Link, withRouter } from 'react-router-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faShip } from '@fortawesome/free-solid-svg-icons'
// import { ReactComponent as Logo } from './logo.svg'
// import { ReactComponent as MiniLogo } from '../logo.svg'
// import logo from '../logo.png'
//import minilogo from './logo.png'
// import * as paths from '../routes/paths'
//import { withAmplify } from '../auth'
//import { compose } from 'recompose'
//import { AuthUserContext, withAuthorization } from '../components/Session'
//import { hasUserPermissions } from '../utils/utils'
import { Route } from 'react-router-dom'

//const { Header, Sider, Content } = Layout
//const { SubMenu } = Menu
import StudentNavigation from '../common/studentNavigation/StudentNavigation'
import Footer from '../common/footer/Footer'


class LayoutBase extends Component {
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
        <div className="student">
          <StudentNavigation {...matchProps}/>
          <Component {...matchProps} />
          <Footer {...matchProps}/>
        </div>
      )} />
    )
      //Landing
      // <AuthUserContext.Consumer>
      //   {authUser => (
          // <Layout className='layout-container'>
          //   <Sider
          //     trigger={null}
          //     collapsible
          //     className='sidebar-container'
          //     collapsed={this.state.collapsed}
          //   >
          //     <div className='app-logo'>
          //       {this.state.collapsed ? (
          //         <img src={logo} alt='mini-logo' />
          //       ) : (
          //         <img src={minilogo} alt='logo' />
          //       )}
          //     </div>
          //     <Menu
          //       mode='inline'
          //       openKeys={this.state.openKeys}
          //       selectedKeys={[this.props.location.pathname]}
          //       onOpenChange={this.onOpenChange}
          //     >
          //       <Menu.Item className='sidebar-item' key='/dashboard'>
          //         <Link to='/dashboard'>
          //           <Icon type='pie-chart' />
          //           <span>Dashboard</span>
          //         </Link>
          //       </Menu.Item>
          //       <Menu.Item className='sidebar-item' key='/reservas'>
          //         <Link to='/reservas'>
          //           <Icon type='book' />
          //           <span>Reservas</span>
          //         </Link>
          //       </Menu.Item>
          //       <Menu.Item className='sidebar-item' key='/encomiendas'>
          //         <Link to='/encomiendas'>
          //           <Icon type='shopping-cart' />
          //           <span>Encomiendas</span>
          //         </Link>
          //       </Menu.Item>
          //       <Menu.Item className='sidebar-item' key='/viajes'>
          //         <Link to='/viajes'>
          //           <Icon type='export' />
          //           <span>Viajes</span>
          //         </Link>
          //       </Menu.Item>
          //       {hasUserPermissions(
          //         ['ADMINISTRADOR', 'SUPERVISOR', 'VENDEDOR', 'CONTROLADOR'],
          //         authUser.role
          //       ) && (
          //         <Menu.Item className='sidebar-item' key='/solicitudes'>
          //           <Link to='/solicitudes'>
          //             <Icon type='form' />
          //             <span>Solicitudes</span>
          //           </Link>
          //         </Menu.Item>
          //       )}
          //       {hasUserPermissions(['ADMINISTRADOR'], authUser.role) && (
          //         <Menu.Item className='sidebar-item' key='/cupones'>
          //           <Link to='/cupones'>
          //             <Icon type='tag' />
          //             <span>Cupones</span>
          //           </Link>
          //         </Menu.Item>
          //       )}
          //       <SubMenu
          //         className='sidebar-submenu'
          //         key='sub1'
          //         title={
          //           <span>
          //             <Icon type='audit' />
          //             <span>Operadores</span>
          //           </span>
          //         }
          //       >
          //         <Menu.Item
          //           className='sidebar-item'
          //           key='/operadores/sucursales'
          //         >
          //           <Link to='/operadores/sucursales'>
          //             <span>
          //               <Icon type='shop' />
          //               <span>Sucursales</span>
          //             </span>
          //           </Link>
          //         </Menu.Item>
          //         {hasUserPermissions(
          //           ['ADMINISTRADOR', 'CONTROLADOR'],
          //           authUser.role
          //         ) && (
          //           <Menu.Item
          //             className='sidebar-item'
          //             key='/operadores/usuarios'
          //           >
          //             <Link to='/operadores/usuarios'>
          //               <span>
          //                 <Icon type='team' />
          //                 <span>Usuarios</span>
          //               </span>
          //             </Link>
          //           </Menu.Item>
          //         )}
          //       </SubMenu>
          //       <SubMenu
          //         className='sidebar-submenu'
          //         key='sub2'
          //         title={
          //           <span>
          //             <Icon type='tool' />
          //             <span>Administrador</span>
          //           </span>
          //         }
          //       >
          //         <Menu.Item
          //           className='sidebar-item'
          //           key='/administrador/clientes'
          //         >
          //           <Link to='/administrador/clientes'>
          //             <span>
          //               <Icon type='team' />
          //               <span>Clientes</span>
          //             </span>
          //           </Link>
          //         </Menu.Item>
          //         {hasUserPermissions(
          //           ['ADMINISTRADOR', 'CONTROLADOR'],
          //           authUser.role
          //         ) && (
          //           <Menu.Item
          //             className='sidebar-item'
          //             key='/administrador/embarcaciones'
          //           >
          //             <Link to='/administrador/embarcaciones'>
          //               <span>
          //                 <FontAwesomeIcon
          //                   icon={faShip}
          //                   style={{ marginRight: 6 }}
          //                 />
          //                 <span>Embarcaciones</span>
          //               </span>
          //             </Link>
          //           </Menu.Item>
          //         )}
          //         <Menu.Item
          //           className='sidebar-item'
          //           key='/administrador/paradas'
          //         >
          //           <Link to='/administrador/paradas'>
          //             <span>
          //               <Icon type='bank' />
          //               <span>Paradas</span>
          //             </span>
          //           </Link>
          //         </Menu.Item>
          //         <Menu.Item
          //           className='sidebar-item'
          //           key='/administrador/rutas'
          //         >
          //           <Link to='/administrador/rutas'>
          //             <span>
          //               <Icon type='branches' />
          //               <span>Rutas</span>
          //             </span>
          //           </Link>
          //         </Menu.Item>
          //         <Menu.Item
          //           className='sidebar-item'
          //           key='/administrador/tarifas'
          //         >
          //           <Link to='/administrador/tarifas'>
          //             <span>
          //               <Icon type='logout' />
          //               <span>Tarifas</span>
          //             </span>
          //           </Link>
          //         </Menu.Item>
          //       </SubMenu>
          //     </Menu>
          //   </Sider>
          //   <Layout>
          //     <Header className='dashboard-header'>
          //       <Icon
          //         className='sidebar-trigger'
          //         type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          //         onClick={this.toggle}
          //       />
          //       <div className='avatar-user'>
          //         <Dropdown
          //           overlay={
          //             <Menu>
          //               <Menu.Item
          //                 onClick={() => this.props.history.push(paths.account)}
          //               >
          //                 <span>Gestionar cuenta</span>
          //               </Menu.Item>
          //               <Menu.Item onClick={this.showModal}>
          //                 <span>Cerrar sesión</span>
          //               </Menu.Item>
          //             </Menu>
          //           }
          //         >
          //           <div className='avatar-logo'>
          //             <Icon
          //               type='user'
          //               theme='outlined'
          //               style={{ marginRight: 5 }}
          //             />
          //             <p>{authUser.email} v0.23</p>
          //           </div>
          //         </Dropdown>
          //       </div>
          //     </Header>
          //     <Content>{this.props.children}</Content>
          //   </Layout>
          //    <Modal
          //     confirmLoading={loading}
          //     title='Cerrar Sesión'
          //     visible={this.state.visible}
          //     onOk={this.handleOk}
          //     onCancel={this.handleCancel}
          //   >
          //     <p style={{ margin: 0, fontSize: 16, fontWeight: 500 }}>
          //       ¿Está seguro que desea cerrar su sesión?
          //     </p>
          //   </Modal>
          // </Layout>
      //   )}
      // </AuthUserContext.Consumer>
    
  }
}

//const condition = authUser => !!authUser

//const LayoutWrapper = //compose(
  // withRouter,
  // withAmplify,
  // withAuthorization(condition)
//)
// (
//   LayoutBase
//  )

export default LayoutBase//LayoutWrapper
