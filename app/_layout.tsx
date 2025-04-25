import { useFonts } from 'expo-font'
import { Slot, Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import { QueryClient } from '@tanstack/react-query'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { Provider, useSelector } from 'react-redux'
import { store, persistor } from '@/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import RootNavigation from '@/lib/RootNavigation'

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

	const asyncStoragePersister = createAsyncStoragePersister({
		storage: AsyncStorage,
	})

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<PersistQueryClientProvider client={queryClient} persistOptions={{ persister: asyncStoragePersister, maxAge: 1000 * 60 * 60 * 12 }}>
					<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
						<View style={styles.container}>
							<RootNavigation />
							<Slot />
						</View>
					</SafeAreaView>
				</PersistQueryClientProvider>
			</PersistGate>
		</Provider>
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
