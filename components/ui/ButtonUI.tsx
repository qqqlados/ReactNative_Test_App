import { Colors, Radius } from '@/constants/styles'
import React from 'react'
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native'

type CustomProps = {
	title: string
	onPress?: (event: GestureResponderEvent) => void
	disabled?: boolean
	styleType?: 'primary' | 'secondary'
}

export function ButtonUI({ title, onPress, disabled, styleType = 'primary' }: CustomProps) {
	return (
		<TouchableOpacity
			onPress={onPress}
			disabled={disabled}
			style={[styles.button, styleType === 'primary' && styles.primary, disabled && styles.disabled]}
		>
			<Text style={[styles.text, styleType === 'secondary' ? { color: Colors.orange } : { color: '#fff' }]}>{title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: 48,
		borderRadius: Radius.r16,
	},
	primary: {
		backgroundColor: Colors.orange,
	},
	disabled: {
		opacity: 0.5,
	},
	text: {
		color: '#fff',
		fontWeight: '500',
		fontFamily: 'InterRegular',
		fontSize: 15,
		textTransform: 'capitalize',
		width: '100%',
		textAlign: 'center',
	},
	textOrange: {
		color: Colors.orange,
	},
})
