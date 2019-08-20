import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Verification from './Verification'
import Login from './Login'

export default class Authorization extends Component{
    state = {
        step: 1
    }

    next = (e) => {
        e.preventDefault()
        this.setState({step: 2})
    }
    
    render(){
        return(
            <div className="login-container">
                <Link to='/' className='app-logo'>
                    <div className='font-selima'>
                        Papaya
                    </div>
                </Link>
                {
                    this.state.step === 1 &&
                    <Login
                        next={this.next}
                    />
                }
                {
                    this.state.step === 2 && 
                    <Verification 
                        next={this.next}
                    />
                }
            </div>
        )
    }
}