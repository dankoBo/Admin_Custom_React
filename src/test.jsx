const loginSchema = Yup.object().shape({
	email: Yup.string()
	  .email('Enter a valid email')
	  .required('Email is required'),
	password: Yup.string()
	  .min(8, 'Password should be of minimum 8 characters length')
	  .required('Password is required'),
  });
  
  function LogIn() {
	  const navigate = useNavigate()
	  async function onSubmit(values, {setErrors}) {
		  
		  await loginSchema.validate(values);
		  const response = await fetch('https://jsonplaceholder.typicode.com/users');
		  const data = await response.json();
		  const user = data.find(person => person.email === values.email && person.address.zipcode === values.password);
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





  import React from 'react';
  import { Formik, Form, Field, ErrorMessage } from 'formik';
  import * as Yup from 'yup';
  
  const validationSchema = Yup.object().shape({
	email: Yup.string()
	  .email('Некоректна адреса електронної пошти')
	  .required('Поле "Електронна пошта" є обов\'язковим'),
	password: Yup.string()
	  .min(8, 'Пароль повинен містити не менше 8 символів')
	  .required('Поле "Пароль" є обов\'язковим'),
  });
  
  const LoginForm = () => {
	const initialValues = {
	  email: '',
	  password: '',
	};
  
	const handleSubmit = async (values, { setSubmitting }) => {
	  try {
		await validationSchema.validate(values); // перевірка валідності значень форми
		console.log(values); // значення форми
		// відправка даних на сервер
	  } catch (error) {
		console.error(error);
	  } finally {
		setSubmitting(false);
	  }
	};
  
	return (
	  <Formik
		initialValues={initialValues}
		onSubmit={handleSubmit}
		validationSchema={validationSchema}
	  >
		{({ isSubmitting }) => (
		  <Form>
			<div>
			  <label htmlFor="email">Електронна пошта:</label>
			  <Field type="email" id="email" name="email" />
			  <ErrorMessage name="email" />
			</div>
			<div>
			  <label htmlFor="password">Пароль:</label>
			  <Field type="password" id="password" name="password" />
			  <ErrorMessage name="password" />
			</div>
			<button type="submit" disabled={isSubmitting}>
			  Відправити
			</button>
		  </Form>
		)}
	  </Formik>
	);
  };
  
  export default LoginForm;