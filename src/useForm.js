import { useState } from 'react';

const useForm = initialValues => {
    const [values, setValues] = useState(initialValues);
    const setForm = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    };

    return [values, setForm];
}

export default useForm;