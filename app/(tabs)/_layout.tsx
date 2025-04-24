import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'react-native'

export default function TabLayout() {
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
				tabBarInactiveTintColor: 'gray',
				// tabBarStyle: {},
				headerShown: false,
				animation: 'shift',
			})}
		>
			<Tabs.Screen name='Home' />
			<Tabs.Screen name='Portfolio' />
			<Tabs.Screen name='Search' />
			<Tabs.Screen name='Profile' />
		</Tabs>
	)
}
