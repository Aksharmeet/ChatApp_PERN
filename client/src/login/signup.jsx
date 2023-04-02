import { Button, ButtonGroup, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import TextField from '../components/textField'
import { useNavigate } from 'react-router-dom'
import { ArrowBackIcon } from '@chakra-ui/icons'

function Signup() {
	const navigate = useNavigate()

	return (
		<Formik
			initialValues={{
				username: '',
				password: '',
			}}
			validationSchema={Yup.object({
				username: Yup.string().min(3, 'Must be 3 characters or more').max(15, 'Must be 15 characters or less').required('Required'),
				password: Yup.string().min(8, 'Must be 8 characters or more').max(20, 'Must be 20 characters or less').required('Required'),
			})}
			onSubmit={(values, actions) => {
				const { username, password } = values
				actions.resetForm()

				fetch('http://localhost:4000/auth/register', {
					method: 'POST',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ username, password }),
				})
					.catch((err) => {
						return
					})
					.then((res) => {
						if (!res || !res.ok || res.status >= 400) {
							return
						}
						return res.json()
					})
					.then((data) => {
						if (!data) return
						console.log(data)
					})
			}}
		>
			<VStack as={Form} w={{ base: '90%', md: '500px' }} m='auto' justify='center' h='100vh' spacing='1em'>
				<Heading>Sign Up</Heading>
				<TextField name='username' placeholder='Enter Username' autcomplete='off' label='Username' />
				<TextField name='password' placeholder='Enter Password' autcomplete='off' label='Password' />
				<ButtonGroup>
					<Button onClick={() => navigate('/')} leftIcon={<ArrowBackIcon />}>
						Back
					</Button>
					<Button colorScheme='teal' type='submit'>
						Create Account
					</Button>
				</ButtonGroup>
			</VStack>
		</Formik>
	)
}

export default Signup
