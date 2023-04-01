import { Button, ButtonGroup, FormControl, FormErrorMessage, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function Login() {
	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		validationSchema: Yup.object({
			username: Yup.string().min(3, 'Must be 3 characters or more').max(15, 'Must be 15 characters or less').required('Required'),
			password: Yup.string().min(8, 'Must be 8 characters or more').max(20, 'Must be 20 characters or less').required('Required'),
		}),
		onSubmit: (values) => {
			console.log(values)
		},
	})
	return (
		<VStack as='form' w={{ base: '90%', md: '500px' }} m='auto' justify='center' h='100vh' spacing='2em'>
			<Heading>Log In</Heading>
			<FormControl>
				<FormLabel fontSize='lg'>Username</FormLabel>
				<Input name='username' placeholder='Enter Username' autoComplete='off' size='lg' />
				<FormErrorMessage>Invalid Username</FormErrorMessage>
			</FormControl>
			<FormControl>
				<FormLabel fontSize='lg'>Password</FormLabel>
				<Input name='password' placeholder='Enter Password' autoComplete='off' size='lg' />
				<FormErrorMessage>Invalid Password</FormErrorMessage>
			</FormControl>
			<ButtonGroup>
				<Button colorScheme='teal' type='submit'>
					Login
				</Button>
				<Button>Create Account</Button>
			</ButtonGroup>
		</VStack>
	)
}

export default Login
