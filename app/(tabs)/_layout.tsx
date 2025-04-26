import { Tabs } from 'expo-router'
import { Image } from 'react-native'
import { useTranslation } from 'react-i18next'

export default function TabLayout() {
	const { t } = useTranslation()

	return (
		<Tabs
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size, focused }) => {
					let icon

					if (route.name === 'Home') icon = focused ? require('../../assets/images/home_filled.png') : require('../../assets/images/home.png')
					else if (route.name === 'Profile') {
						icon = focused ? require('../../assets/images/profile_filled.png') : require('../../assets/images/profile.png')
					} else if (route.name === 'Search') {
						icon = require('../../assets/images/search_bottomTab.png')
					} else if (route.name === 'Portfolio') {
						icon = require('../../assets/images/portfolio.png')
					}

					//@ts-ignore
					return (
						<Image
							source={icon}
							style={{
								width: 27,
								height: 27,
								resizeMode: 'contain',
							}}
						/>
					)
				},
				tabBarActiveTintColor: '#FF6600',
				tabBarStyle: { marginBottom: -10, marginRight: -20, marginLeft: -20 },
				tabBarInactiveTintColor: 'gray',

				headerShown: false,
				animation: 'shift',
			})}
		>
			<Tabs.Screen name='Home' options={{ title: t('Home') }} />
			<Tabs.Screen name='Portfolio' options={{ title: t('Portfolio') }} />
			<Tabs.Screen name='Search' options={{ title: t('Search') }} />
			<Tabs.Screen name='Profile' options={{ title: t('Profile') }} />
		</Tabs>
	)
}
