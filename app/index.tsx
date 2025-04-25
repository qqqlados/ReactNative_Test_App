import { ButtonUI } from '@/components/ui/ButtonUI'
import { TilesListUI } from '@/components/ui/TilesListUI'
import { Colors } from '@/constants/styles'
import { useRouter } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function WelcomeScreen() {
	const textData = ['Lorem ipsum 2', 'Lorem ipsum', 'Lorem ipsum 4', 'Lorem ipsum 3', 'Lorem ipsum 5']

	const router = useRouter()

	return (
		<View style={styles.container}>
			<TilesListUI textData={textData} />

			<View style={styles.footer}>
				<ButtonUI title='Sign In' onPress={() => router.navigate('/sing-in')} styleType='secondary' />

				<ButtonUI title='Sign Up' onPress={() => router.navigate('/sign-up')} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: Colors.mutedGray,
	},

	footer: {
		gap: 5,
	},
})
