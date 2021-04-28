import { useState, useEffect } from 'react';



//? Will handle out state for our form input values

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        comment: '',
    })

    //* errors
    const [errors, setError] = useState({});

    //*set state for submit
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        // destructure 
        const { name, value } = e.target
        setValues({
            ...values,
            // targeting the name value on inputs from support page
            [name]: value
        });

    };

    const handleSubmit = e => {
        e.preventDefault();
        setError(validate(values));
        setIsSubmitting(true)
    }

    //stops us from submitting with nothing in the fields
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors])

    //returning outputs and functions to use in other components
    return { handleChange, values, handleSubmit, errors };
}

export default useForm
