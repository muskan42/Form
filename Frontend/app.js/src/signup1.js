import React, { useState, useEffect } from 'react'
import axios from 'axios';
import formatPhoneNumber from './phone-number-formatter';

function Signup1() {
    const [formValues, setValues] = useState({
        form: 'B',
        name: '',
        countrycode: '',
        phone: ''
    })
    const [formErrors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (event) => {
        setValues({ ...formValues, [event.target.name]: [event.target.value] })

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081', formValues)
            .then(res => console.log("Registered Successfully!!"))
            .catch(err => console.log(err));
        setErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(errors).length == 0 && isSubmit)
            console.log(formValues);
    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Name is required!";
        }
        if (!values.countrycode) {
            errors.countrycode = "Country-code is required!";
        }
        if (!values.phone) {
            errors.phone = "Enter your phone number!";
        }
        return errors;
    }
    return (
        <div className='d-flex w-100 vh-100 bg-primary justify-content-center align-items-center'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type='text' placeholder='Enter Name' name='name' className='form-control rounded-0' value={formValues.name} onChange={handleChange} />
                    </div>
                    <p>{formErrors.name}</p>
                    <div className='mb-3'>
                        <label htmlFor='countrycode'><strong>Country Code</strong></label>
                        <select placeholder='Enter Country Code' name='countrycode' className='form-control rounded-0' value={formValues.countrycode} onChange={handleChange}>
                            <option value="93">93</option>
                            <option value="355">355</option>
                            <option value="91">91</option>
                            <option value="213">213</option>
                        </select>
                    </div>
                    <p>{formErrors.countrycode}</p>
                    <div className='mb-3'>
                        <label htmlFor='phone'><strong>Phone</strong></label>
                        <input type='text' placeholder='Enter phone no.' name='phone' className='form-control rounded-0' value={formatPhoneNumber(formValues.countrycode, formValues.phone)} onChange={handleChange} />
                    </div>
                    <p>{formErrors.phone}</p>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Sign up</button>
                    <p>You agree to our terms and policies</p>
                </form>
            </div>
        </div>
    )
}

export default Signup1