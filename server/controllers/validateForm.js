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

const validateForm = (req, res) => {
	const formData = req.body
	FormSchema.validate(formData)
		.catch((err) => {
			res.status(422).send()
			console.log(err.errors)
		})
		.then((valid) => {
			if (valid) {
				res.send('form is valid')
				console.log('form is valid')
			}
		})
}

module.exports = validateForm
