import { useRouter } from 'expo-router'
import { GestureResponderEvent, Image, Pressable, View } from 'react-native'

type Props = {
	onPress?: (event: GestureResponderEvent) => void
}

export function ArrowBack({ onPress }: Props) {
	const router = useRouter()

	const handlePress = (event: GestureResponderEvent) => {
		if (onPress) {
			onPress(event)
		} else router.back()
	}

	return (
		<Pressable onPress={handlePress}>
			<View
				style={{
					position: 'absolute',
					top: 0,
					left: 2,
					width: 50,
					height: 50,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Image source={require('../../assets/images/arrow_back.png')} style={{ padding: 1 }} width={24} height={24} />
			</View>
		</Pressable>
	)
}
