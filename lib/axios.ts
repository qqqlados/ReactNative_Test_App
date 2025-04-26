import * as Keychain from 'react-native-keychain'
import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'

export const axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
})

const refreshAuthLogic = async (failedRequest: any) => {
	try {
		const response = await axios.post('https://dummyjson.com/auth/refresh')

		const newToken = response.data.Token

		await Keychain.resetGenericPassword({ service: 'access_token' })

		await Keychain.setGenericPassword('access_token', newToken, { service: 'access_token' })

		failedRequest.response.config.headers['Authorization'] = 'Bearer ' + newToken

		return Promise.resolve()
	} catch (error) {
		console.error('Token refresh failed:', error)
		return Promise.reject(error)
	}
}

createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic)
