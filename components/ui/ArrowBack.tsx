import { useRouter } from 'expo-router'
import { Image, Pressable } from 'react-native'

export function ArrowBack() {
	const router = useRouter()

	return (
		<Pressable onPress={() => router.back()}>
			<Image
				source={require('../../assets/images/arrow_back.png')}
				style={{ position: 'absolute', top: 17, left: 16, padding: 1 }}
				width={24}
				height={24}
			/>
		</Pressable>
	)
}
