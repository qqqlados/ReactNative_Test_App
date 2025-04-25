import { setAccessToken } from '@/store/slices/authSlice'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import createAuthRefreshInterceptor from 'axios-auth-refresh'

export const axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
})

const refreshAuthLogic = async (failedRequest: any) => {
	const dispatch = useDispatch()

	try {
		const response = await axios.post('https://dummyjson.com/auth/refresh')

		const newToken = response.data.Token
		dispatch(setAccessToken(newToken))

		failedRequest.response.config.headers['Authorization'] = 'Bearer ' + newToken

		return Promise.resolve()
	} catch (error) {
		console.error('Token refresh failed:', error)
		return Promise.reject(error)
	}
}

createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic)
