import React, {Component} from 'react'

import BasicInfo from './BasiciInfo'
import BillingInfo from './BillingInfo'

export default class SignupContainer extends Component{
    state = {
        step: 1
    }

    nextStep = () => {
        this.setState({
            step: 2
        })
    }

    backStep = () => {
        this.setState({
            step: 1
        })
    }

    render(){
        return(
            <div className="student-signup-container">
                {
                    this.state.step === 1 &&
                    <BasicInfo nextStep={this.nextStep}/>
                }
                {
                    this.state.step === 2 &&
                    <BillingInfo
                        nextStep={this.nextStep}
                        backStep={this.backStep}
                    /> 
                }
            </div>
        )
    }
}