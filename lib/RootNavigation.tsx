import { RootState } from '@/store/store'
import { Redirect, Stack } from 'expo-router'
import { useSelector } from 'react-redux'

export default function RootNavigation() {
	const username = useSelector((state: RootState) => state.auth.username)
	const isEnterPIN = useSelector((state: RootState) => state.auth.isEnterPIN)

	if (!username) {
		return <Redirect href='/' />
	}

	if (isEnterPIN === true) {
		return <Redirect href='/enter-pin' />
	} else {
		return <Redirect href='/(tabs)/Home' />
	}

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name='+not-found' />

			<Stack.Screen name='sign-up' />
			<Stack.Screen name='sign-in' />
		</Stack>
	)
}
