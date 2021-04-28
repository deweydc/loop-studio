import React, { useState } from 'react';
import Nav from './Nav';
import './Support.css';
import SupportForm from './SupportForm';




function Support() {

    // const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);


    function submitForm() {
        setIsSubmitted(true);
    }

    return (

        <div className='Products__container'>
            <div className="nav__header">
                <Nav />
            </div>
            <div className="support__container">


                <div className="form">
                    {!isSubmitted ? (<SupportForm submitForm={submitForm} />) :
                        <div className="form-success">
                            <h1>Thank you! Your message has been sent.</h1>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Support;