import * as SecureStore from 'expo-secure-store'
import * as LocalAuthentication from 'expo-local-authentication'
import { Alert } from 'react-native'

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

export const saveToken = async (token: string) => {
	try {
		await SecureStore.setItemAsync('access_token', token)
	} catch (error) {
		console.error('Error saving token:', error)
	}
}

export const getToken = async (): Promise<string | null> => {
	try {
		const token = await SecureStore.getItemAsync('access_token')
		return token
	} catch (error) {
		console.error('Error retrieving token:', error)
		return null
	}
}

export const savePIN = async (PIN: string[]) => {
	try {
		await SecureStore.setItemAsync('PIN', JSON.stringify(PIN))
	} catch (error) {
		console.error('Error saving PIN:', error)
	}
}

export const getPIN = async (): Promise<string | null> => {
	try {
		const PIN = await SecureStore.getItemAsync('PIN')
		return PIN
	} catch (error) {
		console.error('Error retrieving PIN:', error)
		return null
	}
}

export const authWithBiometrics = async () => {
	const hasBiometrics = await LocalAuthentication.hasHardwareAsync()
	if (!hasBiometrics) {
		Alert.alert('Biometrics not available', 'Your device does not support biometric authentication')
		return
	}

	const supportedTypes = await LocalAuthentication.supportedAuthenticationTypesAsync()
	const result = await LocalAuthentication.authenticateAsync({
		promptMessage: 'Authenticate with biometrics',
		fallbackLabel: 'Use PIN',
	})

	if (result.success) {
		Alert.alert('Authentication successful', 'You have been authenticated')

		return { message: 'Successfully authenticated' }
	} else {
		Alert.alert('Authentication failed', 'Biometric authentication failed')

		return { message: 'Authentication failed' }
	}
}
