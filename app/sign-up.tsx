import { ArrowBack } from '@/components/ui/ArrowBack'
import { ButtonUI } from '@/components/ui/ButtonUI'
import { InputUI } from '@/components/ui/InputUI'
import { Colors, Radius } from '@/constants/styles'
import { useState } from 'react'
import { Button, Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function SignUpScreen() {
	const [passwordIsHidden, setPasswordIsHidden] = useState<boolean>(true)

	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'} keyboardVerticalOffset={30}>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<ArrowBack />

				<View style={styles.overallContainer}>
					<View style={styles.container}>
						<View>
							<View style={styles.info}>
								<Image style={styles.info_image} source={require('../assets/images/human_plus.png')} width={48} height={51} />

								<View>
									<Text>Sign up</Text>
									<Text style={styles.info_secondLine}>Personal Account</Text>
								</View>
							</View>

							<View>
								<InputUI placeholder='Your name' label={'Name'} />
								<InputUI placeholder='Your email' label={'E-mail'} />
								<InputUI placeholder='Your password' label={'Password'} isPassword secureTextEntry={passwordIsHidden}>
									<Pressable onPress={() => setPasswordIsHidden(state => !state)}>
										<Image style={styles.eye_image} source={require('../assets/images/eye_green.png')} width={18} height={11} />
									</Pressable>
								</InputUI>
							</View>
						</View>

						<ButtonUI title='Continue' />
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	overallContainer: {
		paddingTop: 50,
		height: 700,
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingVertical: 24,
		justifyContent: 'space-between',
	},
	info: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 45,
	},
	info_image: {
		marginRight: 12,
	},
	info_secondLine: {
		color: Colors.secondary,
		fontWeight: '400',
	},
	eye_image: {
		position: 'absolute',
		right: 19,
		bottom: 44,
	},
})
