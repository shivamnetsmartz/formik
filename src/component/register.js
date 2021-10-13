import React from 'react';
import { useFormik } from 'formik'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as Yup from 'yup';


const initialValues = {
    firstName: '',
    lastName: '',
    password: '',
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
    password: Yup.string().required('Required'),
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


    const SubmitData = async (e) => {
        e.preventDefault();
        console.log(formik.values);
        const { firstName, lastName, contact, email, password, location } = formik.values;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
            ,
            body: JSON.stringify(formik.values)
        };
        fetch('http://localhost:6000/userData', options).then((res) => {
            res.json();
            if (res.status === 401 || !res) {
                window.alert("invalid registration");
                console.log('invalid registration');
            }
            else {
                 window.alert("successfully registration");
                 console.log('successfully registration');
            }
        })
            // .catch((
            //     err
            // ) =>{
            //     console.log(err);
            // }) 

    }

    //    const res= await fetch('http://localhost:6000/userData', {
    //        method:"POST",
    //        headers:{
    //            "Content-Type":"application/json"
    //        },
    //        body:JSON.stringify({
    //         firstName, lastName, contact, email,password, location
    //        })
    //    });
    //    const data = await res.json();
    //    console.log(data);

    //        if(res.status === 401 || !res){
    //            window.alert("invalid registration");
    //            console.log('invalid registration');
    //        }
    //        else{
    //         // window.alert("successfully registration");
    //         // console.log('successfully registration');
    //     }

    // }

    return (
        <Card sx={{ minWidth: 275 }} className="card">
            <form method="POST" onSubmit={formik.handleSubmit}>
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

                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />

                    {formik.touched.email && formik.errors.email ? (
                        <div className='error'>{formik.errors.email}</div>
                    ) : null}


                    <label htmlFor='location'>Location</label>
                    <input type='text' id='location' name='location' onChange={formik.handleChange} value={formik.values.location} />

                    {formik.touched.location && formik.errors.location ? (
                        <div className='error'>{formik.errors.location}</div>
                    ) : null}

                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />

                    {formik.touched.password && formik.errors.password ? (
                        <div className='error'>{formik.errors.password}</div>
                    ) : null}



                    <label htmlFor='contact'>Contact</label>
                    <input type='tel' id='contact' name='contact' onChange={formik.handleChange} value={formik.values.contact} />

                    {formik.touched.contact && formik.errors.contact ? (
                        <div className='error'>{formik.errors.contact}</div>
                    ) : null}


                </CardContent>

                <button onClick={SubmitData} type="submit">Submit</button>
                <button>Clear</button>

            </form>
        </Card>
    );
}

export default Register