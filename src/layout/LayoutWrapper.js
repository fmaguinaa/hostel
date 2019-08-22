import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
// import {Link, withRouter} from 'react-router-dom'

// import * as paths from '../routes/paths'

const { Header, Content, Footer } = Layout

export default class LayoutBase extends Component {
    render() {
        return (
            <Layout>
                <Header>

                </Header>
                <Content>
                    {props.children}
                </Content>
                <Footer>

                </Footer>
            </Layout>
        )
    }
}