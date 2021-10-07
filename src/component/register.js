import React from 'react';
import { useFormik } from 'formik'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as Yup from 'yup';


const initialValues = {
    firstName: '',
    lastName: '',
    age:'',
    email: '',
    contact: '',
    location: ''
}

const onSubmit = values => {
    console.log('Form data', values);
    
}



const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    age: Yup.number().required('Required'),
    contact: Yup.number().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    location: Yup.string().required('Required')
})



function Register() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate,
        validationSchema
    })


    return (
        <Card sx={{ minWidth: 275 }} className="card">
            <form onSubmit={formik.handleSubmit}>
                <CardContent>
                    <Typography sx={{ fontSize: 20, fontWeight: 'bold', color: 'white' }} color="text.secondary" gutterBottom>
                        REGISTRATION FORM
                    </Typography>
                    <label htmlFor='firstName'>FirstName</label>
                    <input type='text' id='firstName' name='firstName' onChange={formik.handleChange} value={formik.values.firstName} />

                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className='error'>{formik.errors.firstName}</div>
                    ) : null}

                    <label htmlFor='lastName'>LastName</label>
                    <input type='text' id='lastName' name='lastName' onChange={formik.handleChange} value={formik.values.lastName} />

                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className='error'>{formik.errors.lastName}</div>
                    ) : null}

                    <label htmlFor='age'>Age</label>
                    <input type='text' id='age' name='age' onChange={formik.handleChange} value={formik.values.age} />

                    {formik.touched.age && formik.errors.age ? (
                        <div className='error'>{formik.errors.age}</div>
                    ) : null}

                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />

                    {formik.touched.email && formik.errors.email ? (
                        <div className='error'>{formik.errors.email}</div>
                    ) : null}

                    <label htmlFor='contact'>Contact</label>
                    <input type='text' id='contact' name='contact' onChange={formik.handleChange} value={formik.values.contact} />

                    {formik.touched.contact && formik.errors.contact ? (
                        <div className='error'>{formik.errors.contact}</div>
                    ) : null}

                    <label htmlFor='location'>Location</label>
                    <input type='text' id='location' name='location' onChange={formik.handleChange} value={formik.values.location} />

                    {formik.touched.location && formik.errors.location ? (
                        <div className='error'>{formik.errors.location}</div>
                    ) : null}
                </CardContent>

                <button>Submit</button>
                <button>Clear</button>

            </form>
        </Card>
    );
}

export default Register