import { ArrowBack } from '@/components/ui/ArrowBack'
import { ButtonUI } from '@/components/ui/ButtonUI'
import { InputUI } from '@/components/ui/InputUI'
import { Colors, Radius } from '@/constants/styles'
import { RegisterSchema } from '@/lib/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Image, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function SignUpScreen() {
	const [passwordIsHidden, setPasswordIsHidden] = useState<boolean>(true)

	const {
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(RegisterSchema),
	})

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
								<Controller
									name='username'
									control={control}
									render={({ field: { onChange, value, onBlur } }) => (
										<>
											<InputUI placeholder='Your name' label={'Name'} onBlur={onBlur} onChangeText={onChange} value={value}>
												{errors.root && <Image source={require('../assets/images/exclamation.png')} />}
											</InputUI>
										</>
									)}
								></Controller>

								<Controller
									name='email'
									control={control}
									render={({ field: { onChange, value, onBlur } }) => (
										<>
											<InputUI placeholder='Your email' label={'E-mail'} onBlur={onBlur} onChangeText={onChange} value={value}>
												{errors.root && <Image source={require('../assets/images/exclamation.png')} />}
											</InputUI>
										</>
									)}
								></Controller>

								<Controller
									name='password'
									control={control}
									render={({ field: { onChange, value, onBlur } }) => (
										<>
											<InputUI
												placeholder='Your password'
												label={'Password'}
												isPassword
												secureTextEntry={passwordIsHidden}
												onBlur={onBlur}
												onChangeText={onChange}
												value={value}
											>
												<Pressable onPress={() => setPasswordIsHidden(state => !state)}>
													<Image style={styles.eye_image} source={require('../assets/images/eye_green.png')} width={18} height={11} />

													{errors.root && <Image source={require('../assets/images/exclamation.png')} />}
												</Pressable>
											</InputUI>
										</>
									)}
								></Controller>
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
		paddingVertical: 12,
		paddingBottom: 24,
		justifyContent: 'space-between',
		borderTopLeftRadius: Radius.r16,
		borderTopRightRadius: Radius.r16,
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
