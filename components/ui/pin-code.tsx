import { ArrowBack } from '@/components/ui/ArrowBack'
import { ButtonUI } from '@/components/ui/ButtonUI'
import { PINPad } from '@/components/ui/PINPad'
import { Colors } from '@/constants/styles'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

// export function CreatePIN() {
// 	return (
// 		<View style={{ flex: 1, backgroundColor: '#fff' }}>
// 			<ArrowBack />

// 			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
// 				<Image source={require('../assets/images/phone.png')} width={24} height={24} />
// 				<Text style={{ marginTop: 10 }}>Create a Pin code</Text>
// 				<Text style={{ fontWeight: '400', color: Colors.lightGray, marginTop: 38 }}>enter 5 digit code:</Text>

// 				<View style={{ flex: 1, width: '100%', justifyContent: 'space-between' }}>
// 					<PINPad />
// 					<ButtonUI title='Continue' />
// 				</View>
// 			</View>
// 		</View>
// 	)
// }

// export default function RepeatPIN() {
// 	return (
// 		<View style={{ flex: 1, backgroundColor: '#fff' }}>
// 			<ArrowBack />

// 			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
// 				<Image source={require('../assets/images/phone.png')} width={24} height={24} />
// 				<Text style={{ marginTop: 10 }}>Repeat a Pin code</Text>
// 				<Text style={{ fontWeight: '400', color: Colors.lightGray, marginTop: 38 }}>enter 5 digit code:</Text>

// 				<View style={{ flex: 1, width: '100%', justifyContent: 'space-between' }}>
// 					<PINPad />
// 					<ButtonUI title='Continue' />
// 				</View>
// 			</View>
// 		</View>
// 	)
// }

export function ExistingUserPIN() {
	return (
		<View style={{ flex: 1, backgroundColor: '#fff' }}>
			<ArrowBack />

			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
				<Image source={require('../../assets/images/phone.png')} width={24} height={24} />
				<Text style={{ marginTop: 10 }}>johndoe@test.com</Text>
				<Text style={{ marginTop: 10, color: Colors.orange }}>Change Account</Text>
				<Text style={{ fontWeight: '400', color: Colors.lightGray, marginTop: 38 }}>enter 4 digit code:</Text>

				<View style={{ flex: 1, width: '100%', justifyContent: 'space-between' }}>
					<PINPad digitsQuantity={4} />
					<ButtonUI title='Continue' />
				</View>
			</View>
		</View>
	)
}
