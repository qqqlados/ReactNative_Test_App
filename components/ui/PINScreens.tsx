import { ArrowBack } from '@/components/ui/ArrowBack'
import { ButtonUI } from '@/components/ui/ButtonUI'
import { PINPad } from '@/components/ui/PINPad'
import { Colors } from '@/constants/styles'
import { setPIN, setUser } from '@/store/slices/authSlice'
import { RootState } from '@/store/store'
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

type Props = {
	PIN: string[]
	setPIN: React.Dispatch<React.SetStateAction<string[]>>
}

export function CreatePIN({ PIN, setPIN, navigateToRepeatPIN }: Props & { navigateToRepeatPIN: () => void }) {
	return (
		<View style={{ flex: 1, backgroundColor: '#fff' }}>
			<ArrowBack />

			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
				<Image source={require('../../assets/images/phone.png')} width={24} height={24} />
				<Text style={{ marginTop: 10 }}>Create a Pin code</Text>
				<Text style={{ fontWeight: '400', color: Colors.lightGray, marginTop: 38 }}>enter 5 digit code:</Text>

				<View style={{ flex: 1, width: '100%', justifyContent: 'space-between' }}>
					<PINPad digitsQuantity={5} PIN={PIN} setPIN={setPIN} />

					<ButtonUI title='Continue' onPress={navigateToRepeatPIN} disabled={PIN.length < 5} />
				</View>
			</View>
		</View>
	)
}

export function RepeatPIN({
	PIN,
	setRepeatPinIsShowed,
	userData,
}: Props & {
	setRepeatPinIsShowed: React.Dispatch<React.SetStateAction<boolean>>
	userData: { email: string; username: string; password: string; image: string } | {}
}) {
	const dispatch = useDispatch()

	const [repeatedPIN, setRepeatedPIN] = useState<string[]>([])

	const handlePress = () => {
		if (repeatedPIN.length === PIN.length && repeatedPIN.every((value, index) => value === PIN[index])) {
			setRepeatPinIsShowed(false)

			dispatch(setPIN(repeatedPIN))

			//@ts-ignore
			return dispatch(setUser(userData))
		}
	}

	return (
		<View style={{ flex: 1, backgroundColor: '#fff' }}>
			<ArrowBack />

			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
				<Image source={require('../../assets/images/phone.png')} width={24} height={24} />
				<Text style={{ marginTop: 10 }}>Repeat a Pin code</Text>
				<Text style={{ fontWeight: '400', color: Colors.lightGray, marginTop: 38 }}>enter 5 digit code:</Text>

				<View style={{ flex: 1, width: '100%', justifyContent: 'space-between' }}>
					<PINPad digitsQuantity={5} PIN={repeatedPIN} setPIN={setRepeatedPIN} />
					<ButtonUI title='Continue' onPress={handlePress} disabled={repeatedPIN.length < 5} />
				</View>
			</View>
		</View>
	)
}
