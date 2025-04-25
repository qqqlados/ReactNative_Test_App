import { ArrowBack } from '@/components/ui/ArrowBack'
import { ButtonUI } from '@/components/ui/ButtonUI'
import { InputUI } from '@/components/ui/InputUI'
import { Colors, Radius } from '@/constants/styles'
import { useEffect, useState } from 'react'
import { Image, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { CreatePIN, RepeatPIN } from '../components/ui/PINScreens'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { loginUser } from '@/lib/auth'
import { setAccessToken, setUser } from '@/store/slices/authSlice'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/lib/formSchema'

export default function SignInScreen() {
	const [passwordIsHidden, setPasswordIsHidden] = useState<boolean>(true)
	const [createPinIsShowed, setCreatePinIsShowed] = useState<boolean>(false)
	const [repeatPinIsShowed, setRepeatPinIsShowed] = useState<boolean>(false)

	const [userData, setUserData] = useState<{ email: string; username: string; password: string; image: string } | {}>({})

	const [PIN, setPIN] = useState<string[]>([])

	const dispatch = useDispatch()

	const user = useSelector((state: RootState) => state.auth)

	const token = useSelector((state: RootState) => state.auth.accessToken)

	const {
		control,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm({
		defaultValues: {
			username: '',
			password: '',
		},
		resolver: zodResolver(LoginSchema),
	})

	const onSubmit = async (data: { username: string; password: string }) => {
		const result = await loginUser({ username: data.username, password: data.password })

		if (result && Object.hasOwn(result, 'message')) {
			return setError('root', { message: 'Error: Invalid E-mail or Password' })
		}

		setUserData({ email: result.email, username: data.username, password: data.password, image: result.image })

		return setCreatePinIsShowed(true)

		//@ts-ignore
	}

	const fromCloseToRepeatPIN = () => {
		setCreatePinIsShowed(false)

		setRepeatPinIsShowed(true)
	}

	return (
		<>
			{createPinIsShowed ? (
				<CreatePIN navigateToRepeatPIN={fromCloseToRepeatPIN} PIN={PIN} setPIN={setPIN} />
			) : repeatPinIsShowed ? (
				<RepeatPIN setRepeatPinIsShowed={setRepeatPinIsShowed} PIN={PIN} setPIN={setPIN} userData={userData} />
			) : (
				<KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'} keyboardVerticalOffset={30}>
					<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
						<ArrowBack />

						<View style={styles.overallContainer}>
							<View style={styles.container}>
								<View>
									<View style={styles.info}>
										<Image style={styles.info_image} source={require('../assets/images/human_plus.png')} width={48} height={51} />

										<View>
											<Text>Login</Text>
											<Text style={styles.info_secondLine}>Personal Account</Text>
										</View>
									</View>

									{errors.root && <Text style={styles.error}>{errors.root.message}</Text>}

									<View>
										<Controller
											name='username'
											control={control}
											render={({ field: { onChange, value, onBlur } }) => (
												<>
													<InputUI placeholder='Your email' label={'E-mail'} onBlur={onBlur} onChangeText={onChange} value={value}>
														{errors.root && <Image source={require('../assets/images/exclamation.png')} />}
													</InputUI>

													{errors.username && (
														<View style={{ marginTop: -20, paddingLeft: '27%' }}>{<Text style={styles.error}>{errors.username.message}</Text>}</View>
													)}
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
															<Image style={styles.eye_image} source={require('../assets/images/eye_orange.png')} width={18} height={11} />
														</Pressable>
													</InputUI>

													{errors.password && <View>{<Text style={styles.error}>{errors.password.message}</Text>}</View>}
												</>
											)}
										></Controller>
									</View>
								</View>

								<View style={{ marginTop: 12 }}>
									<ButtonUI title='Continue' onPress={handleSubmit(onSubmit)} />

									<ButtonUI title='Create Account' styleType='secondary' />
								</View>
							</View>
						</View>
					</ScrollView>
				</KeyboardAvoidingView>
			)}
		</>
	)
}

const styles = StyleSheet.create({
	overallContainer: {
		paddingTop: 70,
		height: 700,
	},
	container: {
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingVertical: 24,
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
		bottom: 40,
	},
	error: {
		color: 'red',
	},
})
