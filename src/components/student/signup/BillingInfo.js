import React from 'react'

export default function BillingInfo(props) {
    return (
        <div className="student-signup-container-billing">
            <h3 className="heading-secondary heading-secondary--sub color-white">
                Payment Info:
            </h3>
            <div className="student-signup-container-form">
                <form className="form">
                    <div className="form__row form__row--2">
                        <label htmlFor="creditCardNumber" className="search__label">Credit Card Number:</label>
                        <input id="creditCardNumber" type="text" className="search__input" placeholder="Credit Card Number" />
                    </div>
                    <div className="form__row form__row--2">
                        <label className="search__label" htmlFor="expirationDate">Expiration Date:</label>
                        <input id="expirationDate" type="text" className="search__input" placeholder="Expiration Date" />
                        <div className="space-div" />
                        <label className="search__label sp" htmlFor="ccv">CCV:</label>
                        <input id="ccv" type="text" className="search__input" placeholder="CCV" />
                    </div>
                </form>
            </div>
            <hr class="hr-primary" />
            <h3 className="heading-secondary heading-secondary--sub font-selima color-primary">
                Billing Info
            </h3>
            <div className="student-signup-container-form">
                <form className="form">
                    <div className="form__row form__row--2">
                        <label htmlFor="name" className="search__label">Name as it appear:</label>
                        <input id="name" type="text" className="search__input" placeholder="Name as it appear" />
                    </div>
                    <div className="form__row form__row--2">
                        <label className="search__label" htmlFor="billingAddress">Billing Address:</label>
                        <input id="billingAddress" type="text" className="search__input" placeholder="Last Name" />
                    </div>
                    <div className="form__row form__row--2">
                        <label className="search__label" htmlFor="state">State:</label>
                        <input id="state" type="text" className="search__input" placeholder="State" />
                        <div className="space-div" />
                        <label className="search__label sp" htmlFor="zipCode">Zip Code:</label>
                        <input id="zipCode" type="text" className="search__input" placeholder="Zip Code" />
                    </div>
                    <div className="form__row form__row--2">
                        <label className="search__label" htmlFor="phoneNumber">Phone Number:</label>
                        <input id="phoneNumber" type="text" className="search__input" placeholder="Phone Number" />
                    </div>
                    <div className="form__row form__row--2">
                        <label className="search__label" htmlFor="email">Email:</label>
                        <input id="email" type="text" className="search__input" placeholder="Email" />
                    </div>
                    <div className="form__row form__row--2 push-right">
                        <button className="btn btn--orange" onClick={(e)=>{e.preventDefault()}}>Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}