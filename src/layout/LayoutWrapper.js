import React, { Component } from 'react'
import { Layout } from 'antd'
import Footer from '../common/footer/Footer'
import Header from '../common/header/Header'

// import {Link, withRouter} from 'react-router-dom'

// import * as paths from '../routes/paths'

const { Content } = Layout

export default class LayoutBase extends Component {
    render() {
        return (
            <Layout>
                <Header/>
                <Content className='layout'>
                    {this.props.children}
                </Content>
                <Footer />
            </Layout>
        )
    }
}