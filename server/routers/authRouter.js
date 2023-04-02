const express = require('express')
const router = express.Router()
const yup = require('yup')

const FormSchema = yup.object().shape({
	username: yup
		.string()
		.required('Username is required')
		.min(6, 'Username must be at least 6 characters long')
		.max(28, 'Username must be less than 28 characters long'),
	password: yup
		.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters long')
		.max(28, 'Password must be less than 28 characters long'),
})

router.post('/login', (req, res) => {
	const formData = req.body
	FormSchema.validate(formData)
		.catch((err) => {
			res.status(422).send()
			console.log(err.errors)
		})
		.then((valid) => {
			if (valid) console.log('form is valid')
		})

	// res.send('login')
})

router.post('/register', (req, res) => {
	const formData = req.body
	FormSchema.validate(formData)
		.catch((err) => {
			res.status(422).send()
			console.log(err.errors)
		})
		.then((valid) => {
			if (valid) console.log('form is valid')
		})
})

module.exports = router
