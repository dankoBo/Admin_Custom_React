import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { StyledBox } from './StyledLogIn';
import Typography from '@mui/material/Typography'
import { useNavigate } from "react-router-dom";


const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

function LogIn() {
	
	async function onSubmit(values, {setErrors}) {
		
		await loginSchema.validate(values);
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await response.json();
		const user = data.find(person => person.email === values.email && person.address.zipcode === values.password);
		console.log(user);
		if (user) {
			navigate("/content")
		} else {
			setErrors({
				email: 'Email or password incorrect',
				password: 'Email or password incorrect'
			});
		}
		
	}
	
	return (
		<StyledBox>
			<Typography
				sx={{ color: '#000000' }}
				variant='h1'
			>
				Log In
			</Typography>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={loginSchema}
				onSubmit={onSubmit}
			>
			{({ errors, touched, isSubmiting }) => (
				<Form>
					<Field
						as={TextField}
						name="email"
						label="Email"
						type="email"
						error={errors.email && touched.email}
						helperText={<ErrorMessage name="email" />}
						variant="outlined"
						margin="normal"
						fullWidth
					/>
					<Field
						as={TextField}
						name="password"
						label="Password"
						type="password"
						error={errors.password && touched.password}
						helperText={<ErrorMessage name="password" />}
						variant="outlined"
						margin="normal"
						fullWidth
					/>
					<Button
						variant="contained"
						color="primary"
						type="submit"
						disabled={isSubmiting}
					>
						Submit
					</Button>
				</Form>
			)}
			</Formik>
			<Typography sx={{color: 'black'}}>
				Sincere@april.biz <br /> 92998-3874
			</Typography>
		</StyledBox>
	);
};

export default LogIn;