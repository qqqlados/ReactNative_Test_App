import { Colors, Radius } from '@/constants/styles'
import React from 'react'
import { StyleSheet, TextInput, TextInputProps, View, Text } from 'react-native'

type CustomProps = {
	label?: string
	isPassword?: boolean
	leftIcon?: React.ReactNode
	rightIcon?: React.ReactNode
	error?: boolean
}

export const InputUI = React.forwardRef<TextInput, TextInputProps & CustomProps>((props, ref) => {
	return (
		<>
			{props.label && <Text style={styles.label}>{props.label}</Text>}

			<View style={[styles.inputWrapper, props.error && { borderColor: 'red' }]}>
				{props.leftIcon && <View style={styles.leftIcon}>{props.leftIcon}</View>}

				<TextInput
					ref={ref}
					{...props}
					style={[
						styles.input,
						props.isPassword ? { color: Colors.lightGray } : { color: Colors.primary },
						{ paddingLeft: props.leftIcon ? 48 : 16, paddingRight: props.rightIcon ? 48 : 16 },
						props.style,
					]}
					placeholderTextColor={Colors.secondary}
				/>

				{props.rightIcon && <View style={styles.rightIcon}>{props.rightIcon}</View>}
			</View>
		</>
	)
})

const styles = StyleSheet.create({
	label: {
		paddingLeft: 16,
		marginBottom: 8,
		color: Colors.secondary,
	},
	inputWrapper: {
		position: 'relative',
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: Colors.borderColor,
		borderRadius: Radius.r16,
		backgroundColor: 'white',
		height: 56,
		width: '100%',
		marginBottom: 24,
	},
	input: {
		flex: 1,
		height: '100%',
		fontSize: 16,
	},
	leftIcon: {
		position: 'absolute',
		left: 16,
		zIndex: 1,
	},
	rightIcon: {
		position: 'absolute',
		right: 16,
		zIndex: 1,
	},
})
