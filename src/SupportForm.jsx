import React, { useState } from 'react'
import useForm from './SupportFormState';
import validate from './SupportFormValidation';


const SupportForm = ({ submitForm }) => {

    // hook in our values on change from useForm
    //pass validation in useForm
    const { handleChange, values, handleSubmit, errors } = useForm(
        submitForm,
        validate);



    return (
        <div className="support__container">
            <h1>We would 💜 to hear from you.</h1>
            <form onSubmit={handleSubmit}>
                {/* name input */}
                <label for="name">
                    <input
                        type="text"
                        name='name'
                        placeholder='Name'
                        onChange={handleChange}
                        value={values.name}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </label>
                {/* email input */}
                <label for="email">
                    <input
                        type="email"
                        name='email'
                        placeholder='Email'
                        onChange={handleChange}
                        value={values.email}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </label>
                {/* phone number input */}
                <label for="phone">
                    <input
                        type="text"
                        name='phone'
                        placeholder='Phone'
                        onChange={handleChange}
                        value={values.phone}
                    />
                </label>

                <label for="comments">
                    <textarea
                        type='text'
                        placeholder='Comments'
                        name="comment"
                        id="comments"
                        cols="50"
                        rows="1"
                        onChange={handleChange}
                        value={values.comment}
                    />
                    {errors.comment && <p style={{ color: 'red' }}>{errors.comment}</p>}
                </label>
                <input type='submit' value='Send Message' className='support__btn' />
            </form>

        </div>
    )
}

export default SupportForm
