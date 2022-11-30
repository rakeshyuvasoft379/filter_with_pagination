import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import "./Register.css"
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Slice/LoginSlice';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

export const Login = () => {

    const registeredUser= useSelector((state)=>console.log(state))
    const dispatch= useDispatch()    
    console.log(362, registeredUser)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            dispatch(loginUser(values))
        },
    });

    // just a testing code for git

    return (
        <div className='mainWrapper'>
            <Typography variant="h1" component="h2" className="title">
                Login
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Box className="inputWrapper">
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Box>
                <Box className="inputWrapper">
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Box>
                <Box>
                    <Button color="primary" variant="contained" type="submit">
                        Submit
                    </Button>
                </Box>
            </form>
        </div>
    );
};

