import { ArrowBack } from '@/components/ui/ArrowBack'
import { SettingsTileUI } from '@/components/ui/SettingsTileUI'
import { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export default function Profile() {
	const [languageIsOpen, setLanguageIsOpen] = useState<boolean>(false)
	const [selectedLanguage, setSelectedLanguage] = useState<string>('English')

	return (
		<>
			<View style={styles.container}>
				{languageIsOpen ? (
					<>
						<Pressable onPress={() => setLanguageIsOpen(false)}>
							<Image source={require('../../assets/images/arrow_back.png')} />
						</Pressable>

						<Text style={styles.text}>Language</Text>

						<View style={{ gap: 16, marginTop: 16 }}>
							<SettingsTileUI
								text='English'
								icon={<Image source={require('../../assets/images/globus.png')} />}
								actionButton={
									selectedLanguage === 'English' ? (
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
								onPress={() => setSelectedLanguage('English')}
							/>

							<SettingsTileUI
								text='Arabic'
								icon={<Image source={require('../../assets/images/globus.png')} />}
								actionButton={
									selectedLanguage === 'Arabic' ? (
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
								onPress={() => setSelectedLanguage('Arabic')}
							/>
						</View>
					</>
				) : (
					<>
						<Image source={require('../../assets/images/arrow_back.png')} />

						<Text style={styles.text}>Settings</Text>

						<View style={{ gap: 32, marginTop: 16 }}>
							<SettingsTileUI
								text='John Doe'
								icon={<View style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: '#EBEFF5' }}></View>}
								style={{ paddingVertical: 27 }}
							/>

							<SettingsTileUI
								label='Basic'
								text='Language'
								icon={<Image source={require('../../assets/images/globus.png')} />}
								actionButton={
									<Image source={require('../../assets/images/arrow_dropdown.png')} style={{ position: 'absolute', top: 20, right: 25 }} />
								}
								onPress={() => setLanguageIsOpen(true)}
							/>

							<SettingsTileUI
								label='Other'
								text='Log out'
								icon={<Image source={require('../../assets/images/logout.png')} />}
								actionButton={
									<Image source={require('../../assets/images/arrow_dropdown.png')} style={{ position: 'absolute', top: 20, right: 25 }} />
								}
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
