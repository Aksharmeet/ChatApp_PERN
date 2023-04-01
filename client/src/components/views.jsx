import { Route, Routes } from 'react-router-dom'
import Login from '../login/login'
import Signup from '../login/signup'
import Error from '../404/404'

const Views = () => {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/register' element={<Signup />} />
			<Route path='*' element={<Error />}></Route>
		</Routes>
	)
}

export default Views
