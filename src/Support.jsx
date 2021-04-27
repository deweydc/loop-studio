import React, { useState } from 'react';
import Nav from './Nav';
import './Support.css'


function Support() {

    // * state
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");



    const handleSubmit = e => {
        alert(`Thank you! Your message has been sent.`)
        e.preventDefault();
    }


    return (
        <div className='Products__container'>
            <div className="nav__header">
                <Nav />
            </div>
            <div className="support__contain">
                <h1>We would 💜 to hear from you.</h1>

                <div className="form">
                    <form onSubmit={handleSubmit}>
                        {/* name input */}
                        <label for="name">
                            <input
                                type="text"
                                name='name'
                                placeholder='Name'
                                onChange={e => setName({ name: e.target.value })}
                            />
                        </label>
                        {/* email input */}
                        <label for="email">
                            <input
                                type="text"
                                name='email'
                                placeholder='Email'
                                onChange={e => setEmail({ email: e.target.value })}
                            />
                        </label>
                        {/* phone number input */}
                        <label for="phone">
                            <input
                                type="text"
                                name='phone'
                                placeholder='Phone'
                                onChange={e => setPhone({ phone: e.target.value })}
                            />
                        </label>

                        <label for="comments">
                            <textarea
                                type='text'
                                placeholder='Comments:'
                                name="comments"
                                id="comments"
                                cols="50"
                                rows="1"
                                onChange={e => setComment({ comment: e.target.value })}
                            />
                        </label>
                        <button type='submit' className='support__btn'>Contact Us!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Support;