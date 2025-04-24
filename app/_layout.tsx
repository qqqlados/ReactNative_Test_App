import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded] = useFonts({
		InterRegular: require('../assets/fonts/Inter_18pt-Regular.ttf'),
		InterMedium: require('../assets/fonts/Inter_18pt-Medium.ttf'),
		InterBold: require('../assets/fonts/Inter_24pt-Bold.ttf'),
		InterItalic: require('../assets/fonts/Inter_28pt-Italic.ttf'),
	})

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) {
		return null
	}

	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
				<View style={styles.container}>
					<Stack screenOptions={{ headerShown: false }}>
						<Stack.Screen name='+not-found' />
						<Stack.Screen name='sign-up' />
						<Stack.Screen name='login' />
					</Stack>
				</View>
			</SafeAreaView>
		</QueryClientProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		fontSize: 25,
		fontWeight: 500,
		fontFamily: 'InterItalic',
		width: '100%',
		height: '100%',
		paddingTop: 20,
		paddingBottom: 10,
		paddingHorizontal: 16,
		backgroundColor: '#fff',
	},
})
