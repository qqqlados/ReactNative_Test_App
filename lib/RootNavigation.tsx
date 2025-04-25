import { RootState } from '@/store/store'
import { Redirect, Stack } from 'expo-router'
import { useSelector } from 'react-redux'

export default function RootNavigation() {
	const username = useSelector((state: RootState) => state.auth.username)

	if (username) {
		return <Redirect href={'/(tabs)/Home'} />
	} else {
		return <Redirect href={'/'} />
	}

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name='+not-found' />

			<Stack.Screen name='sign-up' />
			<Stack.Screen name='sign-in' />
		</Stack>
	)
}
