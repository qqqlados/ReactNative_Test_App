import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const loginUser = async ({ username, password }: { username: string; password: string }) => {
	const signUpResponse = await fetch('https://dummyjson.com/auth/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			username,
			password,
			expiresInMins: 30,
		}),
		credentials: 'include',
	}).then(res => res.json())

	return signUpResponse
}

export const getUser = async () => {
	const token = useSelector((state: RootState) => state.auth.accessToken)

	try {
		const user = await fetch('https://dummyjson.com/auth/me', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`, // Замінити токен
			},
			credentials: 'include',
		})
			.then(res => res.json())
			.then(res => console.log(res))

		return user
	} catch (error) {
		console.log(error)
		return null
	}
}
