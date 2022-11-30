import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import "./Register.css"
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../Slice/RegisterSlice';
import { useParams } from 'react-router-dom';

const validationSchema = yup.object({
    username: yup
        .string('Enter username')
        .min(8, 'Username should be of minimum 8 characters length')
        .required('Username is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

export const Register = () => {

    const registeredUser= useSelector((state)=>console.log(111,state))
    const dispatch= useDispatch()

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            dispatch(registerUser(values))
        },
    });

    // const params= useParams()

    return (
        <div className='mainWrapper'>
             {/* <h2>{params.id}</h2>
            <h2>{JSON.stringify(params)}</h2> */}
            <Typography variant="h1" component="h2" className="title">
                Register
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Box className="inputWrapper">
                    <TextField
                        id="username"
                        name="username"
                        label="Username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                    />
                </Box>
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

