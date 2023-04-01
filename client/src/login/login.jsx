import { Button, ButtonGroup, FormControl, FormErrorMessage, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'

function Login() {
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
