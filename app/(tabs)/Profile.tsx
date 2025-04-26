import { ArrowBack } from '@/components/ui/ArrowBack'
import { SettingsTileUI } from '@/components/ui/SettingsTileUI'
import { loginUser } from '@/lib/auth'
import { removeUser, setUser } from '@/store/slices/authSlice'
import { RootState } from '@/store/store'
import { useEffect, useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

export default function Profile() {
	const [languageIsOpen, setLanguageIsOpen] = useState<boolean>(false)
	const user = useSelector((state: RootState) => state.auth)
	const [loading, setLoading] = useState(true)

	const dispatch = useDispatch()
	const { t, i18n } = useTranslation()

	const changeLanguage = (lang: 'en' | 'ar') => {
		i18n.changeLanguage(lang)
		setLanguageIsOpen(false)
	}

	return (
		<>
			<View style={styles.container}>
				{languageIsOpen ? (
					<>
						<Pressable onPress={() => setLanguageIsOpen(false)}>
							<Image source={require('../../assets/images/arrow_back.png')} />
						</Pressable>

						<Text style={styles.text}>{t('language')}</Text>

						<View style={{ gap: 16, marginTop: 16 }}>
							<SettingsTileUI
								text={t('english')}
								icon={<Image source={require('../../assets/images/globus.png')} />}
								actionButton={
									i18n.language === 'en' ? (
										<Image
											source={require('../../assets/images/selected.png')}
											width={32}
											height={32}
											style={{ position: 'absolute', top: 12, right: 16 }}
										/>
									) : (
										<Image
											source={require('../../assets/images/blue_circle.png')}
											width={32}
											height={32}
											style={{ position: 'absolute', top: 12, right: 16 }}
										/>
									)
								}
								onPress={() => changeLanguage('en')}
							/>

							<SettingsTileUI
								text={t('arabic')}
								icon={<Image source={require('../../assets/images/globus.png')} />}
								actionButton={
									i18n.language === 'ar' ? (
										<Image
											source={require('../../assets/images/selected.png')}
											width={32}
											height={32}
											style={{ position: 'absolute', top: 12, right: 16 }}
										/>
									) : (
										<Image
											source={require('../../assets/images/blue_circle.png')}
											width={32}
											height={32}
											style={{ position: 'absolute', top: 12, right: 16 }}
										/>
									)
								}
								onPress={() => changeLanguage('ar')}
							/>
						</View>
					</>
				) : (
					<>
						<Image source={require('../../assets/images/arrow_back.png')} />

						<Text style={styles.text}>{t('settings')}</Text>

						<View style={{ gap: 32, marginTop: 16 }}>
							<SettingsTileUI
								text={user.username}
								icon={<Image source={{ uri: user.image }} width={32} height={32} resizeMode='cover' />}
								style={{ paddingVertical: 27 }}
							/>

							<SettingsTileUI
								label='Basic'
								text={t('language')}
								icon={<Image source={require('../../assets/images/globus.png')} />}
								actionButton={
									<Image source={require('../../assets/images/arrow_dropdown.png')} style={{ position: 'absolute', top: 20, right: 25 }} />
								}
								onPress={() => setLanguageIsOpen(true)}
							/>

							<SettingsTileUI
								label='Other'
								text={t('logout')}
								icon={<Image source={require('../../assets/images/logout.png')} />}
								actionButton={
									<Image source={require('../../assets/images/arrow_dropdown.png')} style={{ position: 'absolute', top: 20, right: 25 }} />
								}
								onPress={() => dispatch(removeUser())}
							/>
						</View>
					</>
				)}
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 20,
	},
	text: {
		marginTop: 16,
		fontSize: 22,
		fontWeight: '600',
	},
})
