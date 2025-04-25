import { ArrowBack } from '@/components/ui/ArrowBack'
import { ButtonUI } from '@/components/ui/ButtonUI'
import { PINPad } from '@/components/ui/PINPad'
import { Colors } from '@/constants/styles'
import { RootState } from '@/store/store'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Image, Text } from 'react-native'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

export default function EnterPINScreen() {
	const user = useSelector((state: RootState) => state.auth)
	const corePIN = useSelector((state: RootState) => state.auth.PIN)

	const [PIN, setPIN] = useState<string[]>([])

	const router = useRouter()

	const handlePress = () => {
		if (PIN.length === corePIN.length && PIN.every((value, index) => value === corePIN[index])) {
			router.navigate('/(tabs)/Home')
		}
	}

	return (
		<View style={{ flex: 1, backgroundColor: '#fff' }}>
			<ArrowBack />

			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
				<Image source={require('../assets/images/phone.png')} width={24} height={24} />
				<Text style={{ marginTop: 10 }}>{user.email}</Text>
				<Text style={{ marginTop: 10, color: Colors.orange }}>Change Account</Text>
				<Text style={{ fontWeight: '400', color: Colors.lightGray, marginTop: 38 }}>enter 4 digit code:</Text>

				<View style={{ flex: 1, width: '100%', justifyContent: 'space-between' }}>
					<PINPad digitsQuantity={5} PIN={PIN} setPIN={setPIN} />
					<ButtonUI title='Continue' onPress={handlePress} disabled={PIN.length < 5} />
				</View>
			</View>
		</View>
	)
}
