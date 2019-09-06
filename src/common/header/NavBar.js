import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import headImage from '../../layout/images/logo.jpg'

import { Button, Drawer, Icon } from 'antd'

import * as paths from '../../routes/paths'

export default class NavBar extends Component {
    state = {
        visible: false
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    Item = (path, content) => (
        <li>
            <Link to={path} onClick={this.onClose}>
                {content}
            </Link>
        </li>
    )

    render() {
        return (
            <div className='navbar-mobile'>
                <Button type="primary" onClick={this.showDrawer} icon='menu' />
                <Drawer
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <div className='drawer__head'>
                        <Link to={paths.landing} onClick={this.onClose}>
                            <img src={headImage} />
                        </Link>
                    </div>
                    <div className='drawer__content'>
                        <ul>
                            {this.Item(paths.landing, 'Inicio')}
                            {this.Item(paths.nosotros, 'Nosotros')}
                            {this.Item(paths.galeria, 'Galeria y Referencias')}
                            {this.Item(paths.contactenos, 'Contactenos')}
                            {this.Item(paths.reservas, 'Reservas')}
                        </ul>
                    </div>
                </Drawer>
            </div>
        )
    }
}